import {defineStore} from "pinia";

export const useSideMenuStore = defineStore("sideMenu", {
    state: () => ({
        menu: [
            {
                icon: "HomeIcon",
                pageName: "upload-excel-page",
                title: "Upload Excel Page",
            },
        ],
    }),
});
