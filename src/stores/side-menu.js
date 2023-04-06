import { defineStore } from "pinia";

export const useSideMenuStore = defineStore("sideMenu", {
    state: () => ({
        menu: [
            {
                icon: "EditIcon",
                pageName: "",
                title: "Tin tức",
                subMenu: [
                    {
                        icon: "",
                        pageName: "blogs-page",
                        title: "Đăng tin",
                    },
                    {
                        icon: "",
                        pageName: "tag-blog-page",
                        title: "Chủ đề",
                    },
                ]
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
