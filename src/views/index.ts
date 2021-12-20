import Home from "./Home";
import Operations from "./Operations";
import Auth from "./Auth";

export default [
    {
        name: "Home",
        component: Home,
        options: {
            title: "Home"
        }
    },
    {
        name: "Operations",
        component: Operations,
        options: {
            title: "Operations"
        }
    },
    {
        name: "Auth",
        component: Auth,
        options: {
            title: "Auth"
        },
    }
]