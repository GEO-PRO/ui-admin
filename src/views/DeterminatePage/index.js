import { timeNow } from "@/custom-components";
import { ref } from "vue";

const valueDefault = {
    "record_species_id": 1,
    "full_name": "Select record species", 
    "status": false,
    "reference": "N/A",
    "identified_by_1": "N/A",
    "identified_by_2": "N/A",
    "determination_day": 0,
    "determination_month": 0,
    "determination_year": 0
}

const inputValue = ref(valueDefault);

const setDefaultInputValue = () => {
    inputValue.value = valueDefault
};

export { inputValue, setDefaultInputValue }