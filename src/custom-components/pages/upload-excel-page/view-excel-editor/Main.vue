<template>
  <ag-grid-vue
      style="width: 100%; height: 65vh"
      class="ag-theme-material"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :defaultColDef="defaultColDef"
      :rowSelection="rowSelection"
      :rowDragManaged="true"
      :animateRows="true"
      @grid-ready="onGridReady"
      @selection-changed="onSelectionChanged">
  </ag-grid-vue>
</template>

<script>
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import {AgGridVue} from "ag-grid-vue3";
import {columnDefs} from "@/custom-components";

export default {
  name: "ViewExcelEditor",
  components: {
    AgGridVue,
  },
  setup() {
    return {
      columnDefs: columnDefs,
      gridApi: null,
      columnApi: null,
      defaultColDef: {
        editable: true,
        sortable: true,
        resizable: true,
        filter: true,
      },
      rowSelection: null,
    };
  },
  props: {
    rowData: Array,
  },

  created() {
    this.rowSelection = 'single';
  },

  methods: {
    onSelectionChanged() {
      const selectedRows = this.gridApi.getSelectedRows();
      console.log(selectedRows.length === 1 ? selectedRows[0].local_name : '')
    },

    onGridReady(params) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
    },
  },
}
</script>
