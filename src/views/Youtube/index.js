import { ref } from "vue";

const valueDefault = {
    "title": null,
    "link": null,
    "iframe": null,
}

const inputValue = ref(valueDefault);

const setDefaultInputValue = () => {
    inputValue.value = { ...valueDefault }
};

export { inputValue, setDefaultInputValue }