import {createRouter, createWebHistory} from "vue-router";
import SideMenu from "../layouts/side-menu/Main.vue";
import SimpleMenu from "../layouts/simple-menu/Main.vue";
import TopMenu from "../layouts/top-menu/Main.vue";
import UploadExcelPage from "../views/UploadExcelPage/Main.vue"

const routes = [
    {
        path: "/",
        component: SideMenu,
        children: [
            {
                path: "upload-excel-page",
                name: "upload-excel-page",
                component: UploadExcelPage,
            },
        ],
    },
    /*{
        path: "/simple-menu",
        component: SimpleMenu,
        children: [],
    },
    {
        path: "/top-menu",
        component: TopMenu,
        children: [],
    },*/
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || {left: 0, top: 0};
    },
});

export default router;
