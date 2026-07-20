import Link from "next/link";
import Script from "next/script";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "웹 언어",
  description: "웹페이지 구현하기",
};

export default function RootLayout({ children }) {
  console.log("공통 레이아웃 작동");

  return (
    <html
      lang="ko"
      data-scroll-behavior="smooth"
      // className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid d-flex justify-content-between">
            <h1>
              <Link className="navbar-brand" href="/">
                Home
              </Link>
            </h1>
            <ul className="nav d-flex">
              <li className="nav-item">
                <Link className="nav-link" href="/read/1">
                  HTML
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/read/2">
                  CSS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/read/3">
                  JavaScript
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          {children}

          <div className="d-flex gap-1">
            <Link className="btn btn-primary" href="/create">
              Create
            </Link>
            <Link className="btn btn-secondary" href="/update">
              Update
            </Link>
            <Link className="btn btn-danger" href="/delete">
              Delete
            </Link>
          </div>
        </main>
        <Script src="/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
