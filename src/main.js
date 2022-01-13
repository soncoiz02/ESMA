import Navigo from "navigo";

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


    }
});

router.notFound(() => print("Not found page"));
router.resolve();