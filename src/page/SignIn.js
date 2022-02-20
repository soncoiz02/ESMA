import { getAll } from "../api/user";

const SignIn = {
    async render() {
        return /*html*/`
        <div class="min-h-screen max-w-7xl mx-auto flex items-center justify-center">
            <div class="max-w-md w-full space-y-8">
                <div>
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sign In
                </h2>
                </div>
                <form class="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true">
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label for="email-address" class="sr-only">Email address</label>
                    <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
                    </div>
                    <div>
                    <label for="password" class="sr-only">Password</label>
                    <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                    <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                        Remember me
                    </label>
                    </div>
                    <div class="text-sm">
                    <a href="/signup" class="font-medium text-indigo-600 hover:text-indigo-500">
                        Sign Up
                    </a>
                    </div>
                </div>
                <div>
                    <button id="btn-sign-in" type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                        <!-- Heroicon name: solid/lock-closed -->
                        <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    Sign in
                    </button>
                </div>
                </form>
            </div>
        </div>
    `;
    },
    afterRender() {
        const btnSignIn = document.querySelector("#btn-sign-in");

        const getAllUser = async () => {
            const { data } = await getAll();
            return data;
        };

        btnSignIn.onclick = async (e) => {
            e.preventDefault();

            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;

            const allUser = await getAllUser();
            const currentUser = allUser.find(e => e.email == email);
            if (currentUser) {
                if (currentUser.password == password) {
                    const { username, email, id } = currentUser;
                    localStorage.setItem("user", JSON.stringify({
                        username: username,
                        email: email,
                        id: id
                    }));
                    location.href = "/";
                }
            }
        };


    }
};

export default SignIn; 