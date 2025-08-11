"use client";

import type { NextPage } from "next";
import { HomePage } from "~~/components/HomePage";

const Home: NextPage = () => {
  return (
    <section className="flex items-center flex-col flex-grow pt-10">
      <HomePage />
    </section>
  );
};

export default Home;
