import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-around bg-slate-500">
      <Link href="/">Home</Link>
      <Link href="/rooms">Rooms</Link>
      <Link href="create-room">Create-Room</Link>
    </nav>
  );
}
