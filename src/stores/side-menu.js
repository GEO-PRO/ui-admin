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
                icon: "FileTextIcon",
                pageName: "",
                title: "Đề thi",
                subMenu: [
                    {
                        icon: "",
                        pageName: "exam-page",
                        title: "Đề thi",
                    },
                    {
                        icon: "",
                        pageName: "tag-exam-page",
                        title: "Nhãn",
                    },
                    {
                        icon: "",
                        pageName: "title-exam-page",
                        title: "Chủ đề",
                    },
                ]
            },
            {
                icon: "FileTextIcon",
                pageName: "",
                title: "Tài liệu",
                subMenu: [
                    {
                        icon: "",
                        pageName: "docs-page",
                        title: "Tài liệu",
                    },
                    {
                        icon: "",
                        pageName: "tag-doc-page",
                        title: "Nhãn",
                    },
                    {
                        icon: "",
                        pageName: "title-doc-page",
                        title: "Chủ đề",
                    },
                ]
            }
        ],
    }),
});
