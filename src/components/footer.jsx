import Link from "next/link";
import ContactInfo from "./contactInfo";

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

function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2  gap-5">
          <div className="hidden md:block">
            <ContactInfo />
          </div>

          <div className="grid grid-cols-3">
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
        </div>

        {/* MOBILE  */}
        <div className="md:hidden block pt-10">
          <ContactInfo />
        </div>

        <div className="border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>
            Copyright © 2023 Saaspect. By Saaspect Inc | All rights reserved |
            Privacy Policy | Terms of use
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
