import { Layout } from "../components/layout";

export default function OutsourceCreatingModels() {
  return (
    <Layout>
      <h1 style={{ marginBottom: 30 }}>creating models - outsource</h1>
      <h3 style={{ marginBottom: 20 }}>outsource</h3>
      <ul>
        <li style={{ marginBottom: 20 }}>
          <a href="http://www.la3-d.com/" target="_blank" rel="noreferrer">
            LA3-D
          </a>
        </li>
        <li style={{ marginBottom: 20 }}>
          <a href="http://www.usetangent.com/" target="_blank" rel="noreferrer">
            Irvine: http://www.usetangent.com/ (less-than stellar website 👀)
          </a>
        </li>
        <li style={{ marginBottom: 20 }}>
          <a
            href="https://adaptivedesigns.com/"
            target="_blank"
            rel="noreferrer"
          >
            OC: https://adaptivedesigns.com/
          </a>
        </li>
        <li>...others</li>
      </ul>
    </Layout>
  );
}
