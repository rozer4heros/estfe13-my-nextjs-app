"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import styles from "../../page.module.css";

export default function Update() {
  const router = useRouter();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setTitle(result.title);
        setMessage(result.message);
      });
  }, [id]);

  return (
    <>
      <h2 className={styles.title}>Update Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const options = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              message,
            }),
          };
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`, options)
            .then((response) => response.json())
            .then((result) => {
              router.push(`/read/${id}`);
              router.refresh();
            });
        }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="글 제목을 입력해주세요"
            className="form-control"
            id="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            value={message}
            placeholder="글 내용을 작성해주세요"
            className="form-control"
            id="message"
            rows="3"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          입력
        </button>
      </form>
    </>
  );
}
