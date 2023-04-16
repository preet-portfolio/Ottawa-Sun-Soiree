import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

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
  return (
    <Menu as="nav" className="flex space-x-4 m-2 text-lg">
      {links.map((link) => (
        <Menu.Item key={link.href}>
          {({ active }) => (
            <a
              href={link.href}
              className={`${
                active ? "text-gray-900" : "text-gray-500"
              } hover:text-gray-900`}
            >
              {link.label}
            </a>
          )}
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default NavigationMenu;
