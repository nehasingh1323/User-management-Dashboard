import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHistory } from "vue-router"
import Login from './components/Login.vue'
import AddPage from './components/Add.vue'
import UpdatePanel from './components/Update.vue'

const routes = [
    {
        name: "Home-panel",
        component: Home,
        path: "/Home" ,
    },

    {
        name: "SignUp",
        component: SignUp,
        path: "/SignUp",
    },
    
    {
        name: "Login",
        component: Login,
        path: "/Login",
    },
    {
        name: "AddPage",
        component: AddPage,
        path: "/Add",
    },
    {
        name: "UpdatePage",
        component: UpdatePanel,
        path: "/Update/:id",
    },
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
);

export default router;
