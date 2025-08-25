"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate px-6  lg:px-8 mt-20">
      <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:py-16">
        <div className="text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight text-primary-900 dark:text-primary-50 sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            I build{" "}
            <span className="text-primary-600">SaaS & payment platforms</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-primary-700 dark:text-primary-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Fintech Developer specialized in billing, invoicing, and digital
            payments. Building reliable, scalable solutions that handle real
            money.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-2 flex-col md:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button href="/projects" size="lg">
              View my work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="/doc/CV_Tano_Dylane.pdf" variant="outline" size="lg">
              Download my Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
