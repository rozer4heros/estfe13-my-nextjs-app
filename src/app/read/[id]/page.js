export default async function Read(props) {
  const { id } = await props.params;

  console.log("Read 페이지 작동");

  return (
    <>
      <h2>Read</h2>
      <p>parameter:{id}</p>
    </>
  );
}
