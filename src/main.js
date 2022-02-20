import Navigo from "navigo";
import AdminNews from "./page/Admin/new/News";
import Dashboard from "./page/Admin/Dashboard";
import LayoutSite from "./components/LayoutSite";
import NewsAdd from "./page/Admin/new/NewsAdd";
import NewsEdit from "./page/Admin/new/NewsEdit";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import DetailNews from "./components/Site/DetailNews";

import HomePage from "./page/HomePage";
import News from "./page/News";
import LayoutAdmin from "./components/LayoutAdmin";
import Products from "./page/product/Products";
import DetailProduct from "./page/product/DetailProduct";
import Cart from "./page/Cart";
import AdminProduct from "./page/Admin/product/Product";
import ProductAdd from "./page/Admin/product/ProductAdd";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, page, id = "") => {
    document.getElementById("app").innerHTML = await content.render(page, id);
    if (page.afterRender) page.afterRender();
    if (content.afterRender) content.afterRender();
};

router.on("/admin/*", () => { }, {
    before(done, match) {
        // do something
        if (localStorage.getItem("user")) {
            const userId = JSON.parse(localStorage.getItem("user")).id;
            if (userId === 1) {
                done();
            } else {
                document.location.href = "/";
            }
        } else {
            document.location.href = "/";
        }

    }
});

router.on({
    "/": () => {
        print(LayoutSite, HomePage);
    },
    "/news": () => {
        print(LayoutSite, News);
    },
    "/news/:id": (value) => {
        print(LayoutSite, DetailNews, value.data.id);
    },
    "/products/:id": (value) => {
        print(LayoutSite, DetailProduct, value.data.id);
    },
    "/products/:cate": (value) => {
        print(LayoutSite, Products, value.data.cate);
    },
    "/cart": () => {
        print(LayoutSite, Cart);
    },
    "/admin/dashboard": () => {
        print(LayoutAdmin, Dashboard);
    },
    "/admin/news": () => {
        print(LayoutAdmin, AdminNews);
    },
    "/admin/products": () => {
        print(LayoutAdmin, AdminProduct);
    },
    "/admin/products/add": () => {
        print(LayoutAdmin, ProductAdd);
    },
    "/admin/news/add": () => {
        print(LayoutAdmin, NewsAdd);
    },
    "/admin/news/edit/:id": (value) => {
        print(LayoutAdmin, NewsEdit, value.data.id);
    },
    "/signin": () => {
        print(LayoutSite, SignIn);
    },
    "/signup": () => {
        print(LayoutSite, SignUp);
    }
});

router.notFound(() => print("Not found page"));
router.resolve();