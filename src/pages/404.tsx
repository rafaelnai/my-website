import * as React from "react";
import { Link, HeadFC } from "gatsby";
import Layout from "../layouts/Default/layout";

function NotFoundPage() {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <Link to="/">Go home</Link>.
      </p>
    </Layout>
  );
}

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
