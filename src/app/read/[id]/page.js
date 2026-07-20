export default async function Read(props) {
  const { id } = await props.params;
  const response = await fetch(`http://localhost:9999/topics/${id}`);
  const data = await response.json(); // { id, title, message }

  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.message}</p>
    </>
  );
}
