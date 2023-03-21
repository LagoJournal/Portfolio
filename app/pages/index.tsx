import { Layout } from "@/components/layout";
import { CardsGrid } from "@/components/ui";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Layout>
        <CardsGrid />
      </Layout>
    </>
  );
}
