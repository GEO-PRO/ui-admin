<template>
  <div>
    <div class="flex flex-col xl:hidden justify-center items-center mt-20">
      <LoadingIcon icon="hearts" class=" w-20 h-20" />
      <div class="text-center">Currently this version is not supported on mobile phones and tablets.
        Please access with your computer to use!</div>
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
            <button id="readyForUpload" class="btn btn-primary w-50 mr-2 mb-5" @click="importExcelToDB()" disabled>
              <HardDriveIcon class="w-4 h-4 mr-2" />
              Ready!
            </button>
            <button class="btn btn-secondary w-50 mr-2 mb-5" @click="clearLog">
              <DeleteIcon class="w-4 h-4 mr-2" />
              Clear Log
            </button>
          </div>
          <div style="height: 70%">
            <ag-grid-vue
                style="width: 100%; height: 100%"
                class="ag-theme-material"
                :columnDefs="columnDefs"
                :rowData="rowData"
                :defaultColDef="defaultColDef"
                :rowSelection="rowSelection"
                :animateRows="true"
                @grid-ready="onGridReady"
                @selection-changed="onSelectionChanged">
            </ag-grid-vue>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import XLSX from "xlsx"
import {BaseURL, columnDefs} from "@/custom-components";
import {checkingData, checkTaxonomyExists} from "@/views/UploadExcelPage/index";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import {AgGridVue} from "ag-grid-vue3";
import axios from "axios";

export default {
  components: {
    AgGridVue,
  },
  setup() {
    return {
      columnDefs: columnDefs,
      columnApi: null,
      defaultColDef: {
        editable: true,
        sortable: true,
        resizable: true,
        filter: true,
        wrapHeaderText: true,
      },
      rowSelection: null,
    };
  },
  data() {
    return {
      gridApi: null,
      gridColumnApi: null,
      rowData: [],
      logCheckingData: null
    }
  },
  created() {
    this.rowSelection = 'single';
  },

  methods: {
    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    },
    onSelectionChanged() {
      const selectedRows = this.gridApi.getSelectedRows();
      // console.log(selectedRows)
    },
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
      if (this.rowData !== null && this.rowData.length > 0) {
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
    },

    async axiosImportExcelToDB(url, data) {
      let result
      let configAxios = {
        method: 'post',
        url: url,
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
      };

      await axios(configAxios).then(response => {
        result = response.data
      })
      return result
    },

    async importExcelToDB() {
      let newData = []
      let keysData = []
      this.gridApi.forEachNode(ele => {
        keysData = Object.keys(ele.data);
      })

      try {
        for (const data of this.rowData) {
          const index = this.rowData.indexOf(data);
          keysData.forEach(key => {
            data[key] = data[key] === ''
            || data[key] === null
            || data[key] === undefined
                ? "N/A"
                : data[key]
          })

          data['collection_day'] = data['collection_day'] === 'N/A' ? null : data['collection_day']
          data['collection_month'] = data['collection_month'] === 'N/A' ? null : data['collection_month']
          data['collection_year'] = data['collection_year'] === 'N/A' ? null : data['collection_year']
          data['image_order'] = data['image_order'] === 'N/A' ? null : data['image_order']
          data['status'] = data['status'] === 'N/A' ? null : data['status']
          data['determination_day'] = data['determination_day'] === 'N/A' ? null : data['determination_day']
          data['determination_month'] = data['determination_month'] === 'N/A' ? null : data['determination_month']
          data['determination_year'] = data['determination_year'] === 'N/A' ? null : data['determination_year']
          data['x'] = data['x'] === 'N/A' ? null : data['x']
          data['y'] = data['y'] === 'N/A' ? null : data['y']
          data['alt'] = data['alt'] === 'N/A' ? null : data['alt']
          data['alt_max'] = data['alt_max'] === 'N/A' ? null : data['alt_max']

          const taxonomyBrowserData = data["genus"] + ", " +
              data["family"] + ", " +
              data["family_group"] + ", " +
              data["order"] + ", " +
              data["class"] + ", " +
              data["division"] + ", " +
              data["kingdom"]

          data["taxonomy_id"] = await checkTaxonomyExists(taxonomyBrowserData)

          const resultRecordSpecies = await this.axiosImportExcelToDB(`${BaseURL}record-species/create`, data)
          data["record_species_id"] = resultRecordSpecies.id

          const resultPosition = await this.axiosImportExcelToDB(`${BaseURL}position/create`, data)
          data["position_id"] = resultPosition.id

          await this.axiosImportExcelToDB(`${BaseURL}collection/create`, data)
          await this.axiosImportExcelToDB(`${BaseURL}map/create`, data)
          await this.axiosImportExcelToDB(`${BaseURL}determinate/create`, data)
          await this.axiosImportExcelToDB(`${BaseURL}uses/create`, data)
      }
        alert("Import Success")
      } catch (error) {
        alert("Import Failed: " + error.message)
      }
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
