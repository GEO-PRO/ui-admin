<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Map</h2>
    <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
      <button
        class="btn btn-primary shadow-md mr-2"
        @click="handleShowModalCreate"
      >
        Add New
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
            <div class="text-left mb-5">
              <label
                >Record Species <span class="text-red-500">(*)</span></label
              >
              <div class="mt-2">
                <TomSelect
                  v-model="inputValue.record_species_id"
                  :options="{
                    placeholder: 'Select your favorite actors',
                  }"
                  class="w-full"
                >
                  <option :value="inputValue.record_species_id">
                    {{ inputValue.full_name }}
                  </option>
                  <option
                    v-for="item in recordSpeciesFullnameOption"
                    :key="{ item }"
                    :value="item.id"
                  >
                    {{ item.full_name }}
                  </option>
                </TomSelect>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Lattitude</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Lattitude"
                  v-model="inputValue.lat"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Longtitude</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Longtitude"
                  v-model="inputValue.lng"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >VN2000 - X</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="VN2000 - X"
                  v-model="inputValue.x"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >VN2000 - Y</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="VN2000 - Y"
                  v-model="inputValue.y"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label>North/South</label>
                <div class="mt-2">
                  <TomSelect v-model="inputValue.ns" class="w-full">
                    <option value="N">North</option>
                    <option value="S">South</option>
                  </TomSelect>
                </div>
              </div>
              <div class="text-left mb-5 col-span-1">
                <label>East/West</label>
                <div class="mt-2">
                  <TomSelect v-model="inputValue.ew" class="w-full">
                    <option value="E">East</option>
                    <option value="W">West</option>
                  </TomSelect>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Alttitude</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Alttitude"
                  v-model="inputValue.alt"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Alttitude max</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Alttitude max"
                  v-model="inputValue.alt_max"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-2">
                <label for="regular-form-1" class="form-label text-left"
                  >Alttitude unit</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Alttitude unit"
                  v-model="inputValue.alt_unit"
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
    url: `${BaseURL}map/create`,
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
    url: `${BaseURL}map/delete`,
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
    url: `${BaseURL}map?id=${id}`,
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
    url: `${BaseURL}map/update`,
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
    ajaxURL: `${BaseURL}map/all`,
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
        title: "Record Species",
        minWidth: 200,
        field: "record_species_id",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().full_name}</div>`;
        },
      },
      {
        title: "Lattitude",
        minWidth: 200,
        field: "lat",
        vertAlign: "middle",
      },
      {
        title: "Longtitude",
        minWidth: 200,
        field: "lng",
        vertAlign: "middle",
      },
      {
        title: "VN2000 - X",
        minWidth: 200,
        field: "x",
        vertAlign: "middle",
      },
      {
        title: "VN2000 - Y",
        minWidth: 200,
        field: "y",
        vertAlign: "middle",
      },
      {
        title: "North/South",
        minWidth: 200,
        field: "ns",
        vertAlign: "middle",
      },
      {
        title: "East/West",
        minWidth: 200,
        field: "ew",
        vertAlign: "middle",
      },
      {
        title: "Alttitude",
        minWidth: 200,
        field: "alt",
        vertAlign: "middle",
      },
      {
        title: "Alttitude max",
        minWidth: 200,
        field: "alt_max",
        vertAlign: "middle",
      },
      {
        title: "Alttitude unit",
        minWidth: 200,
        field: "alt_unit",
        vertAlign: "middle",
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
  