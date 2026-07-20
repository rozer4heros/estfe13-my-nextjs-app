"use client";

import { useRouter } from "next/navigation";

export default function Create() {
  console.log("Create 페이지 작동");
  const router = useRouter();

  return (
    <>
      <h3 style={styles.title}>Create Form</h3>
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
          <textarea name="message" className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          입력
        </button>
      </form>
    </>
  );
}

const styles = {
  title: {
    color: "green",
  },
};
