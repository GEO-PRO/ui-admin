<template>
  <ag-grid-vue
      style="width: 100%; height: 500px;"
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
import { AgGridVue } from "ag-grid-vue3";

export default {
  name: "ViewExcelEditor",
  components: {
    AgGridVue,
  },
  setup() {
    return {
      // TODO: Constant Field
      columnDefs: [
        {
          field: 'athlete',
          rowDrag: true
        },
        { field: 'age' },
        { field: 'country' },
        { field: 'year' },
        { field: 'date' },
        { field: 'sport' },
        { field: 'gold' },
        { field: 'silver' },
        { field: 'bronze' },
        { field: 'total' },
      ],
      gridApi: null,
      columnApi: null,
      defaultColDef: {
        editable: true,
        // floatingFilter: true,
        sortable: true,
        resizable: true,
        filter: true,
        // flex: 1,
        maxWidth: 200,
      },
      rowSelection: null,
      rowData: null,
    };
  },
  created() {
    this.rowSelection = 'single';
  },

  methods: {
    onSelectionChanged() {
      const selectedRows = this.gridApi.getSelectedRows();
      console.log(selectedRows.length === 1 ? selectedRows[0].athlete : '')
    },

    // TODO: Get Data from Upload Excel File
    onGridReady(params) {
      this.gridApi = params.api;
      // this.gridColumnApi = params.columnApi;

      const updateData = (data) => params.api.setRowData(data);

      fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
          .then((resp) => resp.json())
          .then((data) => updateData(data));
    },
  },
}
</script>
