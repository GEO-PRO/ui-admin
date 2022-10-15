<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Excel Upload Species</h2>
  </div>
  <div class="intro-y box p-5 mt-5">
    <DropZoneUploadExcel />
  </div>
  <div class="intro-y box p-5 mt-5">
    <div class="flex flex-wrap">
      <button class="btn btn-pending w-50 mr-2 mb-2">
        <CheckIcon class="w-4 h-4 mr-2" /> Checking Data
      </button>
      <button class="btn btn-primary w-50 mr-2 mb-2" disabled>
        <HardDriveIcon class="w-4 h-4 mr-2" /> Ready!
      </button>
    </div>
    <ViewExcelEditor />
  </div>
</template>

<script>
import ViewExcelEditor from "@/custom-components/pages/upload-excel-page/view-excel-editor/Main.vue"
import DropZoneUploadExcel from "@/custom-components/pages/upload-excel-page/drop-zone-upload-excel/Main.vue"

export default {
  components: {
    DropZoneUploadExcel,
    ViewExcelEditor,
  }
};

</script>

<style>
.ag-theme-material .ag-header-container {
  background-color: #22c55e;
}

.ag-theme-alpine .ag-header-group-cell {
  font-size: 22px;
  color: white;
}

.ag-theme-material .ag-header-cell {
  font-size: 15px;
  color: white;
}
</style>
