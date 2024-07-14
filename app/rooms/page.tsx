import getPosts from "@/server/actions/get-posts";

export default async function Rooms() {
  const response = await getPosts();
  console.log(response);
  return (
    <main className="flex flex-col justify-center items-center min-h-48">
      <h1>Rooms</h1>
      <div>
        {response.success?.map((el) => {
          return <h2 key={el.id}>{el.title}</h2>;
        })}
      </div>
    </main>
  );
}
