import { RecoilState, atom } from "recoil";

export const RoomDetails = atom({
  key: "RoomDetails",
  default: { id: "", title: "" },
});

interface UserRooms {
  id: string;
  title: string;
}

export const Rooms = atom({
  key: "Rooms",
  default: [],
});
