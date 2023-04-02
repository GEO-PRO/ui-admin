import { timeNow } from "@/custom-components";
import { ref } from "vue";

const valueDefault = {
    "record_species_id": 1,
    "full_name": "Select record species",
    "position_id": 1,
    "position": {minor_area: "Select position"},
    "number": "N/A",
    "number_2": "N/A",
    "project": "N/A",
    "botreccat": "N/A",
    "institution": "N/A",
    "barcode": "N/A",
    "type": "N/A",
    "sample_all": "N/A",
    "collector": "N/A",
    "add_collector": "N/A",
    "image_order": null,
    "collection_day": 0,
    "collection_month": 0,
    "collection_year": 0,
}

const inputValue = ref(valueDefault);

const setDefaultInputValue = () => {
    inputValue.value = valueDefault
};

export { inputValue, setDefaultInputValue }