'use client'

export default function Login() {

    return (
        <div className="flex min-h-screen items-center justify-center bg-green-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <div className="flex justify-center mb-6">
                    <img src="/logo.svg" alt="Logo" className="h-8" />
                </div>
                <h2 className="text-center text-2xl font-semibold text-gray-800">Sign in to your account</h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md border-gray-300 text-gray-900 focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md border-gray-300 text-gray-900 focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-600">
                            <input type="checkbox" className="mr-2" /> Remember me
                        </label>
                        <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot password?</a>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
                    >
                        Sign in
                    </button>
                </form>
                <div className="relative flex items-center justify-center my-4">
                    <span className="absolute px-4 bg-white text-gray-600">Or continue with</span>
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="flex gap-4">
                    <button className="flex-1 py-2 border rounded-md text-gray-600 hover:bg-gray-100">
                        <img src="/google-icon.svg" alt="Google" className="inline w-5 h-5 mr-2" /> Google
                    </button>
                    <button className="flex-1 py-2 border rounded-md text-gray-600 hover:bg-gray-100">
                        <img src="/github-icon.svg" alt="GitHub" className="inline w-5 h-5 mr-2" /> GitHub
                    </button>
                </div>
                <p className="text-center text-sm text-gray-600 mt-6">
                    Not a member? <a href="#" className="text-indigo-600 hover:underline">Start a 14 day free trial</a>
                </p>
            </div>
        </div>
    );
}