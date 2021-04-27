import { Layout } from "../components/layout";

export default function SlideLobsterModel() {
  if (typeof window !== "undefined") {
    require("@google/model-viewer");
    return (
      <Layout>
        <model-viewer
          src={"./Lobster.gltf"}
          // src={"./wheel-cap.glb"}
          // ios-src={../Link/To/Model.usdz}
          alt="model name"
          ar
          loading="lazy"
          camera-controls
          style={{
            width: "100%",
            height: "100%",
          }}
          // poster={"./astro-poster.png"}
          autoplay
        ></model-viewer>
      </Layout>
    );
  }
  return null;
}
