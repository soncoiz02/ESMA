import Navigo from "navigo";
import AdminNews from "./components/AdminNews";
import DetailNews from "./components/DetailNews";
import NewsAdd from "./components/NewsAdd";
import NewsEdit from "./components/NewsEdit";
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
    "/news/detail": (value) => {
        console.log(value);
        print(DetailNews.render(value.params.id));
    },
    "/admin/news": () => {
        print(AdminNews.render());
    },
    "/admin/news/add": () => {
        print(NewsAdd.render());
    },
    "/admin/news/edit/:id": (value) => {
        print(NewsEdit.render(value.data.id));
    }
});

router.notFound(() => print("Not found page"));
router.resolve();