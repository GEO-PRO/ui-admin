<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Record Species</h2>
    <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
      <button
        class="btn btn-primary shadow-md mr-2"
        @click="handleShowModalCreate"
      >
        Add New Record
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
              <label>Taxonomy <span class="text-red-500">(*)</span></label>
              <div class="mt-2">
                <TomSelect
                  v-model="inputValue.taxonomy_id"
                  :options="{
                    placeholder: 'Select your favorite actors',
                  }"
                  class="w-full"
                >
                  <option :value="inputValue.taxonomy_id">
                    {{ inputValue.taxonomy_browser }}
                  </option>
                  <option
                    v-for="item in taxonomyValueOption"
                    :key="{ item }"
                    :value="item.id"
                  >
                    {{ item.taxonomy_browser }}
                  </option>
                </TomSelect>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Species Epithet <span class="text-red-500">(*)</span></label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Species Epithet"
                  v-model="inputValue.sp_1"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Author</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Author"
                  v-model="inputValue.author_1"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Rank 1</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Rank 1"
                  v-model="inputValue.rank_1"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Infraspecific Epithet 1</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Infraspecific Epithet 1"
                  v-model="inputValue.sp_2"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Author 2</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Author 2"
                  v-model="inputValue.author_2"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Rank 2</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Rank 2"
                  v-model="inputValue.rank_2"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Infraspecific Epithet 2</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Infraspecific Epithet 2"
                  v-model="inputValue.sp_3"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Author 3</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Author 3"
                  v-model="inputValue.author_3"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Taxonomic rank</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Taxonomic rank"
                  v-model="inputValue.taxonomy_rank"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Author</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Author"
                  v-model="inputValue.author"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Taxonomic rank</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Taxonomic rank"
                  v-model="inputValue.common"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Curation notes</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Curation notes"
                  v-model="inputValue.curatenote"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Taxonomic reference</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Taxonomic reference"
                  v-model="inputValue.citation"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <div>
                  <label for="regular-form-1" class="form-label text-left"
                    >Year of description</label
                  >
                  <input
                    id="regular-form-1"
                    type="text"
                    class="form-control"
                    placeholder="Year of description"
                    v-model="inputValue.author_year"
                  />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Synonyme</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Synonyme"
                  v-model="inputValue.synonym"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <div>
                  <label for="regular-form-1" class="form-label text-left"
                    >Habit</label
                  >
                  <input
                    id="regular-form-1"
                    type="text"
                    class="form-control"
                    placeholder="Habit"
                    v-model="inputValue.habit"
                  />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Lifeform</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Lifeform"
                  v-model="inputValue.lifeform"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <div>
                  <label for="regular-form-1" class="form-label text-left"
                    >Niche</label
                  >
                  <input
                    id="regular-form-1"
                    type="text"
                    class="form-control"
                    placeholder="Niche"
                    v-model="inputValue.niche"
                  />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Description</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Description"
                  v-model="inputValue.description"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <div>
                  <label for="regular-form-1" class="form-label text-left"
                    >Habitat</label
                  >
                  <input
                    id="regular-form-1"
                    type="text"
                    class="form-control"
                    placeholder="Habitat"
                    v-model="inputValue.habitat_txt"
                  />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Distribution</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Distribution"
                  v-model="inputValue.distribution"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <div>
                  <label for="regular-form-1" class="form-label text-left"
                    >Phenology</label
                  >
                  <input
                    id="regular-form-1"
                    type="text"
                    class="form-control"
                    placeholder="Phenology"
                    v-model="inputValue.phenology"
                  />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >IUCN Red List</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="IUCN Red List"
                  v-model="inputValue.iucn"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <div>
                  <label for="regular-form-1" class="form-label text-left"
                    >IUCN Version</label
                  >
                  <input
                    id="regular-form-1"
                    type="text"
                    class="form-control"
                    placeholder="IUCN Version"
                    v-model="inputValue.iucn_version"
                  />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >CITES</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="CITES"
                  v-model="inputValue.cites"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <div>
                  <label for="regular-form-1" class="form-label text-left"
                    >SDVN</label
                  >
                  <input
                    id="regular-form-1"
                    type="text"
                    class="form-control"
                    placeholder="SDVN"
                    v-model="inputValue.sdvn"
                  />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Decree 64/2019/ND-CP</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Decree 64/2019/ND-CP"
                  v-model="inputValue.nd_84_2021"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <div>
                  <label for="regular-form-1" class="form-label text-left"
                    >Decree 84/2021/ND-CP</label
                  >
                  <input
                    id="regular-form-1"
                    type="text"
                    class="form-control"
                    placeholder="Decree 84/2021/ND-CP"
                    v-model="inputValue.nd_64_2019"
                  />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <div>
                  <label for="regular-form-1" class="form-label text-left"
                    >Endemism Note</label
                  >
                  <input
                    id="regular-form-1"
                    type="text"
                    class="form-control"
                    placeholder="Endemism Note"
                    v-model="inputValue.endemism_note"
                  />
                </div>
              </div>
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Circulars 35/2018/TT-BTNMT</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Circulars 35/2018/TT-BTNMT"
                  v-model="inputValue.tt_35_2018"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-left mb-5 col-span-1">
                <label for="regular-form-1" class="form-label text-left"
                  >Host</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  class="form-control"
                  placeholder="Host"
                  v-model="inputValue.hostps"
                />
              </div>
              <div class="text-left mb-5 col-span-1">
                <div>
                  <label for="regular-form-1" class="form-label text-left"
                    >Source</label
                  >
                  <input
                    id="regular-form-1"
                    type="text"
                    class="form-control"
                    placeholder="Source"
                    v-model="inputValue.source"
                  />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-5">
              <div class="text-left mb-5 col-span-1">
                <div>
                  <label for="regular-form-1" class="form-label text-left"
                    >Notes</label
                  >
                  <input
                    id="regular-form-1"
                    type="text"
                    class="form-control"
                    placeholder="Notes"
                    v-model="inputValue.note"
                  />
                </div>
              </div>
            </div>
            <div class="grid grid-cols-4 gap-5">
              <div class="text-left mb-5 col-span-1">
                <div class="form-check form-switch">
                  <input
                    id="taxonomy_status"
                    class="form-check-input"
                    type="checkbox"
                    v-model="inputValue.taxonomy_status"
                  />
                  <label class="form-check-label" for="checkbox-switch-7"
                    >Taxonomic status</label
                  >
                </div>
              </div>
              <div class="text-left mb-5 col-span-1">
                <div class="form-check form-switch">
                  <input
                    id="taxonomy_status"
                    class="form-check-input"
                    type="checkbox"
                    v-model="inputValue.redlist"
                  />
                  <label class="form-check-label" for="checkbox-switch-7"
                    >Red List</label
                  >
                </div>
              </div>
              <div class="text-left mb-5 col-span-1">
                <div class="form-check form-switch">
                  <input
                    id="taxonomy_status"
                    class="form-check-input"
                    type="checkbox"
                    v-model="inputValue.endemism"
                  />
                  <label class="form-check-label" for="checkbox-switch-7"
                    >Endemism</label
                  >
                </div>
              </div>
              <div class="text-left mb-5 col-span-1">
                <div class="form-check form-switch">
                  <input
                    id="taxonomy_status"
                    class="form-check-input"
                    type="checkbox"
                    v-model="inputValue.cultivated"
                  />
                  <label class="form-check-label" for="checkbox-switch-7"
                    >Cultivated</label
                  >
                </div>
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

    <!-- BEGIN: Edit Modal -->
    <Modal
      backdrop="static"
      :show="editModalPreview"
      @hidden="editModalPreview = false"
    >
      <ModalBody class="px-5 py-10">
        <div class="text-center">
          <div class="mb-5">EDIT MODAL</div>
          <button
            type="button"
            @click="editModalPreview = false"
            class="btn btn-primary w-24"
          >
            Ok
          </button>
        </div>
      </ModalBody>
    </Modal>
    <!-- END: Edit Modal -->
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
const editModalPreview = ref(false);
const ModalPreview = ref(false);
const taxonomyValueOption = ref([]);
const actionModal = ref();

/* Create */
const handleShowModalCreate = () => {
  setDefaultInputValue();
  actionModal.value = "create";
  ModalPreview.value = true;
};

const handleCreate = () => {
  axios({
    url: `${BaseURL}record-species/create`,
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
    url: `${BaseURL}record-species/delete`,
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
const idEdit = ref();
const handleGetEdit = (id) => {
  idEdit.value = id;
  axios({
    url: `${BaseURL}record-species?id=${id}`,
    method: "GET",
  })
    .then((result) => {
      inputValue.value = result.data;
    })
    .catch((err) => {
      console.log("err :>> ", err);
    });
};

const handleSubmitUpdate = () => {
  const valueRequestUpdate = {
    ...inputValue.value,
    id: idEdit.value,
    last_updated: timeNow(),
  };
  delete valueRequestUpdate.taxonomy_browser;
  axios({
    url: `${BaseURL}record-species/update`,
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
    ajaxURL: `${BaseURL}record-species/all`,
    ajaxSorting: true,
    headerHozAlign: "left",
    pagination: "local",
    paginationSize: 10,
    paginationSizeSelector: [10, 20, 30, 40],
    placeholder: "No matching records found",
    columns: [
      // For HTML table
      {
        title: "",
        minWidth: 10,
        field: "edit_action",
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
        field: "delete_action",
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
        title: "Taxonomy browser",
        minWidth: 200,
        maxWidth: 400,
        responsive: 0,
        field: "taxonomy_browser",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>
                  <div class="font-medium whitespace-nowrap hover:whitespace-normal">${
                    cell.getData().taxonomy_browser
                  }</div>
                </div>`;
        },
      },
      {
        title: "Species Epithet",
        minWidth: 200,
        field: "sp_1",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().sp_1}</div>`;
        },
      },
      {
        title: "Author 1",
        minWidth: 200,
        field: "author_1",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().author_1}</div>`;
        },
      },
      {
        title: "Rank 1",
        minWidth: 200,
        field: "rank_1",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().rank_1}</div>`;
        },
      },
      {
        title: "Infraspecific Epithet 1",
        minWidth: 200,
        field: "sp_2",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().sp_2}</div>`;
        },
      },
      {
        title: "Author 2",
        minWidth: 200,
        field: "author_2",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().author_2}</div>`;
        },
      },
      {
        title: "Rank 2",
        minWidth: 200,
        field: "rank_2",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().rank_2}</div>`;
        },
      },
      {
        title: "Species Epithet 3",
        minWidth: 200,
        field: "sp_3",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().sp_3}</div>`;
        },
      },
      {
        title: "Author 3",
        minWidth: 200,
        field: "author_3",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().author_3}</div>`;
        },
      },
      {
        title: "Taxonomy Status",
        minWidth: 200,
        field: "taxonomy_status",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().taxonomy_status}</div>`;
        },
      },
      {
        title: "Taxonomy Rank",
        minWidth: 200,
        field: "taxonomy_rank",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().taxonomy_rank}</div>`;
        },
      },
      {
        title: "Author",
        minWidth: 200,
        field: "author",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().author}</div>`;
        },
      },
      {
        title: "Common name",
        minWidth: 200,
        field: "common",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().common}</div>`;
        },
      },
      {
        title: "Taxonomic reference",
        minWidth: 200,
        field: "citation",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().citation}</div>`;
        },
      },
      {
        title: "Year of description",
        minWidth: 200,
        field: "author_year",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().author_year}</div>`;
        },
      },
      {
        title: "Synonym",
        minWidth: 200,
        field: "synonym",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().synonym}</div>`;
        },
      },
      {
        title: "Habit",
        minWidth: 200,
        field: "habit",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().habit}</div>`;
        },
      },
      {
        title: "Lifeform",
        minWidth: 200,
        field: "lifeform",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().lifeform}</div>`;
        },
      },
      {
        title: "Niche",
        minWidth: 200,
        field: "niche",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().niche}</div>`;
        },
      },
      {
        title: "Habitat",
        minWidth: 200,
        field: "habitat_txt",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().habitat_txt}</div>`;
        },
      },
      {
        title: "Distribution",
        minWidth: 200,
        field: "distribution",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().distribution}</div>`;
        },
      },
      {
        title: "Phenology",
        minWidth: 200,
        field: "phenology",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().phenology}</div>`;
        },
      },
      {
        title: "Red List",
        minWidth: 200,
        field: "redlist",
        vertAlign: "middle",
        formatter(cell) {
          return `<div class="flex items-center lg:justify-center ${
            cell.getData().redlist ? "text-success" : "text-danger"
          }">
               ${
                 cell.getData().redlist
                   ? '<i data-lucide="check-square" class="w-4 h-4 mr-2"></i>'
                   : '<i data-lucide="x-square" class="w-4 h-4 mr-2"></i>'
               }
              </div>`;
        },
      },
      {
        title: "IUCN Red List",
        minWidth: 200,
        field: "iucn",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().iucn}</div>`;
        },
      },
      {
        title: "IUCN Version",
        minWidth: 200,
        field: "iucn_version",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().iucn_version}</div>`;
        },
      },
      {
        title: "CITES",
        minWidth: 200,
        field: "cites",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().cites}</div>`;
        },
      },
      {
        title: "SDVN",
        minWidth: 200,
        field: "sdvn",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().sdvn}</div>`;
        },
      },
      {
        title: "Decree 64/2019/ND-CP",
        minWidth: 200,
        field: "nd_84_2021",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().nd_84_2021}</div>`;
        },
      },
      {
        title: "Decree 84/2021/ND-CP",
        minWidth: 200,
        field: "nd_64_2019",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().nd_64_2019}</div>`;
        },
      },
      {
        title: "Endemism",
        minWidth: 200,
        field: "endemism",
        vertAlign: "middle",
        formatter(cell) {
          return `<div class="flex items-center lg:justify-center ${
            cell.getData().endemism ? "text-success" : "text-danger"
          }">
               ${
                 cell.getData().endemism
                   ? '<i data-lucide="check-square" class="w-4 h-4 mr-2"></i>'
                   : '<i data-lucide="x-square" class="w-4 h-4 mr-2"></i>'
               }
              </div>`;
        },
      },
      {
        title: "Endemism Note",
        minWidth: 200,
        field: "endemism_note",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().endemism_note}</div>`;
        },
      },
      {
        title: "Circulars 35/2018/TT-BTNMT",
        minWidth: 200,
        field: "tt_35_2018",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().tt_35_2018}</div>`;
        },
      },
      {
        title: "Cultivated",
        minWidth: 200,
        field: "cultivated",
        vertAlign: "middle",
        formatter(cell) {
          return `<div class="flex items-center lg:justify-center ${
            cell.getData().cultivated ? "text-success" : "text-danger"
          }">
               ${
                 cell.getData().endemism
                   ? '<i data-lucide="check-square" class="w-4 h-4 mr-2"></i>'
                   : '<i data-lucide="x-square" class="w-4 h-4 mr-2"></i>'
               }
              </div>`;
        },
      },
      {
        title: "Host",
        minWidth: 200,
        field: "hostps",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().hostps}</div>`;
        },
      },
      {
        title: "Source",
        minWidth: 200,
        field: "source",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().source}</div>`;
        },
      },
      {
        title: "Cultivated",
        minWidth: 200,
        field: "curatenote",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().curatenote}</div>`;
        },
      },
      {
        title: "Notes",
        minWidth: 200,
        field: "note",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${cell.getData().note}</div>`;
        },
      },
      {
        title: "Description",
        minWidth: 200,
        maxWidth: 200,
        field: "description",
        vertAlign: "middle",
        formatter(cell) {
          return `<div class="overflow-x-scroll">${
            cell.getData().description
          }</div>`;
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
    url: `${BaseURL}taxonomyOption`,
    method: "GET",
  })
    .then((result) => {
      result.data.forEach((val) => {
        taxonomyValueOption.value.push(val);
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
  