"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import React from "react";
import Image from "next/image";
import PlayButton from "./PlayButton";

interface SongItemProps {
  song: Song;
  onClick: (id: string) => void;
}
const SongItem: React.FC<SongItemProps> = ({ song, onClick }) => {
  const imagePath = useLoadImage(song);
  console.log("---h", imagePath);

  return (
    <div
      onClick={() => onClick(song.id)}
      className="relative group flex flex-col items-center
      justify-center rounded-md overflow-hidden gap-x-4 
    bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10
      transition p-3"
    >
      <div className="relative h-full rounded-md overflow-hidden aspect-square w-full">
        <Image
          className="object-cover"
          src={imagePath || "/images/liked.png"}
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-">
        <p>
          {song.title}
        </p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">
          By {song.author}
        </p>
      </div>
      <div className="absolute bottom-24 right-5 ">
        <PlayButton />
      </div>
    </div>
  );
};

export default SongItem;
