const columnDefs = [
    {
        headerName: 'SP1',
        field: 'sp1',
        type: 'string',
        nullable: false
    },
    {
        headerName: 'AUTHOR 1',
        field: 'author_1',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Full Name',
        field: 'full_name',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Local Name',
        field: 'local_name',
        type: 'string',
        nullable: false
    },
    {
        headerName: 'Latitude',
        field: 'lat',
        type: 'number',
        nullable: false
    },
    {
        headerName: 'Longitude',
        field: 'lng',
        type: 'number',
        nullable: false
    },
    {
        headerName: 'TAXSTAT',
        field: 'taxonomy_status',
        type: 'option',
        optionArray: ['Accepted', 'Synonym'],
        nullable: true
    },
    {
        headerName: 'KINGDOM',
        field: 'kingdom',
        type: 'string',
        nullable: false
    },
    {
        headerName: 'DIVISION',
        field: 'division',
        type: 'string',
        nullable: false
    },
    {
        headerName: 'CLASS',
        field: 'class',
        type: 'string',
        nullable: false
    }
]

export {columnDefs}
