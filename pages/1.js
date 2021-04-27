import { Layout } from "../components/layout";

export default function SlideOne() {
  return (
    <Layout maxW>
      <h1 style={{ marginBottom: 0 }}>3D file creation</h1>
      <h3 style={{ marginBottom: 40 }}>
        spoiler/tl;dr: dev work - not much, model creation/scanning: hmmnnns
      </h3>
      <ul>
        <li style={{ marginBottom: 20 }}>
          <a href="https://modelviewer.dev/" target="_blank" rel="noreferrer">
            https://modelviewer.dev/
          </a>
        </li>
        <li style={{ marginBottom: 20 }}>
          <a
            href="https://github.com/WICG/focus-visible"
            target="_blank"
            rel="noreferrer"
          >
            polyfill: https://github.com/WICG/focus-visible
          </a>
        </li>
        <li style={{ marginBottom: 20 }}>
          <a
            href="https://github.com/google/model-viewer/projects/1"
            target="_blank"
            rel="noreferrer"
          >
            roadmap: https://github.com/google/model-viewer/projects/1{" "}
          </a>
        </li>
      </ul>
    </Layout>
  );
}
