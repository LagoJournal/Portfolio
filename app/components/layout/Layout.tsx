import React from "react";
import Head from "next/head";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({
  title = "Agustin Lago Dev.",
  children,
}) => {
  return (
    <div className=" bg-bg  min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <div>{children}</div>
    </div>
  );
};
