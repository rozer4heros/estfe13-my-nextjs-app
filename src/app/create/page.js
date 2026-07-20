"use client";

import { useRouter } from "next/navigation";

import styles from "./page.module.css";

export default function Create() {
  const router = useRouter();

  return (
    <>
      <h2 className={styles.title}>Create Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value;
          const message = e.target.message.value;
          const options = {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ title, message }),
          };
          fetch("http://localhost:9999/topics", options)
            .then((response) => response.json())
            .then((result) => {
              router.push(`/read/${result.id}`);
              router.refresh();
            });
        }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" name="title" className="form-control" id="title" placeholder="글 제목을 입력해주세요" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            placeholder="글 내용을 작성해주세요"
            className="form-control"
            id="message"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          입력
        </button>
      </form>
    </>
  );
}
