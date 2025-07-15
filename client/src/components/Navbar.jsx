import {
  Contact,
  CreditCard,
  Home,
  LayoutDashboard,
  Calculator,
  Menu,
  X,
  DollarSign,
  Sparkles,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: CreditCard, label: "Transactions", href: "/transactions" },
    { icon: Calculator, label: "Tools", href: "/tools" },
    { icon: Contact, label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-xl shadow-2xl border-b border-purple-100/50 sticky top-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50/30 via-pink-50/20 to-indigo-50/30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center group">
            <div className="flex-shrink-0 flex items-center relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 p-2 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="h-8 w-8 text-white" />
                  <Sparkles className="h-3 w-3 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
                </div>
              </div>
              <span className="ml-4 text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                CapitalSync
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative flex items-center gap-2 text-gray-700 hover:text-purple-600 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 via-pink-100/30 to-indigo-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100"></div>

                  {/* Icon with animation */}
                  <div className="relative z-10 p-1.5 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300">
                    <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Label */}
                  <span className="relative z-10 group-hover:font-bold transition-all duration-300">
                    {item.label}
                  </span>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Login Button */}
          <div className="hidden md:block">
            <Button
              className="relative group bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 text-white px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
              onClick={() => {
                navigate("/login");
              }}
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              {/* Button content */}
              <div className="relative z-10 flex items-center gap-2">
                <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                Login
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="group relative inline-flex items-center justify-center p-3 rounded-2xl text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 hover:scale-110"
            >
              {/* Button background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon with animation */}
              <div className="relative z-10">
                {isMenuOpen ? (
                  <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Menu className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-xl border-t border-purple-100/50 relative overflow-hidden">
            {/* Mobile menu background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 via-pink-50/20 to-indigo-50/30"></div>

            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative flex items-center gap-3 text-gray-700 hover:text-purple-600 px-4 py-4 rounded-2xl text-base font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Mobile item background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 via-pink-100/30 to-indigo-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>

                {/* Icon with enhanced styling */}
                <div className="relative z-10 p-2 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300">
                  <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Label */}
                <span className="relative z-10 group-hover:font-bold transition-all duration-300">
                  {item.label}
                </span>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-2xl"></div>
              </a>
            ))}

            <div className="pt-6 pb-2 border-t border-purple-100/50 relative z-10">
              <Button
                className="relative group w-full bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:from-purple-700 hover:via-pink-700 hover:to-indigo-700 text-white px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                onClick={() => {
                  navigate("/login");
                  setIsMenuOpen(false);
                }}
              >
                {/* Mobile button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                {/* Mobile button content */}
                <div className="relative z-10 flex items-center justify-center gap-2">
                  <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Login
                </div>

                {/* Mobile button glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
