import Link from "next/link";

export function Layout({ children }) {
  return (
    <div
      style={{
        backgroundColor: "rgb(224,82,48)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100%",
        minHeight: "100vh",
        paddingTop: "2rem",
        paddingBottom: "1rem",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {slides.map((slide, index) => (
          <Link href={(index + 1).toString()}>
            <a
              style={{
                fontWeight: "bold",
                padding: "1rem",
              }}
            >
              {slide}
            </a>
          </Link>
        ))}
      </nav>
      <main
        style={{
          maxWidth: 968,
          width: "100%",
          margin: "0 auto",
          height: "80vh",
        }}
      >
        {children}
      </main>
    </div>
  );
}

const slides = [
  "overview",
  "steps",
  "3d-model",
  //
  "browser support",
  "perf",
  "size",
  //
  "outsource",
  "inhouse",
  "lobster",
  //
  "how",
];
