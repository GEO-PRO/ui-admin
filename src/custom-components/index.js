const columnDefs = [
    {
        headerName: 'Number',
        field: 'number',
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
        headerName: 'Botreccat',
        field: 'botreccat',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Institution',
        field: 'dups',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Barcode',
        field: 'barcode',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Type',
        field: 'type',
        type: 'number',
        nullable: true
    },
    {
        headerName: 'Number 2',
        field: 'number_2',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Sample All',
        field: 'sample_all',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Main collector',
        field: 'collector',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Additional collector',
        field: 'add_collector',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Collection Day',
        field: 'collection_day',
        type: 'number',
        nullable: true
    },
    {
        headerName: 'Collection Month',
        field: 'collection_month',
        type: 'number',
        nullable: true
    },
    {
        headerName: 'Collection Year',
        field: 'collection_year',
        type: 'number',
        nullable: true
    },
    {
        headerName: 'Country',
        field: 'country',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Major area',
        field: 'major_area',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Minor area',
        field: 'minor_area',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Gazetteer',
        field: 'gazetteer',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Village',
        field: 'village',
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
        headerName: 'Location notes',
        field: 'location_notes',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Latitude',
        field: 'lat',
        type: 'string',
        nullable: false
    },
    {
        headerName: 'North/South',
        field: 'ns',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Longitude',
        field: 'lng',
        type: 'string',
        nullable: false
    },
    {
        headerName: 'East/West',
        field: 'ew',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Altitude',
        field: 'alt',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Altitude max',
        field: 'alt_max',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Altitude unit',
        field: 'alt_unit',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'VN 2000 X',
        field: 'x',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'VN 2000 Y',
        field: 'y',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Cultivated',
        field: 'cultivated',
        type: 'option',
        optionArray: [true, false],
        nullable: true
    },
    {
        headerName: 'Status',
        field: 'status',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'References',
        field: 'references',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Identified by',
        field: 'identified_by',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Identified by 2',
        field: 'identified_by_2',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Determination day',
        field: 'determinate_day',
        type: 'number',
        nullable: true
    },
    {
        headerName: 'Determination month',
        field: 'determinate_month',
        type: 'number',
        nullable: true
    },
    {
        headerName: 'Determination year',
        field: 'determination_year',
        type: 'number',
        nullable: true
    },
    {
        headerName: 'Host',
        field: 'host',
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
        headerName: 'Curation notes',
        field: 'curatenote',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Source',
        field: 'source',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Kingdom',
        field: 'kingdom',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Division',
        field: 'division',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Class',
        field: 'class',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Order',
        field: 'order',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Family Group',
        field: 'family_group',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Family',
        field: 'family',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Genus',
        field: 'genus',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Species Epithet',
        field: 'sp_1',
        type: 'string',
        nullable: true
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
        headerName: 'Infraspecific Epithet 1',
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
        headerName: 'Infraspecific Epithet 2',
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
        headerName: 'Taxonomic status',
        field: 'taxonomic_status',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Taxonomic rank',
        field: 'taxonomic_rank',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Full name',
        field: 'fullname',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Author',
        field: 'author',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Common',
        field: 'common',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Citation',
        field: 'citation',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Author year',
        field: 'author_year',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Synonym',
        field: 'synonym',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Habit',
        field: 'habit',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Lifeform',
        field: 'lifeform',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Niche',
        field: 'niche',
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
        headerName: 'Habitat',
        field: 'habitat_txt',
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
        headerName: 'Uses',
        field: 'uses',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Red List',
        field: 'redlist',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Iucn Red List',
        field: 'iucn',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'IUCN Version',
        field: 'iucn_version',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Cites',
        field: 'cites',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'SDVN',
        field: 'sdvn',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Decree 84/2021/ND-CP',
        field: 'nd_84_2021',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Decree 64/2019/ND-CP',
        field: 'nd_64_2019',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Endemism',
        field: 'endemism',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Circulars 35/2018/TT-BTNMT',
        field: 'tt_35_2018',
        type: 'string',
        nullable: true
    },
    {
        headerName: 'Image Order',
        field: 'image_order',
        type: 'string',
        nullable: true
    }
]

const LocationUrl = "https://dash-sinhthainambo.girs.vn/"
// const LocationUrl = "http://localhost:3002/"
const BaseURL = 'https://kong2_sinhthainambo.girs.vn/core/'
// const BaseURL = 'http://localhost:3000/'
const AuthenticationURL = 'https://kong2_sinhthainambo.girs.vn/users/'
// const AuthenticationURL = 'http://localhost:3005/'

const BASE_URL = 'http://localhost:3001'

const timeNow = () => {
    const dateString = new Date();
    const date = new Date(dateString);
    const isoDateString = date.toISOString();
    return isoDateString;
}

const convertTime = (time) => {
    const date = new Date(time);

    // Lấy các thành phần của ngày và giờ
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const hour = date.getUTCHours();
    const minute = date.getUTCMinutes();
    const second = date.getUTCSeconds();
    const millisecond = date.getUTCMilliseconds();

    // Định dạng lại chuỗi theo định dạng mong muốn
    const outputDate = `${day}-${month}-${year} ${hour}:${minute}:${second}`;

    return outputDate; // Kết quả: "04-04-2023 14:01:39.870"
}

export { columnDefs, LocationUrl, BaseURL, AuthenticationURL, timeNow, BASE_URL, convertTime }
