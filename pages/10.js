import { Layout } from "../components/layout";

export default function AboutArtectScan() {
  return (
    <Layout>
      <h1 style={{ marginBottom: 30 }}>artec eva scan</h1>
      <div style={{ display: "flex" }}>
        <img src="./lob-about.png" width="auto" height="auto" />
        <img src="./lob-scan.png" width="100%" height="auto" />
      </div>
    </Layout>
  );
}
