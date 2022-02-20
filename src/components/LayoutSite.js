import Header from "./Header";

const LayoutSite = {
    render: async (children, param) => {
        return `
            <div class="w-full relative">
                <header>
                ${await Header.render()}
                </header>
                <main class="mt-20">
                    ${await children.render(param)}
                </main>
                <footer class="w-full bg-slate-800 text-white text-center py-4 mt-4">Trần Bảo Sơn PH17733</footer>
            </div>
        `;
    },
    afterRender() {
        Header.afterRender();
    }
};

export default LayoutSite;