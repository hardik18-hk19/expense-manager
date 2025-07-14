import React from "react";
import {
  Eye,
  Mail,
  Lock,
  ArrowRight,
  Chrome,
  User,
  Sparkles,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const SocialButton = ({
    icon: IconComponent,
    label,
    bgColor,
    textColor,
    hoverColor,
  }) => (
    <button
      type="button"
      className={`flex items-center justify-center w-full px-4 py-3 ${bgColor} ${textColor} rounded-xl font-medium transition-all duration-300 hover:${hoverColor} hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] group border border-gray-200 dark:border-gray-700 relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      {IconComponent && (
        <IconComponent
          size={20}
          className="mr-3 group-hover:scale-110 transition-transform duration-200 relative z-10"
        />
      )}
      <span className="relative z-10">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-pink-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-indigo-400 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/30 dark:border-gray-700/30 p-8 transition-all duration-500 hover:shadow-3xl hover:scale-[1.01] relative overflow-hidden">
          {/* Card shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Header */}
          <div className="text-center mb-8 relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-600 rounded-2xl mb-6 shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-700 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <Shield className="w-10 h-10 text-white relative z-10 drop-shadow-lg" />
              <Sparkles className="w-4 h-4 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-purple-600 to-indigo-600 dark:from-white dark:via-purple-300 dark:to-indigo-300 bg-clip-text text-transparent mb-3">
              Join Us Today
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Create your account and start your journey
            </p>
          </div>

          {/* Social Login */}
          <div className="space-y-4 mb-8 relative z-10">
            <SocialButton
              icon={Chrome}
              label="Continue with Google"
              bgColor="bg-white dark:bg-gray-700"
              textColor="text-gray-700 dark:text-gray-200"
              hoverColor="bg-gray-50 dark:hover:bg-gray-600"
            />
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-6 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 font-medium">
                or continue with email
              </span>
            </div>
          </div>

          {/* Register Form */}
          <form className="space-y-6 relative z-10">
            {/* Name Field */}
            <div className="group">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200"
              >
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <User className="h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-200" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="block w-full pl-12 pr-4 py-4 border-2 border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 dark:text-white dark:placeholder-gray-400 backdrop-blur-sm hover:border-purple-300 dark:hover:border-purple-400"
                  placeholder="Enter your full name"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Email Field */}
            <div className="group">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <Mail className="h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-200" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="block w-full pl-12 pr-4 py-4 border-2 border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 dark:text-white dark:placeholder-gray-400 backdrop-blur-sm hover:border-purple-300 dark:hover:border-purple-400"
                  placeholder="Enter your email address"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Password Field */}
            <div className="group">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <Lock className="h-5 w-5 text-gray-400 group-hover:text-purple-500 transition-colors duration-200" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="block w-full pl-12 pr-12 py-4 border-2 border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 dark:text-white dark:placeholder-gray-400 backdrop-blur-sm hover:border-purple-300 dark:hover:border-purple-400"
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center hover:scale-110 transition-transform duration-200 z-10"
                >
                  <Eye className="h-5 w-5 text-gray-400 hover:text-purple-500 transition-colors" />
                </button>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group relative w-full flex justify-center py-4 px-6 border border-transparent text-lg font-semibold rounded-2xl text-white bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="flex items-center relative z-10">
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Create Account
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-8 text-center relative z-10">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link to="/login">
                <button className="font-semibold text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300 transition-colors duration-200 hover:underline">
                  Sign in here
                </button>
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            By signing up, you agree to our{" "}
            <a
              href="#"
              className="text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300 transition-colors duration-200 hover:underline font-medium"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300 transition-colors duration-200 hover:underline font-medium"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
