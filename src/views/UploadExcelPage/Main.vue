<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Excel Upload Species</h2>
  </div>

  <div class="grid grid-cols-3 gap-5">
    <div class="box p-5 mt-5 h-[10.85%]">
      <input type="file" @change="uploadExcel"/>
    </div>
    <div class="col-span-2 box p-5 mt-5">
      <div class="flex flex-wrap">
        <button class="btn btn-pending w-50 mr-2 mb-2">
          <CheckIcon class="w-4 h-4 mr-2"/>
          Checking Data
        </button>
        <button class="btn btn-primary w-50 mr-2 mb-2" disabled>
          <HardDriveIcon class="w-4 h-4 mr-2"/>
          Ready!
        </button>
      </div>

      <ViewExcelEditor :row-data="rowData"/>
    </div>
  </div>
</template>

<script>
import XLSX from "xlsx"
import {columnKeys} from "@/custom-components";
import ViewExcelEditor from "@/custom-components/pages/upload-excel-page/view-excel-editor/Main.vue"

export default {
  components: {
    ViewExcelEditor,
  },
  data() {
    return {
      rowData: null
    }
  },
  methods: {
    uploadExcel(event) {
      this.file = event.target.files ? event.target.files[0] : null;
      if (this.file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          /* Parse data */
          const binary_string = e.target.result;
          const wb = XLSX.read(binary_string, {
            type: 'binary'
          });

          /* Get first worksheet */
          const worksheet_name = wb.SheetNames[0];
          const worksheet = wb.Sheets[worksheet_name];

          /* Convert array of arrays */
          const data = XLSX.utils.sheet_to_json(worksheet, {header: 1});

          /* Process Data */
          const newData = []
          data.forEach((ele, index) => {
            if (index !== 0) {
              let objectData = {}
              columnKeys.forEach((key, index) => {
                objectData[key] = ele[index]
              })
              newData.push(objectData)
            }
          })
          this.rowData = newData
        }

        reader.readAsBinaryString(this.file);
      }
    },
  }
};

</script>

<style>
.ag-theme-material .ag-header-container {
  background-color: #22c55e;
}

.ag-theme-material .ag-header-cell {
  font-size: 15px;
  color: white;
}

.ag-theme-material .ag-header-cell:hover {
  color: black;
}
</style>
