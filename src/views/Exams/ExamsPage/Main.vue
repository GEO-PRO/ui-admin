<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Quản lý đề thi</h2>
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
    <div class="flex flex-col sm:flex-row sm:items-end xl:items-start mb-5">
      <form id="tabulator-html-filter-form" class="xl:flex sm:mr-auto">
        <div class="sm:flex items-center sm:mr-4">
          <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2"
            >Field</label
          >
          <select
            id="tabulator-html-filter-field"
            v-model="filter.field"
            class="form-select w-full sm:w-32 2xl:w-full mt-2 sm:mt-0"
          >
            <option value="name">Đề</option>
            <option value="title_name">Chủ đề</option>
            <option value="tag_name">Nhãn</option>
          </select>
        </div>
        <div class="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
          <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2"
            >Type</label
          >
          <select
            id="tabulator-html-filter-type"
            v-model="filter.type"
            class="form-select w-full mt-2 sm:mt-0 sm:w-auto"
          >
            <option value="like" selected>like</option>
            <option value="=">=</option>
            <option value="!=">!=</option>
          </select>
        </div>
        <div class="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
          <label class="w-12 flex-none xl:w-auto xl:flex-initial mr-2"
            >Value</label
          >
          <input
            id="tabulator-html-filter-value"
            v-model="filter.value"
            type="text"
            class="form-control sm:w-40 2xl:w-full mt-2 sm:mt-0"
            placeholder="Search..."
          />
        </div>
        <div class="mt-2 xl:mt-0">
          <button
            id="tabulator-html-filter-go"
            type="button"
            class="btn btn-primary w-full sm:w-16"
            @click="onFilter"
          >
            Go
          </button>
          <button
            id="tabulator-html-filter-reset"
            type="button"
            class="btn btn-secondary w-full sm:w-16 mt-2 sm:mt-0 sm:ml-1"
            @click="onResetFilter"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
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
        <h1
          v-if="actionModal == 'create'"
          class="font-bold text-2xl mb-5 text-green-900"
        >
          Tạo tài liệu mới
        </h1>
        <h1
          v-if="actionModal == 'update'"
          class="font-bold text-2xl mb-5 text-green-900"
        >
          Chỉnh sửa tài liệu
        </h1>
        <hr />
        <div class="text-center mt-5">
          <div v-if="actionModal == 'update'" class="text-left mb-5">
            <input type="file" ref="fileInput" @change="getFileUpload" />
          </div>
          <div
            v-if="inputValue.image_name"
            class="grid grid-cols-12 gap-2 mb-5"
          >
            <img
              :src="urlIamge + inputValue.image_name"
              alt=""
              class="w-full h-full col-span-4"
            />
          </div>
          <div class="mb-5">
            <div class="text-left mb-5">
              <label
                for="regular-form-1"
                class="form-label text-left font-semibold"
                >Tên tài liệu <span class="text-red-500">(*)</span></label
              >
              <input
                type="text"
                class="form-control"
                placeholder="Tên tài liệu"
                v-model="inputValue.name"
              />
            </div>
            <div class="text-left mb-5">
              <label
                for="regular-form-1"
                class="form-label text-left font-semibold"
                >Chủ đề <span class="text-red-500">(*)</span></label
              >
              <TomSelect
                v-model="inputValue.title_exam_id"
                :options="{
                  placeholder: 'Chọn chủ đề',
                }"
                class="w-full"
              >
                <option :value="inputValue.title_exam_id">
                  {{ inputValue.title_name }}
                </option>
                <option
                  v-for="title in titleexamOption"
                  :key="title"
                  :value="title.id"
                >
                  {{ title.name }}
                </option>
              </TomSelect>
            </div>
            <div class="text-left mb-5">
              <label
                for="regular-form-1"
                class="form-label text-left font-semibold"
                >Nhãn <span class="text-red-500">(*)</span></label
              >
              <TomSelect
                v-model="inputValue.link_tag_exam"
                :options="{
                  placeholder: 'Chọn nhãn',
                }"
                class="w-full"
                multiple
              >
                <option v-for="tag in tagexamOption" :key="tag" :value="tag.id">
                  {{ tag.name }}
                </option>
              </TomSelect>
            </div>
            <div class="text-left mb-5">
              <label
                for="regular-form-1"
                class="form-label text-left font-semibold"
                >Tài liệu đính kèm <span class="text-red-500">(*)</span></label
              >
              <textarea
                type="text"
                class="form-control"
                placeholder="Tài liệu đính kèm"
                rows="5"
                v-model="inputValue.file"
              ></textarea>
            </div>
            <div class="text-left mb-5">
              <label
                for="regular-form-1"
                class="form-label text-left font-semibold"
                >Mô tả tài liệu</label
              >
              <textarea
                type="text"
                class="form-control"
                placeholder="Mô tả tài liệu"
                rows="5"
                v-model="inputValue.descript"
              ></textarea>
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
import { ref, onMounted, reactive, watch } from "vue";
import { createIcons, icons } from "lucide";
import Tabulator from "tabulator-tables";
import dom from "@left4code/tw-starter/dist/js/dom";
import { BASE_URL, convertTime, timeNow, urlIamge } from "@/custom-components";
import { convertIdArr, inputValue, setDefaultInputValue } from "./index.js";
import axios from "axios";

const tableRef = ref();
const tabulator = ref();
const filter = reactive({
  field: "name",
  type: "like",
  value: "",
});

const deleteModalPreview = ref(false);
const ModalPreview = ref(false);
const tagexamOption = ref([]);
const titleexamOption = ref([]);
const actionModal = ref();
const getFileInput = ref(null);
const fileInput = ref(null);
const fileUpId = ref(null);

/* Uploadfile */
const getFileUpload = (event) => {
  getFileInput.value = event.target.files;
  const formData = new FormData();
  formData.append("file", getFileInput.value[0]);
  axios({
    url: `${BASE_URL}/file`,
    method: "POST",
    data: formData,
  })
    .then((result) => {
      fileUpId.value = result.data.id;
    })
    .catch((err) => {
      console.log("err :>> ", err);
    });
};

/* Create */
const handleShowModalCreate = () => {
  setDefaultInputValue();
  actionModal.value = "create";
  ModalPreview.value = true;
};

const handleCreate = () => {
  axios({
    url: `${BASE_URL}/exams/create`,
    method: "POST",
    data: inputValue.value,
  })
    .then((result) => {
      alert("Create success!");
      ModalPreview.value = false;
      initTabulator();
    })
    .catch((err) => {
      alert("Error!");
      console.log("err :>> ", err);
    });
};

/* Delete */
const idDelete = ref();

const handleSubmitDelete = () => {
  axios({
    url: `${BASE_URL}/exams/delete`,
    method: "POST",
    data: { id: idDelete.value },
  })
    .then((result) => {
      alert("Delete success!");
      deleteModalPreview.value = false;
      initTabulator();
    })
    .catch((err) => {
      alert("Error!");
      console.log("err :>> ", err);
    });
};

/* Edit */
const idEdit = ref();
const handleGetEdit = (id) => {
  idEdit.value = id;
  axios({
    url: `${BASE_URL}/exams/${id}`,
    method: "GET",
  })
    .then((result) => {
      let convertData = {
        ...result.data[0],
        link_tag_exam: convertIdArr(result.data[0].link_tag_exam),
      };
      inputValue.value = convertData;
    })
    .catch((err) => {
      alert("Error!");
      console.log("err :>> ", err);
    });
};

const handleSubmitUpdate = () => {
  const valueRequestUpdate = {
    ...inputValue.value,
    id: idEdit.value,
    image_id: fileUpId.value,
    update_at: timeNow(),
  };
  delete valueRequestUpdate.tag_name;
  delete valueRequestUpdate.title_name;
  delete valueRequestUpdate.image_name;

  axios({
    url: `${BASE_URL}/exams/update`,
    method: "POST",
    data: valueRequestUpdate,
  })
    .then((result) => {
      alert("Update success!");
      ModalPreview.value = false;
      fileUpId.value = null;
      fileInput.value.value = "";
      initTabulator();
    })
    .catch((err) => {
      alert("Error!");
      console.log("err :>> ", err);
    });
};

const initTabulator = () => {
  tabulator.value = new Tabulator(tableRef.value, {
    ajaxURL: `${BASE_URL}/exams/get-all`,
    headerHozAlign: "left",
    scrollHorizontal: true,
    pagination: "local",
    paginationSize: 10,
    layout: "fitColumns",
    // responsiveLayout: "collapse",
    paginationSizeSelector: [10, 20, 30, 40],
    placeholder: "No matching records found",
    columns: [
      // For HTML table
      {
        title: "",
        maxWidth: 80,
        minWidth: 60,
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
        maxWidth: 80,
        minWidth: 60,
        field: "id",
        hozAlign: "center",
        vertAlign: "middle",
        formatter(cell) {
          const a = dom(`<div class="flex lg:justify-center items-center">
                  <a class="flex items-center text-danger delete-btn" href="javascript:;"> <i data-lucide="trash-2" class="w-4 h-4 mr-1"></i> Delete
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
        title: "Tài liệu",
        minWidth: 200,
        responsive: 0,
        field: "name",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>
                    <div class="font-medium whitespace-nowrap hover:whitespace-normal">${
                      cell.getData().name
                    }</div>
                  </div>`;
        },
      },
      {
        title: "Chủ đề",
        minWidth: 300,
        field: "title_name",
        vertAlign: "middle",
        formatter(cell) {
          return cell.getData().title_name
            ? `<button class="btn btn-sm btn-rounded btn-success-soft mr-1">${
                cell.getData().title_name
              }</button>`
            : "";
        },
      },
      {
        title: "Nhãn",
        minWidth: 300,
        field: "tag_name",
        vertAlign: "middle",
        formatter(cell) {
          if (cell.getData().tag_name) {
            let contentArr = cell.getData().tag_name.split(", ");
            let contentDom = "";
            contentArr.forEach((val) => {
              contentDom += `<div class="btn  btn-sm btn-rounded btn-warning-soft mr-1">${val}</div>`;
            });
            return `<div class="whitespace-nowrap hover:whitespace-normal">${contentDom}</div>`;
          } else {
            return `<div></div>`;
          }
        },
      },
      {
        title: "Đính kèm",
        minWidth: 300,
        field: "file",
        vertAlign: "middle",
        formatter(cell) {
          return `<a href="${cell.getData().file}" target="blank">${
            cell.getData().file
          }</a>`;
        },
      },
      {
        title: "Mô tả",
        minWidth: 300,
        field: "descript",
        vertAlign: "middle",
        formatter(cell) {
          return cell.getData().descript
            ? `<div class="whitespace-nowrap hover:whitespace-normal">${
                cell.getData().descript
              }</div>`
            : `<div></div>`;
        },
      },
      {
        title: "Tạo",
        minWidth: 200,
        field: "created_at",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${convertTime(cell.getData().created_at)}</div>`;
        },
      },
      {
        title: "Chỉnh sửa",
        minWidth: 200,
        field: "update_at",
        vertAlign: "middle",
        formatter(cell) {
          return `<div>${convertTime(cell.getData().update_at)}</div>`;
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

// Filter function
const onFilter = () => {
  tabulator.value.setFilter(filter.field, filter.type, filter.value);
};

// On reset filter
const onResetFilter = () => {
  filter.field = "title";
  filter.type = "like";
  filter.value = "";
  onFilter();
};

onMounted(() => {
  initTabulator();
  reInitOnResizeWindow();
  axios({
    url: `${BASE_URL}/tag-exam/get-all`,
    method: "GET",
  })
    .then((result) => {
      result.data.forEach((val) => {
        tagexamOption.value.push(val);
      });
    })
    .catch((err) => {
      console.log("err :>> ", err);
    });
  axios({
    url: `${BASE_URL}/title-exam/get-all`,
    method: "GET",
  })
    .then((result) => {
      result.data.forEach((val) => {
        titleexamOption.value.push(val);
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
    