import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import { HomeIcon, Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import React from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/picnic-box-options", label: "Picnic Box Options" },
  { href: "/online-ordering", label: "Online Ordering" },
  { href: "/pick-up-locations", label: "Pick-Up Locations" },
  { href: "/delivery-information", label: "Delivery Information" },
  { href: "/faqs", label: "FAQs" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/blog-news", label: "Blog/News" },
];

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between m-2 md:px-10">
      <a href="/" className="text-lg font-bold text-gray-900">
        Logo
      </a>
      <div className="flex md:hidden">
        <button
          onClick={toggleMenu}
          type="button"
          className="text-gray-900 hover:text-gray-500 focus:outline-none"
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars2Icon className="w-6 h-6" />
          )}
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`absolute z-20 top-full right-0 md:relative md:flex md:items-center md:space-x-4 md:mt-0 md:mr-2 md:flex-row ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {links.map((link) => (
          <Menu.Item key={link.href}>
            {({ active }) => (
              <a
                href={link.href}
                className={`${
                  active ? "text-gray-900" : "text-gray-500"
                } block px-3 py-2 text-lg font-medium text-center hover:text-gray-900 md:text-left`}
              >
                {link.label}
              </a>
            )}
          </Menu.Item>
        ))}
      </motion.div>
    </nav>
  );
};

export default NavigationMenu;
