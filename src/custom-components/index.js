const columnKeys = [
    "sp1",
    "author_1",
    "full_name",
    "local_name",
    "lat",
    "lng",
]

const columnDefs = [
    {
        headerName: 'SP1',
        field: 'sp1',
        rowDrag: true
    },
    {
        headerName: 'AUTHOR 1',
        field: 'author_1',
    },
    {
        headerName: 'Full Name',
        field: 'full_name',
    },
    {
        headerName: 'Local Name',
        field: 'local_name',
    },
    {
        headerName: 'Latitude',
        field: 'lat',
    },
    {
        headerName: 'Longitude',
        field: 'lng',
    },
]

export {columnKeys, columnDefs}
