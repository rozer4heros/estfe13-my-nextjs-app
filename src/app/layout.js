import Link from "next/link";
import Script from "next/script";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Controls from "./Controls";

export const metadata = {
  title: "웹 언어",
  description: "웹페이지 구현하기",
};

export default async function RootLayout({ children }) {
  console.log("공통 레이아웃 작동");
  const response = await fetch("http://localhost:9999/topics", { next: { revalidate: 0 } });
  const topics = await response.json();
  console.log(topics); // { id, title, message }

  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <body>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid d-flex justify-content-between">
            <h1>
              <Link className="navbar-brand" href="/">
                Home
              </Link>
            </h1>
            <ul className="nav d-flex">
              {topics.map((t) => (
                <li key={t.id} className="nav-item">
                  <Link className="nav-link" href={`/read/${t.id}`}>
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <main>
          {children}
          <hr />
          <Controls />
        </main>
        <Script src="/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
