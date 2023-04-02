import { timeNow } from "@/custom-components";
import { ref } from "vue";

const valueDefault = {
    taxonomy_id: 1,
    taxonomy_browser: "Select your favorite actors",
    sp_1: "N/A",
    author_1: "N/A",
    rank_1: "N/A",
    sp_2: "N/A",
    author_2: "N/A",
    rank_2: "N/A",
    sp_3: "N/A",
    author_3: "N/A",
    taxonomy_status: false,
    taxonomy_rank: "N/A",
    author: "N/A",
    common: "N/A",
    citation: "N/A",
    author_year: 0,
    synonym: "N/A",
    habit: "N/A",
    lifeform: "N/A",
    niche: "N/A",
    description: "N/A",
    habitat_txt: "N/A",
    distribution: "N/A",
    phenology: "N/A",
    redlist: false,
    iucn: "N/A",
    iucn_version: "N/A",
    cites: "N/A",
    sdvn: "N/A",
    nd_84_2021: "N/A",
    nd_64_2019: "N/A",
    endemism: false,
    endemism_note: "N/A",
    tt_35_2018: "N/A",
    cultivated: false,
    hostps: "N/A",
    source: "N/A",
    curatenote: "N/A",
    note: "N/A",
    last_created: timeNow(),
    last_updated: timeNow(),
}

const inputValue = ref(valueDefault);

const setDefaultInputValue = () => {
    inputValue.value = valueDefault
};

export { inputValue, setDefaultInputValue }