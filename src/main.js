import Navigo from "navigo";
import Dashboard from "./components/Dashboard";

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
    "/admin/dashboard": () => {
        print(Dashboard.render());
    }
});

router.notFound(() => print("Not found page"));
router.resolve();