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
    "content": "",
    "summary": null,
    "created_at": null,
    "update_at": null,
    "tag_name": null,
    "link_tag_blog": [],
    "files_name": null
}

const urlIamge = ref("http://localhost:3002/images/")

const inputValue = ref(valueDefault);

const setDefaultInputValue = () => {
    inputValue.value = { ...valueDefault }
    return inputValue.value
};

export { inputValue, setDefaultInputValue, convertIdArr, urlIamge }