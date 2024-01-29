import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="px:[5%] w-full flex flex-col items-center ">
      <div className="flex flex-row justify-between max-w-[950px] my-0 mx-auto gap-8">
        <div className=" min-w-60">
          <h3>Get In Touch</h3>
          <p className="max-w-[211px] text-papayas-textgray text-sm">
            the quick fox jumps over the lazy dog
          </p>
          <div className="inline-flex fill-mainblue">
            <a href="/pages">
              <FaFacebook />
            </a>
            <a href="/pages">
              <FaInstagram />
            </a>
            <a href="/pages">
              <FaSquareXTwitter />
            </a>
          </div>
        </div>
        <div className="min-w-60 gap-5">
          <h3>Company Info</h3>
          <ul className=" gap-3">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="min-w-60">
          <ul>
            <h3>Features</h3>
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>
        <div className="min-w-30">
          <ul>
            <h3>Resources</h3>
            <li>IOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
          </ul>
        </div>
      </div>
      <div className="font-mont bg-[#FAFAFA]">
        <h6>Made With Love By Finland All Right Reserved</h6>
      </div>
    </footer>
  );
}

export default Footer;
