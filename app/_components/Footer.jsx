
import Button from "./ui/Button";
import Image from "next/image";
import logo from "@/public/logo.png";
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { IoMdCall } from "react-icons/io";
import { useCreateNewsletter } from "./admin/newsletter/useNewsletter";
import { useState } from "react";
import toast from "react-hot-toast";

const socialMediaLinks = [
  {
    id: 1,
    icon: <FaInstagram color="black" size={"25px"} />,
    link: "https://www.instagram.com/creativehomesrealestate/",
    name: "Instagram",
  },
  {
    id: 2,
    icon: <RiFacebookFill color="black" size={"25px"} />,
    link: "https://www.facebook.com/creativehomesrealestate/",
    name: "facebook",
  },
  {
    id: 3,
    icon: <FaLinkedinIn color="black" size={"25px"} />,
    link: "https://www.linkedin.com/company/creativehomesrealestate/",
    name: "LinkedIn",
  },
  {
    id: 4,
    icon: <FaYoutube color="black" size={"25px"} />,
    link: "https://www.youtube.com/@creativehomesrealestate",
    name: "Youtube",
  },
];
const ContactLinks = [
  {
    id: 1,
    icon: <MdLocationOn color="black" size={"25px"} />,
    link: "https://www.instagram.com/",
    name: "info@creativehomes.ae",
  },
  {
    id: 2,
    icon: <CgMail color="black" size={"25px"} />,
    link: "https://www.facebook.com/",
    name: `Office 3107, BLDG 3, Gold & Diamond Park,<br />Sheikh Zayed Road, Dubai, United Arab Emirates<br /> <br />Postal code: 37468`,
  },
  {
    id: 3,
    icon: <IoMdCall color="black" size={"25px"} />,
    link: "https://www.linkedin.com/",
    name: "+9714 238 7671",
  },
];
const quickLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Properties", link: "/property" },
  { id: 3, name: "Rent Properties", link: "/property?offeringtype=rent" },
  { id: 4, name: "Buy Properties", link: "/property?offeringtype=buy" },
  { id: 5, name: "Off Plan Properties", link: "/off-plan-properties" },
];
const quickLinks2 = [
  { id: 6, name: "About Us", link: "/about" },
  { id: 7, name: "News", link: "/news" },
  { id: 8, name: "Contact Us", link: "/contact-us" },
  { id: 9, name: "Privacy Policy", link: "/privacy-policy" },
];

const popularSearches = [
  { id: 1, name: "Al Furjan", link: "" },
  { id: 2, name: "Aldar", link: "" },
  { id: 3, name: "Alhabtoor", link: "" },
  { id: 4, name: "Arabian Ranches", link: "" },
  { id: 5, name: "Arjan", link: "" },
  { id: 6, name: "Binghatti Developers", link: "" },
  { id: 7, name: "Business Bay", link: "" },
  { id: 8, name: "Dubai Marina", link: "" },
  { id: 9, name: "Townsquare", link: "" },
];

export default function Footer() {
const [email, setEmail] = useState("");
const { createNewNewsletter, isCreating } = useCreateNewsletter();

  const handleNewsletterSubmit = () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }

    const payload = { email };
    createNewNewsletter(payload);
    setEmail(""); // reset input
  };

  return (
    <div
      className="max-lg:hidden w-full p-10 flex justify-between bg-black text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/dubai1.png')",
        backgroundSize: "contain",
      }} // Update with your image path
    >
      <div className="flex flex-col justify-around w-[32%] h-[60vh]">
        <div>
          <a href={"/"}>
            <Image src={logo} alt="Logo" className="w-[auto] h-[5rem]" />
          </a>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-[1rem] leading-6 mb-1">
            Stay in the loop
          </span>
          <span className="text-[1rem] leading-6">
            Sign up to our weekly newsletter for market updates
          </span>
        </div>
        {/* <div className="flex space-x-3">
          <input
            type="text"
            className="w-[22.7rem] rounded-[20px] p-3 text-black"
            placeholder="Email Address"
          />
          <Button
            text="Send"
            className="w-20 p-2 rounded-[18px] text-[0.9rem]"
          />
        </div> */}
        <div className="flex space-x-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[22.7rem] rounded-[20px] p-3 text-black"
            placeholder="Email Address"
          />
          <Button
            text={isCreating ? "Sending..." : "Send"}
            className="w-20 p-2 rounded-[18px] text-[0.9rem]"
            onClick={handleNewsletterSubmit}
          />
        </div>

        <div className="flex flex-col">
          <span className="text-[1rem] leading-6">
            © All Right Reserved By Creative Homes Real Estate, 2025
          </span>
        </div>
      </div>

      <div className="flex flex-col space-y-8 relative pt-8 w-[10%]">
        <span className="font-medium text-[1rem] leading-6 mb-1">
          Quick Links
        </span>
        <ul className="grid grid-cols-1 gap-y-3 gap-x-1">
          {quickLinks.map((link, index) => (
            <li key={index} className="text-[0.9rem] leading-6 font-light">
              <a
                href={link.link}
                className="no-underline text-white hover:text-gray-300 transition-colors"
                dangerouslySetInnerHTML={{ __html: link.name }}
              ></a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col space-y-8 relative pt-8 w-[10%]">
        <span className="font-medium text-[1rem] leading-6 mb-1">
          Quick Links
        </span>
        <ul className="grid grid-cols-1 gap-y-3 gap-x-1">
          {quickLinks2.map((link, index) => (
            <li key={index} className="text-[0.9rem] leading-6 font-light">
              <a
                href={link.link}
                className="no-underline text-white hover:text-gray-300 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col space-y-8 relative pt-8 w-[10%]">
        <span className="font-medium text-[1rem] leading-6 mb-1 ">
          Follow us on:
        </span>
        <ul className="flex flex-col space-y-4">
          {socialMediaLinks.map((search, index) => (
            <a
              href={search.link}
              key={index}
              className="no-underline text-white hover:text-gray-300 transition-colors"
            >
              <div key={search.id || index} className="flex flex-row gap-3">
                <li className="w-[1.7rem] h-[1.7rem] bg-white  text-[1rem] leading-6 font-light rounded-lg flex justify-center items-center">
                  {search.icon}
                </li>
                <li className="text-[0.9rem] leading-6 font-light">
                  {search.name}
                </li>
              </div>
            </a>
          ))}
        </ul>
      </div>

      <div className="flex flex-col space-y-8 relative pt-8 w-[26%]">
        <span className="font-medium text-[1rem] leading-6 mb-1 ">
          Contact us:
        </span>
        <ul className="flex flex-col space-y-4">
          {ContactLinks.map((con, index) => (
            <div key={index} className="flex flex-row gap-3">
              <li className="w-[1.7rem] h-[1.7rem] bg-white  text-[1rem] leading-6 font-light rounded-lg flex justify-center items-center">
                <a
                  href={con.link}
                  className="no-underline text-white hover:text-gray-300 transition-colors"
                >
                  {con.icon}
                </a>
              </li>
              <li
                className="text-[0.9rem] leading-6 font-light"
                dangerouslySetInnerHTML={{ __html: con.name }} // Using dangerouslySetInnerHTML here
              ></li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
