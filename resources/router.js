import Dashboard from "./views/Dashboard";
import Projects from "./views/Projects";
import Team from "./views/Team";
import Vue from "vue";
import VueRouter from "vue-router";

const routes = [
    { path: "/", name: "dashboard", component: Dashboard },
    { path: "/projects", name: "projects", component: Projects },
    { path: "/team", name: "team", component: Team }
];

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
