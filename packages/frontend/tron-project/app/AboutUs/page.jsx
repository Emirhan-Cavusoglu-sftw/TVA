"use client"
import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";

const AboutUs = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="bg-gradient-to-r from-purple-950 to-violet-600 min-h-screen flex justify-center items-center ">
      <motion.div
        className="text-white max-w-4xl px-6 py-12 mt-24 "
        
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-center text-4xl font-bold mb-8">
          TVA: Empowering Creativity in the Digital Era
        </h1>
        <p className="text-lg text-center leading-relaxed">
          TVA, or Time-stamped Visual Art, is an advanced blockchain-based platform designed to revolutionize the way intellectual property rights are managed and protected in the digital age. At TVA, we recognize the challenges faced by artists and creators in asserting ownership over their works in an increasingly interconnected and rapidly evolving digital landscape.
        </p>
        <p className="text-lg text-center leading-relaxed mt-4">
          With the proliferation of digital content and the ease of its replication, the need for a secure and transparent system for registering and safeguarding intellectual property rights has never been greater. Our platform offers a comprehensive suite of features tailored to meet the needs of artists, designers, and content creators across various industries.
        </p>
        <p className="text-lg text-center leading-relaxed mt-4">
          Through the use of blockchain technology, we provide a tamper-proof and immutable ledger that serves as a verifiable record of ownership and creation. Each piece of artwork or creative content uploaded to TVA is assigned a unique digital fingerprint, or hash, which is securely stored on the blockchain, establishing an irrefutable timestamp of its existence.
        </p>
        <p className="text-lg text-center leading-relaxed mt-4">
          But TVA is more than just a registry for intellectual property rights; it's a dynamic ecosystem that empowers artists to showcase their work, engage with their audience, and monetize their creations. Our platform enables artists to license their works, track usage rights, and receive royalties seamlessly through smart contracts, eliminating intermediaries and ensuring fair compensation for their contributions.
        </p>
        <p className="text-lg text-center leading-relaxed mt-4">
          Moreover, TVA fosters collaboration and community building among artists, providing a space for networking, sharing ideas, and finding inspiration. Our decentralized marketplace allows users to buy, sell, and trade digital assets directly, creating new opportunities for artists to reach a global audience and expand their creative reach.
        </p>
        <p className="text-lg text-center leading-relaxed mt-4">
          In essence, TVA represents a paradigm shift in the way creativity is valued and protected in the digital era. By leveraging the transparency, security, and efficiency of blockchain technology, we aim to empower artists, promote innovation, and ensure that the fruits of creative labor are respected and rewarded equitably. Join us in shaping the future of intellectual property rights management with TVA.
        </p>
      </motion.div>
    </div>

  );
};

export default AboutUs;

