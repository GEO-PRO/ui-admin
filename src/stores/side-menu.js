import { defineStore } from "pinia";

export const useSideMenuStore = defineStore("sideMenu", {
    state: () => ({
        menu: [
            {
                icon: "HomeIcon",
                pageName: "upload-excel-page",
                title: "Upload Excel Page",
            },
            {
                icon: "TerminalIcon",
                pageName: "record-species-page",
                title: "Record Species Page",
            },
            {
                icon: "TrelloIcon",
                pageName: "collection-page",
                title: "Collection Page",
            },
            {
                icon: "StarIcon",
                pageName: "determinate-page",
                title: "Determinate Page",
            },
            {
                icon: "SendIcon",
                pageName: "position-page",
                title: "Position Page",
            },
            {
                icon: "SunriseIcon",
                pageName: "uses-page",
                title: "Uses Page",
            },
            {
                icon: "MapIcon",
                pageName: "map-page",
                title: "Map Page",
            },

        ],
    }),
});
