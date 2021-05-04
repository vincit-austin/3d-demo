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
      <div
        style={{
          position: "fixed",
          bottom: 20,
          left: 20,
          width: 50,
          height: "auto",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 114 28"
          width="100%"
          height="100%"
        >
          <title>Vincit Logo Text Icon</title>
          <path
            d="M74.52 11.286c0 .458.361.828.805.827a.816.816 0 00.8-.83.816.816 0 00-.805-.827.816.816 0 00-.8.83zm4.442-.522a.09.09 0 00-.073.126 6.836 6.836 0 01.387 3.95.095.095 0 00.107.112c.579-.08.95-.17 1.191-.26 2.16-.806 2.24-3.083 2.186-3.96a.34.34 0 00-.376-.32l-3.422.352zM72.946 20.2c-3.579.01-6.488-2.978-6.498-6.674-.01-3.695 2.884-6.698 6.463-6.708 1.995-.005 3.78.922 4.972 2.382l4.552-4.263C80.097 2.317 76.707.67 72.937.682c-7.032.019-12.719 5.786-12.7 12.882.019 7.096 5.735 12.832 12.767 12.813 4.656-.012 8.72-2.545 10.93-6.314l-5.353-3.287c-1.107 2.036-3.212 3.417-5.635 3.424zm-21.329-6.614L37.608.776l.066 25.356 6.218-.017-.035-11.078 14.007 12.4-.068-26.375-6.207.016.028 12.508zM86.546.985L86.612 26l6.21-.017L92.758.968l-6.211.017zM13.23 13.719L6.987 1.197 0 1.216l13.29 25.337L26.398 1.145l-6.987.02-6.179 12.554zM114 7.048L113.984.91 95.351.96l.016 6.137 6.211-.017.05 18.879 6.21-.017-.049-18.878L114 7.048zM28.015 26.157l6.211-.017-.064-25.015-6.212.016.065 25.016z"
            fill="#FFF"
            fill-rule="evenodd"
          ></path>
        </svg>
      </div>
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
