import Navigo from "navigo";
import AdminNews from "./components/AdminNews";
import Dashboard from "./components/Dashboard";
import DetailNews from "./components/DetailNews";
import NewsAdd from "./components/NewsAdd";
import NewsEdit from "./components/NewsEdit";
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
        print(DetailNews.render(value.data.id));
    },
    "/signup": () => {
        print(SignUpForm.render());
    },
    "signin": () => {
        print(SignInForm.render());
    },
    "/admin/dashboard": () => {
        print(Dashboard.render());
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