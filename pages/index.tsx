import Link from "next/link";
import Layout from "components/common/Layout";
import Greeting from "components/home/Greeting";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Greeting type="right" message={"Hello World with test"} />
    <Greeting type="left" message={"Hello World with test"} />
    
    {/* <Link href="/about">
      <a>About</a>
    </Link> */}
  </Layout>
);

export default IndexPage;
