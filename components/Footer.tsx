"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex items-center gap-10 py-16">
      <Link
        className="text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
        href="https://www.instagram.com/web_mastery03/"
      >
        Follow Me Here &nbsp;&#129109;
      </Link>
      <Link
        href="https://suman-mondal-portfolio.vercel.app/"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        <span className="pr-2">Made by</span>
        <Image src="logo-white.svg" width={20} height={20} alt=""/>
        <span className="pl-1 font-medium text-slate-200">Web Mastery</span>
      </Link>
      <Link
        href="https://github.com/suman-3/Code_Script_Image"
        className="flex items-center text-sm font-medium hover:text-slate-200 ease-in-out transition-all duration-500"
      >
        Source Code Here &nbsp;&#129109;
      </Link>
    </div>
  );
}

export default Footer;
