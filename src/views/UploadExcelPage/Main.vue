<template>
  <div>
    <div class="flex flex-col xl:hidden justify-center items-center mt-20">
      <LoadingIcon icon="hearts" class=" w-20 h-20" />
      <div class="text-center">Currently this version is not supported on mobile phones and tablets. Please access with your computer to use!</div>
    </div>
    <div class="hidden xl:block">
      <div class="flex intro-y items-center mt-10 mb-5">
        <h2 class="text-lg font-medium mr-auto">Excel Upload Species</h2>
      </div>
      <div class="grid grid-cols-3 gap-5">
        <div class="grid grid-rows-6 gap-5">
          <div class="box p-5">
            <input ref="excelValue" type="file" @change="uploadExcel" />
          </div>
          <div class="row-span-5 box p-5 max-h-[50vh] overflow-y-auto">
            <div class="flex">
              <CheckIcon class="w-4 h-4 mr-2" />
              <h4 class="font-medium mb-5">Log Checking</h4>
            </div>
            <div class="loading-layout" style="display: none">
              <LoadingIcon icon="ball-triangle" class="w-8 h-8" />
              <div class="text-center text-xs mt-2">Checking ...</div>
            </div>
            <span id="logCheckingData"></span>
          </div>
        </div>
        <div class="col-span-2">
          <div class="flex flex-wrap">
            <button class="btn btn-pending w-50 mr-2 mb-5" @click="checkingData">
              <CheckIcon class="w-4 h-4 mr-2" />
              Checking Data
            </button>
            <button id="readyForUpload" class="btn btn-primary w-50 mr-2 mb-5" disabled>
              <HardDriveIcon class="w-4 h-4 mr-2" />
              Ready!
            </button>
            <button class="btn btn-secondary w-50 mr-2 mb-5" @click="clearLog">
              <DeleteIcon class="w-4 h-4 mr-2" />
              Clear Log
            </button>
          </div>
          <ViewExcelEditor :row-data="rowData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import XLSX from "xlsx"
import { columnDefs } from "@/custom-components";
import { checkingData } from "@/views/UploadExcelPage/index";
import ViewExcelEditor from "@/custom-components/pages/upload-excel-page/view-excel-editor/Main.vue"

export default {
  components: {
    ViewExcelEditor,
  },
  data() {
    return {
      rowData: null,
      logCheckingData: null
    }
  },
  methods: {
    uploadExcel(event) {
      const readyForUpload = document.getElementById("readyForUpload")
      if (!readyForUpload.hasAttribute("disabled")) {
        readyForUpload.setAttribute("disabled", "disabled")
      }

      this.file = event.target.files ? event.target.files[0] : null;
      if (this.file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          /* Parse data */
          const binary_string = e.target.result;
          const wb = XLSX.read(binary_string, {
            type: 'binary',
            cellText: false,
            cellDates: true
          });

          /* Get first worksheet */
          const worksheet_name = wb.SheetNames[0];
          const worksheet = wb.Sheets[worksheet_name];

          /* Convert array of arrays */
          const data = XLSX.utils.sheet_to_json(worksheet, {
            header: 1,
            raw: false,
            dateNF: 'dd/mm/yyyy'
          });

          /* Process Data */
          const newData = []
          data.forEach((ele, index) => {
            if (index !== 0) {
              let objectData = {}
              columnDefs.forEach((key, index) => {
                objectData[key.field] = ele[index]
              })
              newData.push(objectData)
            }
          })
          this.rowData = newData
        }

        reader.readAsBinaryString(this.file);
      }
    },
    async checkingData() {
      if (this.rowData !== null) {
        const logCheckingData = document.getElementById("logCheckingData")
        const resultCheckingData = await checkingData(this.rowData)
        logCheckingData.innerHTML = resultCheckingData.messageChecking

        if (resultCheckingData.statusChecking === true) {
          document.getElementById("readyForUpload").removeAttribute('disabled')
        }
      } else {
        alert("No Data for Checking")
      }
    },
    clearLog() {
      this.$refs.excelValue.value = null;
      this.rowData = null;
      document.getElementById("readyForUpload").setAttribute("disabled", "disabled")
      document.getElementById("logCheckingData").innerHTML = ''
    }
  }
};

</script>

<style>
.ag-theme-material .ag-header-container {
  background-color: #3fb86b;
}

.ag-theme-material .ag-header-cell {
  font-size: 15px;
  color: white;
}

.ag-theme-material .ag-header-cell:hover {
  color: black;
}

.loading-layout {
  @apply flex flex-col justify-start items-center w-[100%] h-[40vh]
}
</style>
