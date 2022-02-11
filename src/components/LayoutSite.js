import Header from "./Header";

const LayoutSite = {
    render: async (children, param) => {
        return `
            <div class="container mx-auto max-w-6xl flex-col">
            <header>
            <div class="text-center text-white text-4xl bg-slate-900 font-bold py-8">FPT Polytechnic</div>
            <div class="nav">
            ${await Header.render()}
            </div>
            </header>
            <main>
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