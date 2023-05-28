import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../layouts/Default";

function IndexPage({ data }: PageProps) {
  return <Layout>Hello World{JSON.stringify(data)}</Layout>;
}

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
