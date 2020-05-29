import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import SignUpPage from "../views/SignUpPage.vue"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUpPage
    },
    {
        path: "*",
        name: "HomePage",
        component: HomePage,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;
