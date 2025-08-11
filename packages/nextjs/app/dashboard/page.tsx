"use client";

import type { NextPage } from "next";
import { Dashboard as DashboardPage } from "~~/components/DashboardPage";

const Dashboard: NextPage = () => {
  return (
    <section className="flex items-center flex-col flex-grow pt-10">
      <DashboardPage />
    </section>
  );
};

export default Dashboard;
