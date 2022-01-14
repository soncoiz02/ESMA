const Header = {
    render: () => {
        return `
            <header>
            <div class="text-center text-white text-4xl bg-slate-900 font-bold py-8">FPT Polytechnic</div>
            <div class="nav flex justify-between items-center bg-yellow-600 px-5">
            <ul class="link flex gap-3 px-5 py-3">
                <li><a href="/" class="text-white hover:underline">Home</a></li>
                <li><a href="/news" class="text-white hover:underline">News</a></li>
                <li><a href="/signin" class="text-white hover:underline">Sign in</a></li>
                <li><a href="/signup" class="text-white hover:underline">Sign up</a></li>
            </ul>
            <div class="form">
                <input type="text" class="py-1 px-2">
                <button class="ml-2 bg-blue-900 border-zinc-50 px-5 py-1 text-white">Tìm kiếm</button>
            </div>
            </div>
        </header>
        `;
    }
};

export default Header;