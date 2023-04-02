<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Collection</h2>
    <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
      <button
        class="btn btn-primary shadow-md mr-2"
        @click="handleShowModalCreate"
      >
        Add New Collection
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
            <div class="text-left mb-5">
              <label>Position <span class="text-red-500">(*)</span></label>
              <div class="mt-2">
                <TomSelect
                  v-model="inputValue.position_id"
                  :options="{
                    placeholder: 'Select your favorite actors',
                  }"
                  class="w-full"
                >
                  <option :value="inputValue.position_id">
                    {{ inputValue.position.place }} -
                    {{ inputValue.position.gazetteer }} -
                    {{ inputValue.position.minor_area }}-
                    {{ inputValue.position.major_area }} -
                    {{ inputValue.position.country }}
                  </option>
                  <option
                    v-for="item in positionOption"
                    :key="{ item }"
                    :value="item.id"
                  >
                    {{ item.place }} - {{ item.gazetteer }} -
                    {{ item.minor_area }}- {{ item.major_area }} -
                    {{ item.country }}
                  </option>
                </TomSelect>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Number</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Number"
                  v-model="inputValue.number"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Number 2</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Number 2"
                  v-model="inputValue.number_2"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Project</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Project"
                  v-model="inputValue.project"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Botanical record category</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Botanical record category"
                  v-model="inputValue.botreccat"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Institution</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Institution"
                  v-model="inputValue.institution"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Barcode</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Barcode"
                  v-model="inputValue.barcode"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Type</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Type"
                  v-model="inputValue.type"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >collector of sample</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="collector of sample"
                  v-model="inputValue.sample_all"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Main collector</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Main collector"
                  v-model="inputValue.collector"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Additional collector</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Additional collector"
                  v-model="inputValue.add_collector"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Collection date</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Collection date"
                  v-model="inputValue.collection_day"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Collection month</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Collection month"
                  v-model="inputValue.collection_month"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Collection year</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Collection year"
                  v-model="inputValue.collection_year"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Image</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Image"
                  v-model="inputValue.image_order"
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
const positionOption = ref([]);
const actionModal = ref();

/* Create */
const handleShowModalCreate = () => {
  setDefaultInputValue();
  actionModal.value = "create";
  ModalPreview.value = true;
};

const handleCreate = () => {
  axios({
    url: `${BaseURL}collection/create`,
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
    url: `${BaseURL}collection/delete`,
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
    url: `${BaseURL}collection?id=${id}`,
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
    url: `${BaseURL}collection/update`,
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
    ajaxURL: `${BaseURL}collection/all`,
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
        maxWidth: 400,
        responsive: 0,
        field: "full_name",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>
                  <div class="font-medium whitespace-nowrap hover:whitespace-normal">${
                    cell.getData().full_name
                  }</div>
                </div>`;
        },
      },
      {
        title: "Position",
        minWidth: 200,
        maxWidth: 300,
        field: "position",
        vertAlign: "middle",
        formatter(cell) {
          return `<div class="whitespace-nowrap hover:whitespace-normal">${
            cell.getData().position.place
          }, ${cell.getData().position.gazetteer},${
            cell.getData().position.minor_area
          },${cell.getData().position.major_area},${
            cell.getData().position.country
          }</div>`;
        },
      },
      {
        title: "Number",
        minWidth: 200,
        field: "number",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().number}</div>`;
        },
      },
      {
        title: "Number 2",
        minWidth: 200,
        field: "number_2",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().number_2}</div>`;
        },
      },
      {
        title: "Project",
        minWidth: 200,
        field: "project",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().project}</div>`;
        },
      },
      {
        title: "Botanical record category",
        minWidth: 200,
        field: "botreccat",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().botreccat}</div>`;
        },
      },
      {
        title: "Institution",
        minWidth: 200,
        field: "institution",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().institution}</div>`;
        },
      },
      {
        title: "Barcode",
        minWidth: 200,
        field: "barcode",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().barcode}</div>`;
        },
      },
      {
        title: "Type",
        minWidth: 200,
        field: "type",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().type}</div>`;
        },
      },
      {
        title: "Number of sample",
        minWidth: 200,
        field: "sample_all",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().sample_all}</div>`;
        },
      },
      {
        title: "Main collector",
        minWidth: 200,
        field: "collector",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().collector}</div>`;
        },
      },
      {
        title: "Additional collector",
        minWidth: 200,
        field: "add_collector",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().add_collector}</div>`;
        },
      },
      {
        title: "Collection date",
        minWidth: 200,
        field: "collection_day",
        vertAlign: "middle",
      },
      {
        title: "Collection month",
        minWidth: 200,
        field: "collection_month",
        vertAlign: "middle",
      },
      {
        title: "Collection year",
        minWidth: 100,
        field: "collection_year",
        vertAlign: "middle",
      },
      {
        title: "Image",
        minWidth: 100,
        field: "image_order",
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
  axios({
    url: `${BaseURL}positionOption`,
    method: "GET",
  })
    .then((result) => {
      result.data.forEach((val) => {
        positionOption.value.push(val);
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
  