import { Layout } from "../components/layout";

export default function SlideOne() {
  return (
    <Layout maxW>
      <h1 style={{ marginBottom: 30 }}>steps</h1>
      <ol>
        <li style={{ marginBottom: 20 }}>npm i @google/model-viewer</li>
        <li style={{ marginBottom: 20 }}>import in app</li>
        <li style={{ marginBottom: 20 }}>
          <p>add ~10-15 lines of code</p>
          <img src="./model-viewer-code.png" width="100%" height="auto" />
        </li>
      </ol>
    </Layout>
  );
}
