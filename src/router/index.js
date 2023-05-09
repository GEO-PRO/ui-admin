import { createRouter, createWebHistory } from "vue-router";
import SideMenu from "../layouts/side-menu/Main.vue";
import UserPage from "../views/UserPage/Main.vue";
import CollectionPage from "../views/CollectionPage/Main.vue";
import RecordSpeciesPage from "../views/RecordSpeciesPage/Main.vue";
import DeterminatePage from "../views/DeterminatePage/Main.vue";
import PositionPage from "../views/PositionPage/Main.vue";
import UsesPage from "../views/UsesPage/Main.vue";
import MapPage from "../views/MapPage/Main.vue";
import BlogsPage from "../views/Blogs/BlogsPage/Main.vue";
import TagBlogPage from "../views/Blogs/TagBlogPage/Main.vue";
import TagDocPage from "../views/Docs/TagDocPage/Main.vue";
import TitleDocPage from "../views/Docs/TitleDocPage/Main.vue";
import DocsPage from "../views/Docs/DocsPage/Main.vue";
import TagExamPage from "../views/Exams/TagExamPage/Main.vue";
import TitleExamPage from "../views/Exams/TitleExamPage/Main.vue";
import ExamsPage from "../views/Exams/ExamsPage/Main.vue";

const routes = [
    {
        path: "/",
        component: SideMenu,
        children: [
            {
                path: "/",
                name: "blogs-page",
                component: BlogsPage,
            },
            {
                path: "/tag-blog-page",
                name: "tag-blog-page",
                component: TagBlogPage,
            },
            {
                path: "/docs-page",
                name: "docs-page",
                component: DocsPage,
            },
            {
                path: "/tag-doc-page",
                name: "tag-doc-page",
                component: TagDocPage,
            },
            {
                path: "/title-doc-page",
                name: "title-doc-page",
                component: TitleDocPage,
            },
            {
                path: "/exams-page",
                name: "exam-page",
                component: ExamsPage,
            },
            {
                path: "/tag-exam-page",
                name: "tag-exam-page",
                component: TagExamPage,
            },
            {
                path: "/title-exam-page",
                name: "title-exam-page",
                component: TitleExamPage,
            },
            {
                path: "/collection-",
                name: "collection-page",
                component: CollectionPage,
            },
            {
                path: "/record-species-page",
                name: "record-species-page",
                component: RecordSpeciesPage,
            },
            {
                path: "/determinate-page",
                name: "determinate-page",
                component: DeterminatePage,
            },
            {
                path: "/position-page",
                name: "position-page",
                component: PositionPage,
            },
            {
                path: "/uses-page",
                name: "uses-page",
                component: UsesPage,
            },
            {
                path: "/map-page",
                name: "map-page",
                component: MapPage,
            },
        ],
    },
    {
        path: "/user",
        component: UserPage,
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
        return savedPosition || { left: 0, top: 0 };
    },
});

export default router;
