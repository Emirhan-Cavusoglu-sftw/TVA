"use client";
import { WavyBackground } from "./wavy-background";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Main = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });

  const mainControls1 = useAnimation();
  const mainControls2 = useAnimation();
  const mainControls3 = useAnimation();

  useEffect(() => {
    if (inView1) {
      mainControls1.start("visible");
    } else {
      mainControls1.start("hidden");
    }
  }, [mainControls1, inView1]);

  useEffect(() => {
    if (inView2) {
      mainControls2.start("visible");
    } else {
      mainControls2.start("hidden");
    }
  }, [mainControls2, inView2]);

  useEffect(() => {
    if (inView3) {
      mainControls3.start("visible");
    } else {
      mainControls3.start("hidden");
    }
  }, [mainControls3, inView3]);

  return (
    <>
      <WavyBackground className="pb-40">
        <motion.p
          className="text-2xl md:text-4xl lg:text-7xl text-black font-bold inter-var text-center mt-12"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        >
          TimeWeave
        </motion.p>
        <motion.p
          className="text-base md:text-lg mt-4 text-black font-normal inter-var text-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        >
          TimeWeave: Securing unregistered product designs and enhancing user
          experience with decentralized wallets.
        </motion.p>

        <div className="flex mt-[600px] ">
          <div className="flex flex-col space-y-64">
            <motion.div
              className="flex flex-row space-x-80"
              ref={ref1}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls1}
              transition={{ duration: 1.5, delay: 0.1, ease: "easeInOut" }}
            >
              <Image
                className="rounded-3xl"
                alt="Ethereum"
                src="/metinImage1.jpg"
                height={300}
                width={400}
              />
              <p className="w-[450px] text-xl font-normal text-center pt-4 flex flex-col ">
                <span className="font-bold mb-4">
                  TimeWeave Ensures Security and Legal Validity for Unregistered
                  Product Designs
                </span>
                TimeWeave is a groundbreaking platform revolutionizing the
                protection of unregistered product designs. Utilizing Solidity
                for robust backend functionality, WitnessBase ensures the
                integrity of design data, transforming it into admissible
                evidence in legal contexts. With a focus on user experience,
                WitnessBase seamlessly integrates decentralized wallet features,
                providing users with a secure and intuitive interface for
                safeguarding their valuable design assets.
              </p>
            </motion.div>
            <motion.div
              className="flex flex-row space-x-80"
              ref={ref2}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls2}
              transition={{ duration: 1.5, delay: 0.1, ease: "easeInOut" }}
            >
              <p className="w-[450px] text-xl font-normal text-center pt-12 flex flex-col">
                <span className="font-bold mb-4">
                  TimeWeave&apos;s Time Stamp Documents Simplify Registration
                  for Unregistered Product Designs
                </span>
                Time Stamp Documents (TSDs) on the platform allow users to input
                necessary information for registration, securing unregistered
                product designs while providing a seamless user experience with
                decentralized wallets.
              </p>
              <Image
                className="rounded-3xl"
                alt="Ethereum"
                src="/metinImage2.jpg"
                height={300}
                width={400}
              />
            </motion.div>
            <motion.div
              className="flex flex-row space-x-80"
              ref={ref3}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls3}
              transition={{ duration: 1.5, delay: 0.1, ease: "easeInOut" }}
            >
              <Image
                className="rounded-3xl"
                alt="Ethereum"
                src="/metinImage4.jpg"
                height={300}
                width={400}
              />
              <p className="w-[450px] text-xl font-normal text-center pt-12 flex flex-col">
                <span className="font-bold mb-4">
                  Protecting Unregistered Product Designs
                </span>
                TimeWeave incorporates Account Abstraction (AA), a secure
                mechanism for storing Time Stamp Documents (TSDs) within users’
                wallets. This feature empowers users to download sample PDFs and
                seamlessly input essential registration details, ensuring the
                protection of unregistered product designs on the platform.
              </p>
            </motion.div>
          </div>
        </div>
      </WavyBackground>
    </>
  );
};

export default Main;
