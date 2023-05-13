import { createRouter, createWebHistory } from "vue-router";
import SideMenu from "../layouts/side-menu/Main.vue";
import BlogsPage from "../views/Blogs/BlogsPage/Main.vue";
import TagBlogPage from "../views/Blogs/TagBlogPage/Main.vue";
import TagDocPage from "../views/Docs/TagDocPage/Main.vue";
import TitleDocPage from "../views/Docs/TitleDocPage/Main.vue";
import DocsPage from "../views/Docs/DocsPage/Main.vue";
import TagExamPage from "../views/Exams/TagExamPage/Main.vue";
import TitleExamPage from "../views/Exams/TitleExamPage/Main.vue";
import ExamsPage from "../views/Exams/ExamsPage/Main.vue";
import YoutubePage from "../views/Youtube/Main.vue";

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
                path: "/youtube",
                name: "youtube",
                component: YoutubePage,
            }
        ],
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { left: 0, top: 0 };
    },
});

export default router;
