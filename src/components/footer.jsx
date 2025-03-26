import {
  Phone,
  Mail,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    title: "Navigate",
    items: [
      { value: "Home", link: "#home" },
      { value: "AboutUs", link: "#aboutus" },
      { value: "Contact", link: "#contact" },
      { value: "Blog", link: "#blog" },
    ],
  },
  {
    title: "Categories",
    items: [
      { value: "Home", link: "#home" },
      { value: "AboutUs", link: "#aboutus" },
      { value: "Contact", link: "#contact" },
      { value: "Blog", link: "#blog" },
    ],
  },
  {
    title: "Features",
    items: [
      { value: "Home", link: "#home" },
      { value: "AboutUs", link: "#aboutus" },
      { value: "Contact", link: "#contact" },
      { value: "Blog", link: "#blog" },
    ],
  },
];

const socialIcons = [
  { Icon: Facebook, href: "https://www.facebook.com" },
  { Icon: Twitter, href: "https://www.twitter.com" },
  { Icon: Instagram, href: "https://www.instagram.com" },
];

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
          <div className="hidden md:block">
            <Image
                className="text-orange-500"
                src="/icon.svg"
                alt="Next.js logo"
                width={30}
                height={30}
                priority   
            />
            <div className="flex items-center my-5">
              <Mail className="h-4 w-4 mr-2" />
              <span>Hello@RecomCompany.co</span>
            </div>
            <div className="flex items-center mb-4">
              <Phone className="h-4 w-4 mr-2" />
              <span>+91-157-256-4862</span>
            </div>
            <div className="flex space-x-4">
              {socialIcons.map(({ Icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5 text-or" />
                </Link>
              ))}
            </div>
          </div>
          {links.map((link, index) => (
            <div key={index}>
              <h4 className="text-orange-500 font-semibold mb-4">
                {link.title}
              </h4>
              <ul className="space-y-2">
                {link.items.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.link}>{item.value}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="md:hidden block pt-10">
            <Image
                className="text-orange-500"
                src="/icon.svg"
                alt="Next.js logo"
                width={30}
                height={30}
                priority   
            />
          <div className="flex items-center mb-2">
            <Mail className="h-4 w-4 mr-2" />
            <span>Hello@techcompany.co</span>
          </div>
          <div className="flex items-center mb-4">
            <Phone className="h-4 w-4 mr-2" />
            <span>+91-157-256-4862</span>
          </div>
          <div className="flex space-x-4">
            {socialIcons.map(({ Icon, href }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
          Copyright © 2023 Saaspect. By Saaspect Inc | All rights reserved | Privacy Policy | Terms of use
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
