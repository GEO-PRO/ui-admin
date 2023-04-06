import { ref } from "vue";

const convertIdArr = (idInput) => {
    if (idInput) {
        return idInput.split(", ")
    } else {
        return []
    }
}

const valueDefault = {
    "file_id_arr": null,
    "title": null,
    "content": null,
    "summary": null,
    "created_at": null,
    "update_at": null,
    "tag_name": null,
    "link_tag_blog": []
}

const inputValue = ref(valueDefault);

const setDefaultInputValue = () => {
    inputValue.value = valueDefault
};

export { inputValue, setDefaultInputValue, convertIdArr }