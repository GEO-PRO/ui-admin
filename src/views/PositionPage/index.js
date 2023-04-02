import { timeNow } from "@/custom-components";
import { ref } from "vue";

const valueDefault = {
    "country": "N/A",
    "major_area": "N/A",
    "minor_area": "N/A",
    "gazetteer": "N/A",
    "village": "N/A",
    "place": "N/A",
    "location_note": "N/A"
}

const inputValue = ref(valueDefault);

const setDefaultInputValue = () => {
    inputValue.value = valueDefault
};

export { inputValue, setDefaultInputValue }