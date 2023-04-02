<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Position</h2>
    <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
      <button
        class="btn btn-primary shadow-md mr-2"
        @click="handleShowModalCreate"
      >
        Add New Position
      </button>
    </div>
  </div>
  <!-- BEGIN: HTML Table Data -->
  <div class="intro-y box p-5 mt-5">
    <!--  -->
    <div class="overflow-x-auto scrollbar-hidden">
      <div
        id="tabulator"
        ref="tableRef"
        class="table-report table-report--tabulator"
      ></div>
    </div>

    <!-- BEGIN: Create Modal -->
    <Modal
      backdrop="static"
      :show="ModalPreview"
      @hidden="ModalPreview = false"
      size="modal-xl"
    >
      <ModalBody class="px-5 py-10">
        <div class="text-center">
          <div class="mb-5">
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-2">
                <label for="regular-form-1" class="form-label text-left"
                  >Country</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Country"
                  v-model="inputValue.country"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Major area</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Major area"
                  v-model="inputValue.major_area"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Minor area</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Minor area"
                  v-model="inputValue.minor_area"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Gazetteer</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Gazetteer"
                  v-model="inputValue.gazetteer"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Village</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Village"
                  v-model="inputValue.village"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Place</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Place"
                  v-model="inputValue.place"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Location notes</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Location notes"
                  v-model="inputValue.location_note"
                />
              </div>
            </div>
          </div>

          <button
            type="button"
            @click="ModalPreview = false"
            class="btn btn-primary w-24"
          >
            Cancel
          </button>
          <button
            v-if="actionModal == 'create'"
            type="button"
            @click="handleCreate()"
            class="btn bg-green-500 w-24 mx-2 text-white hover:bg-green-400"
          >
            Create
          </button>
          <button
            v-if="actionModal == 'update'"
            type="button"
            @click="handleSubmitUpdate()"
            class="btn bg-green-500 w-24 mx-2 text-white hover:bg-green-400"
          >
            Update
          </button>
        </div>
      </ModalBody>
    </Modal>
    <!-- END: Create Modal -->

    <!-- BEGIN: Delete Confirmation Modal -->
    <Modal :show="deleteModalPreview" @hidden="deleteModalPreview = false">
      <ModalBody class="p-0">
        <div class="p-5 text-center">
          <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
          <div class="text-3xl mt-5">Are you sure?</div>
          <div class="text-slate-500 mt-2">
            Do you really want to delete these records?
          </div>
        </div>
        <div class="px-5 pb-8 text-center">
          <button
            type="button"
            @click="deleteModalPreview = false"
            class="btn btn-outline-secondary w-24 mr-1"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-danger w-24"
            @click="handleSubmitDelete()"
          >
            Delete
          </button>
        </div>
      </ModalBody>
    </Modal>
    <!-- END: Delete Confirmation Modal -->
  </div>
  <!-- END: HTML Table Data -->
</template>

<script setup>
import { ref, onMounted } from "vue";
import { createIcons, icons } from "lucide";
import Tabulator from "tabulator-tables";
import dom from "@left4code/tw-starter/dist/js/dom";
import { BaseURL, timeNow } from "@/custom-components";
import { inputValue, setDefaultInputValue } from "./index.js";
import axios from "axios";

const tableRef = ref();
const tabulator = ref();

const deleteModalPreview = ref(false);
const ModalPreview = ref(false);
const recordSpeciesFullnameOption = ref([]);
const actionModal = ref();

/* Create */
const handleShowModalCreate = () => {
  setDefaultInputValue();
  actionModal.value = "create";
  ModalPreview.value = true;
};

const handleCreate = () => {
  axios({
    url: `${BaseURL}position/create`,
    method: "POST",
    data: inputValue.value,
  })
    .then((result) => {
      alert("Create success!");
      ModalPreview.value = false;
      initTabulator();
    })
    .catch((err) => {
      console.log("err :>> ", err);
    });
};

/* Delete */
const idDelete = ref();

const handleSubmitDelete = () => {
  axios({
    url: `${BaseURL}position/delete`,
    method: "POST",
    data: { id: idDelete.value },
  })
    .then((result) => {
      alert("Delete success!");
      deleteModalPreview.value = false;
      initTabulator();
    })
    .catch((err) => {
      console.log("err :>> ", err);
    });
};

/* Edit */
console.log("inputValue.value :>> ", inputValue.value);

const idEdit = ref();
const handleGetEdit = (id) => {
  idEdit.value = id;
  axios({
    url: `${BaseURL}position?id=${id}`,
    method: "GET",
  })
    .then((result) => {
      inputValue.value = result.data[0];
    })
    .catch((err) => {
      console.log("err :>> ", err);
    });
};

const handleSubmitUpdate = () => {
  const valueRequestUpdate = {
    ...inputValue.value,
    id: idEdit.value,
  };
  delete valueRequestUpdate.full_name;
  delete valueRequestUpdate.position;
  axios({
    url: `${BaseURL}position/update`,
    method: "POST",
    data: valueRequestUpdate,
  })
    .then((result) => {
      console.log("result.data :>> ", result.data);
      alert("Update success!");
      ModalPreview.value = false;
      initTabulator();
    })
    .catch((err) => {
      console.log("err :>> ", err);
    });
};

const initTabulator = () => {
  tabulator.value = new Tabulator(tableRef.value, {
    ajaxURL: `${BaseURL}position/all`,
    ajaxFiltering: true,
    ajaxSorting: true,
    headerHozAlign: "left",
    scrollHorizontal: true,
    pagination: "local",
    paginationSize: 10,
    paginationSizeSelector: [10, 20, 30, 40],
    placeholder: "No matching records found",
    columns: [
      // For HTML table
      {
        title: "",
        minWidth: 10,
        field: "id",
        hozAlign: "center",
        vertAlign: "middle",
        formatter(cell) {
          const a = dom(`<div class="flex lg:justify-center items-center">
                <a class="flex items-center mr-3 edit-btn" href="javascript:;">
                  <i data-lucide="check-square" class="w-4 h-4 mr-1"></i> Edit
                </a>
              </div>`);
          dom(a).on("click", function () {
            handleGetEdit(cell.getData().id);
            actionModal.value = "update";
            ModalPreview.value = true;
          });
          return a[0];
        },
      },
      {
        title: "",
        minWidth: 10,
        field: "id",
        hozAlign: "center",
        vertAlign: "middle",
        formatter(cell) {
          const a = dom(`<div class="flex lg:justify-center items-center">
                <a class="flex items-center text-danger delete-btn" href="javascript:;">
                   <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i> Delete
                 </a>
              </div>`);
          dom(a).on("click", function () {
            idDelete.value = cell.getData().id;
            deleteModalPreview.value = true;
          });
          return a[0];
        },
      },
      {
        title: "Country",
        minWidth: 200,
        field: "country",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().country}</div>`;
        },
      },
      {
        title: "Major area",
        minWidth: 200,
        field: "major_area",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().major_area}</div>`;
        },
      },
      {
        title: "Minor area",
        minWidth: 200,
        field: "minor_area",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().minor_area}</div>`;
        },
      },
      {
        title: "Gazetteer",
        minWidth: 200,
        field: "gazetteer",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().gazetteer}</div>`;
        },
      },
      {
        title: "Village",
        minWidth: 200,
        field: "village",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().village}</div>`;
        },
      },
      {
        title: "Place",
        minWidth: 200,
        field: "place",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().place}</div>`;
        },
      },
      {
        title: "Location notes",
        minWidth: 200,
        field: "location_note",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().location_note}</div>`;
        },
      },
    ],
    renderComplete() {
      createIcons({
        icons,
        "stroke-width": 1.5,
        nameAttr: "data-lucide",
      });
    },
  });
};

// Redraw table onresize
const reInitOnResizeWindow = () => {
  window.addEventListener("resize", () => {
    tabulator.value.redraw();
    createIcons({
      icons,
      "stroke-width": 1.5,
      nameAttr: "data-lucide",
    });
  });
};

onMounted(() => {
  initTabulator();
  reInitOnResizeWindow();
  axios({
    url: `${BaseURL}recordSpeciesFullnameOption`,
    method: "GET",
  })
    .then((result) => {
      result.data.forEach((val) => {
        recordSpeciesFullnameOption.value.push(val);
      });
    })
    .catch((err) => {
      console.log("err :>> ", err);
    });
});
</script>

<style>
#tabulator {
  width: 100%;
  overflow-x: auto;
}
</style>
  