import { ref } from "vue";

const convertIdArr = (idInput) => {
    if (idInput) {
        return idInput.split(", ")
    } else {
        return []
    }
}

const valueDefault = {
    "name": null,
    "title_doc_id": 0, // => Khác
    "descript": null,
    "created_at": null,
    "update_at": null,
    "file": null,
    "tag_name": null,
    "link_tag_doc": [],
    "title_name": "Chọn chủ đề",
    "image_name": null
}

const inputValue = ref(valueDefault);

const setDefaultInputValue = () => {
    inputValue.value = { ...valueDefault }
    return inputValue.value
};

export { inputValue, setDefaultInputValue, convertIdArr }