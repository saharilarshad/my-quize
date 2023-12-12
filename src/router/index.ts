import { createRouter, createWebHistory } from "vue-router"
import About from "@/views/About.vue"
import Quizes from "@/views/Quizes.vue"
import QuizeQuestionVue from "@/views/QuizeQuestion.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "quizes",
            component: Quizes
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/quiz/:id",
            name: "quiz",
            component: QuizeQuestionVue
        },
        //this is for nested routing
        // {
        //     path: "/about/:id",
        //     name: "about",
        //     component: About,
        //     children: [
        //         {
        //             name: "contact",
        //             component: Contact
        //         }
        //     ]
        // },
    ]
})

export default router