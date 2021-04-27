import { Layout } from "../components/layout";

export default function Performance() {
  return (
    <Layout maxW>
      <h1 style={{ marginBottom: 30 }}>performance?</h1>
      <div>
        <a
          style={{ marginBottom: 30, display: "block" }}
          href="https://modelviewer.dev/examples/lighthouse.html"
        >
          https://modelviewer.dev/examples/lighthouse.html
        </a>
        <img src="./perf.png" width="100%" height="auto" />
      </div>
    </Layout>
  );
}
