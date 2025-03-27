import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Instagram, Twitter, Facebook } from "lucide-react";

const socialIcons = [
  { Icon: Facebook, href: "https://www.facebook.com" },
  { Icon: Twitter, href: "https://www.twitter.com" },
  { Icon: Instagram, href: "https://www.instagram.com" },
];

function ContactInfo() {
  return (
    <div>
      <Image
        className="text-orange-500"
        src="/icon.svg"
        alt="Next.js logo"
        width={30}
        height={30}
        priority
      />
      <div className="flex items-center my-5">
        <span>Hello@RecomCompany.co</span>
      </div>
      <div className="flex items-center mb-4">
        <span>+91-157-256-4862</span>
      </div>
      <div className="flex space-x-4">
        <span>Get Social</span>
        {socialIcons.map(({ Icon, href }, index) => (
          <Link
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="h-5 w-5 text-orange-500" />
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        <span>Powered by</span>

        <Image
          className="text-orange-500 ml-5"
          src="/powerby.svg"
          alt="Next.js logo"
          width={100}
          height={30}
          quality={100}
          priority
        />
      </div>
    </div>
  );
}

export default ContactInfo;
