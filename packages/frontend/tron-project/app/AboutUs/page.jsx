"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import Section from "../Components/Section";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: { rotate: 0, transition: { duration: 1 } },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      pathLength: { delay: 1, duration: 4, ease: "easeInOut" },
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const AboutUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start ", "end end"],
  });
  return (
    <div className="bg-gradient-to-r from-cyan-400 to-gray-700 flex flex-col justify-center min-h-[300vh] items-center ">
      <motion.svg
        width="100px"
        className="mt-40"
        height="100px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M15 6H9M20 21H19M19 21H5M19 21C19 18.4898 17.7877 16.1341 15.7451 14.675L12 12M5 21H4M5 21C5 18.4898 6.21228 16.1341 8.25493 14.675L12 12M20 3H19M19 3H5M19 3C19 5.51022 17.7877 7.86592 15.7451 9.32495L12 12M5 3H4M5 3C5 5.51022 6.21228 7.86592 8.25493 9.32495L12 12"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          variants={pathVariants}
        />
      </motion.svg>
      <motion.div
        className="text-white max-w-4xl px-6 py-12 "
        // style={{ opacity: scrollYProgress }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <h1 className="text-center text-4xl font-bold mb-8">
          TVA: Empowering Creativity in the Digital Era
        </h1>
        <p className="text-lg text-center leading-relaxed">
          TVA, or Time-stamped Visual Art, is an advanced blockchain-based
          platform designed to revolutionize the way intellectual property
          rights are managed and protected in the digital age. At TVA, we
          recognize the challenges faced by artists and creators in asserting
          ownership over their works in an increasingly interconnected and
          rapidly evolving digital landscape.
        </p>
        <p className="text-lg text-center leading-relaxed mt-4">
          With the proliferation of digital content and the ease of its
          replication, the need for a secure and transparent system for
          registering and safeguarding intellectual property rights has never
          been greater. Our platform offers a comprehensive suite of features
          tailored to meet the needs of artists, designers, and content creators
          across various industries.
        </p>
        <p className="text-lg text-center leading-relaxed mt-4">
          Through the use of blockchain technology, we provide a tamper-proof
          and immutable ledger that serves as a verifiable record of ownership
          and creation. Each piece of artwork or creative content uploaded to
          TVA is assigned a unique digital fingerprint, or hash, which is
          securely stored on the blockchain, establishing an irrefutable
          timestamp of its existence.
        </p>
        <p className="text-lg text-center leading-relaxed mt-4">
          But TVA is more than just a registry for intellectual property rights;
          it's a dynamic ecosystem that empowers artists to showcase their work,
          engage with their audience, and monetize their creations. Our platform
          enables artists to license their works, track usage rights, and
          receive royalties seamlessly through smart contracts, eliminating
          intermediaries and ensuring fair compensation for their contributions.
        </p>
        <p className="text-lg text-center leading-relaxed mt-4">
          Moreover, TVA fosters collaboration and community building among
          artists, providing a space for networking, sharing ideas, and finding
          inspiration. Our decentralized marketplace allows users to buy, sell,
          and trade digital assets directly, creating new opportunities for
          artists to reach a global audience and expand their creative reach.
        </p>
        <p className="text-lg text-center leading-relaxed mt-4">
          In essence, TVA represents a paradigm shift in the way creativity is
          valued and protected in the digital era. By leveraging the
          transparency, security, and efficiency of blockchain technology, we
          aim to empower artists, promote innovation, and ensure that the fruits
          of creative labor are respected and rewarded equitably. Join us in
          shaping the future of intellectual property rights management with
          TVA.
        </p>

        <div ref={ref}>
          <button>
            <a href="/CreateDesignStamp" className="text-white text-2xl">
              Create Design Stamp
            </a>
          </button>
        </div>
      </motion.div>
      <Section children={"1dsdfsdf"} className={"text-white text-2xl  mr-[1040px] mt-96"}>RESPECT TE TİMELİNE BRUHHH</Section>
    </div>
  );
};

export default AboutUs;
