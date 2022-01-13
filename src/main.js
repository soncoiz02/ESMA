import Navigo from "navigo";
import AdminNews from "./components/AdminNews";
import Dashboard from "./components/Dashboard";
import DetailNews from "./components/DetailNews";

import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import HomePage from "./page/HomePage";
import News from "./page/News";
const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/news": () => {
        print(News.render());
    },
    "/news/detail/:id": (value) => {
        console.log(value);
    },
    "/signup": () => {
        print(SignUpForm.render());
    },
    "signin": () => {
        print(SignInForm.render());

    }
});

router.notFound(() => print("Not found page"));
router.resolve();