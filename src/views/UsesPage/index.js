import { timeNow } from "@/custom-components";
import { ref } from "vue";

const valueDefault = {
    "record_species_id": 1,
    "uses": [],
    "full_name": "Select record species",
    "uses_note": "N/A"
}

const inputValue = ref(valueDefault);

const setDefaultInputValue = () => {
    inputValue.value = valueDefault
};

export { inputValue, setDefaultInputValue }