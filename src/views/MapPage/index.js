import { timeNow } from "@/custom-components";
import { ref } from "vue";

const valueDefault = {
    "record_species_id": 1,
    "lat": null,
    "lng": null,
    "x": null,
    "y": null,
    "ns": "Select North/South",
    "ew": "Select East/West",
    "alt": null,
    "alt_max": null,
    "alt_unit": "",
    "full_name": "Select record species"
}

const inputValue = ref(valueDefault);

const setDefaultInputValue = () => {
    inputValue.value = valueDefault
};

export { inputValue, setDefaultInputValue }