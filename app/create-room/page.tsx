"use client";

// import { useRecoilState, useSetRecoilState } from "recoil";
// import { RoomDetails, Rooms } from "../atoms/atoms";

import { useState } from "react";

export default function CreateRoom() {
  const [userRoomDetails, setUserRoomDetails] = useState({ id: "", title: "" });
  const [AllRooms, setAllRoomsDetails] = useState<
    { id: string; title: string }[]
  >([]);

  console.log(userRoomDetails);

  return (
    <main className="flex flex-col min-h-48 justify-center items-center">
      <h1>Chat Room Creation</h1>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="title"
          className="mt-4 mb-2 text-black"
          onChange={(e) => {
            setUserRoomDetails({ id: e.target.value, title: e.target.value });
          }}
          value={userRoomDetails.title}
        />

        <button
          onClick={() =>
            setAllRoomsDetails((prevRooms) => [...prevRooms, userRoomDetails])
          }
        >
          Create a Room
        </button>
      </div>
    </main>
  );
}
