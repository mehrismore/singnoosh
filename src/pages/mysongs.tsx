import SongList from "../components/SongList";
import { Song } from "../models/Songs"; // Import the Song interface
import fs from "fs";
import path from "path";

const onEdit = () => {};

const onDelete = () => {};

const filePath = path.join(__dirname, "../data/songs.json");

// Read the songs from the JSON file and ensure the type is Song[]
export const getSongs = (): Song[] => {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const songs: Song[] = JSON.parse(data); // Type assertion
    return songs;
  } catch (err) {
    console.error("Error reading songs file", err);
    return [];
  }
};

function MySongs() {
  return (
    <div>
      <header className="App-header">My Songs!!!!</header>
      <SongList songs={songs} onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

export default MySongs;
