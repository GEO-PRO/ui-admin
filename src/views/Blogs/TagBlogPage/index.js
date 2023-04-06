import { ref } from "vue";

const valueDefault = {
    "name": null,
    "descript": null,
}

const inputValue = ref(valueDefault);

const setDefaultInputValue = () => {
    inputValue.value = valueDefault
};

export { inputValue, setDefaultInputValue }