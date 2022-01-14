import Navigo from "navigo";
import AdminNews from "./page/Admin/News";
import Dashboard from "./components/Admin/Dashboard";
import LayoutSite from "./components/LayoutSite";
import NewsAdd from "./components/Admin/NewsAdd";
import NewsEdit from "./components/Admin/NewsEdit";
import SignInForm from "./components/Site/SignInForm";
import SignUpForm from "./components/Site/SignUpForm";
import DetailNews from "./components/Site/DetailNews";

import HomePage from "./page/HomePage";
import News from "./page/News";
import LayoutAdmin from "./components/LayoutAdmin";
const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(LayoutSite.render(HomePage));
    },
    "/news": () => {
        print(LayoutSite.render(News));
    },
    "/news/:id": (value) => {
        print(LayoutSite.render(DetailNews, value.data.id));
    },
    "/admin/dashboard": () => {
        print(LayoutAdmin.render(Dashboard));
    },
    "/admin/news": () => {
        print(LayoutAdmin.render(AdminNews));
    },
    "/admin/news/add": () => {
        print(LayoutAdmin.render(NewsAdd));
    },
    "/admin/news/edit/:id": (value) => {
        print(LayoutAdmin.render(NewsEdit, value.data.id));
    },
    "/signin": () => {
        print(LayoutSite.render(SignInForm));
    },
    "/signup": () => {
        print(LayoutSite.render(SignUpForm));
    }
});

router.notFound(() => print("Not found page"));
router.resolve();