import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <a id="Contact"></a>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="my-20 text-4xl font-bold text-center"
      >
        Let us Connect
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center tracking-tighter"
      >
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="m-8 flex items-center justify-center gap-4 text-2xl "
        >
          <div className="flex cursor-pointer hover:scale-150 hover:text-purple-700 transition-all duration-200">
            <a href="https://www.linkedin.com/in/rahulrajbit"  target='_blank'>
              <FaLinkedin size={50} />
            </a>
          </div>
          <div className="flex cursor-pointer hover:scale-150 hover:text-purple-700 transition-all duration-200">
            <a href="https://www.github.com/RrowdiesBIT"  target='_blank'>
              <FaGithub size={50} />
            </a>
          </div>
        </motion.div>
        <p className="my-4 text-xl ">{CONTACT.phoneNo}</p>
        <a
          href="mailto:rahulrajpr06@gmail.com"
          className="my-4 bg-neutral-900 px-2 py-2 rounded text-purple-900 font-semibold text-2xl "
        >
          Send Mail
        </a>
      </motion.div>

      <h2 className=" text-2xl font-semibold mt-6"> Created by Rahul Raj </h2>
      <h6>@All Rights Reserved</h6>
    </div>
  );
}

export default Contact;
