import { Layout } from "../components/layout";

export default function SlideOne() {
  return (
    <Layout maxW>
      <h1 style={{ marginBottom: 30 }}>browser support</h1>
      <div>
        <img src="./browser-support.png" width="100%" height="auto" />
      </div>
    </Layout>
  );
}
