export default function CreateRoom() {
  return (
    <main className="flex flex-col min-h-48 justify-center items-center">
      <h1>Chat Room Creation</h1>
      <div className="flex flex-col">
        <input type="text" placeholder="title" className="mt-4 mb-2" />
        <button>Create a Room</button>
      </div>
    </main>
  );
}
