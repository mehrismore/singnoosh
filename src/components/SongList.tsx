import React from "react";
import { Song } from "../models/Songs";

interface SongListProps {
  songs: Song[];
  onDelete: (id: string) => void;
  onEdit: (song: Song) => void;
}

const SongList: React.FC<SongListProps> = ({ songs, onDelete, onEdit }) => {
  return (
    <div>
      <h2>My Song Inventory</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <p>
              <strong>Magic's name:</strong> {song.title}
            </p>
            <p>
              <strong>Magic by:</strong> {song.artist}
            </p>
            {/* <p>
              <strong>Album:</strong> {song.album}
            </p> */}
            <p>
              <strong>Magic's Genre:</strong> {song.genre}
            </p>
            <p>
              <strong>Spotify Link to the magic:</strong>
              <a
                href={song.spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen on Spotify
              </a>
            </p>
            <p>
              <strong>Mastered the magic?</strong>
              {song.mastered ? "Yes" : "No"}
            </p>
            <button onClick={() => onEdit(song)}>Edit</button>
            <button onClick={() => onDelete(song.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
