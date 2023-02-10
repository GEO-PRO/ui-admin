const columnDefs = [
    {
        headerName: 'Botreccat',
        field: 'botreccat',
        type: 'option',
        optionArray: ['O', 'V', 'L'],
        nullable: true
    },
    {
        headerName: 'Dups',
        field: 'dups',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Collecter',
        field: 'collecter',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Addcoll',
        field: 'addcoll',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Number',
        field: 'number',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Plantsamp',
        field: 'plantsamp',
        type: 'number',
        nullable: true
    },
    {
        headerName: 'Administrative Division',
        field: 'administrative_division',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Place',
        field: 'place',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Location',
        field: 'location',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Date Collection',
        field: 'date_collection',
        type: 'date',
        nullable: true
    },
    {
        headerName: 'Person',
        field: 'person',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Date Detective',
        field: 'date_detective',
        type: 'date',
        nullable: true
    },
    {
        headerName: 'Status',
        field: 'status',
        type: 'option',
        optionArray: ['Đã xác định', 'Chưa xác định'],
        nullable: true
    },
    {
        headerName: 'Reference',
        field: 'reference',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Taxonomy Status',
        field: 'taxonomy_status',
        type: 'option',
        optionArray: ['Accepted', 'Synonym'],
        nullable: true
    },
    {
        headerName: 'Kingdom',
        field: 'kingdom',
        type: 'string',
        nullable: false
    },
    {
        headerName: 'Division',
        field: 'division',
        type: 'string',
        nullable: false
    },
    {
        headerName: 'Class',
        field: 'class',
        type: 'string',
        nullable: false
    },
    {
        headerName: 'Order',
        field: 'order',
        type: 'string',
        nullable: false
    },
    {
        headerName: 'Family Group',
        field: 'family_group',
        type: 'string',
        nullable: false
    },
    {
        headerName: 'Family',
        field: 'family',
        type: 'string',
        nullable: false
    },
    {
        headerName: 'Genus',
        field: 'genus',
        type: 'string',
        nullable: false
    },
    {
        headerName: 'SP 1',
        field: 'sp_1',
        type: 'string',
        nullable: false
    },
    {
        headerName: 'Author 1',
        field: 'author_1',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Rank 1',
        field: 'rank_1',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'SP 2',
        field: 'sp_2',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Author 2',
        field: 'author_2',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Rank 2',
        field: 'rank_2',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'SP 3',
        field: 'sp_3',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Author 3',
        field: 'author_3',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Author Year',
        field: 'author_year',
        type: 'number',
        nullable: true
    },
    {
        headerName: 'Local Name',
        field: 'local_name',
        type: 'string',
        nullable: false
    },
    {
        headerName: 'Lifeform',
        field: 'lifeform',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Description',
        field: 'description',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Habitattxt',
        field: 'habitattxt',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Distribution',
        field: 'distribution',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Phenology',
        field: 'phenology',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Iucn',
        field: 'iucn',
        type: 'option',
        optionArray: ['VU', 'EN', 'CR'],
        nullable: true
    },
    {
        headerName: 'Sdvn',
        field: 'sdvn',
        type: 'option',
        optionArray: ['VU', 'EN', 'CR'],
        nullable: true
    },
    {
        headerName: 'Nd84',
        field: 'nd84',
        type: 'option',
        optionArray: ['IA', 'IIA', 'IB', 'IIB'],
        nullable: true
    },
    {
        headerName: 'Nd64',
        field: 'nd64',
        type: 'option',
        optionArray: ['Có', 'Không'],
        nullable: true
    },
    {
        headerName: 'Cultivated',
        field: 'cultivated',
        type: 'option',
        optionArray: ['Có', 'Không'],
        nullable: true
    },
    {
        headerName: 'Ivsp',
        field: 'ivsp',
        type: 'option',
        optionArray: ['Có', 'Không'],
        nullable: true
    },
    {
        headerName: 'Alt',
        field: 'Alt',
        type: 'number',
        nullable: true
    },
    {
        headerName: 'Synonyme',
        field: 'synonyme',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Number 2',
        field: 'number_2',
        type: 'number',
        nullable: true
    },
    {
        headerName: 'Source',
        field: 'source',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Project',
        field: 'project',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Notes',
        field: 'notes',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Uses',
        field: 'uses',
        type: 'multiple-option',
        optionArray: ['GO', 'CA', 'DP', 'TP', 'TD', 'CN', 'SO', 'NH'],
        nullable: true
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
        headerName: 'Image',
        field: 'image',
        type: 'number',
        nullable: true
    },
    {
        headerName: 'Document',
        field: 'document',
        type: 'number',
        nullable: true
    },
]

const AuthenticationURL = 'https://kong2_sinhthainambo.girs.vn/users/'
const LocationUrl = "http://localhost:3002/"

export { columnDefs, LocationUrl, AuthenticationURL }
