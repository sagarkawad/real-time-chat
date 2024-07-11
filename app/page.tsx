import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-48">
      <h1>Welcome to room-chat-app</h1>
      <div className="flex justify-around items-around">
        <Link href="/rooms" className="mr-4">
          Show chat rooms
        </Link>
        <Link href="/create-room">Create chat room</Link>
      </div>
      {/* <Image src="/vercel.svg" alt="vercel logo" width={72} height={16} /> */}
    </main>
  );
}
