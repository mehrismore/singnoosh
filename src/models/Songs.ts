export interface Song {
  id: number; // Unique identifier for each song (can use UUID or database ID)
  title: string; // Name of the song
  artist: string; // Artist's name
  spotifyLink: string; // Link to the song on Spotify or other platforms if not available
  // album: string;    // Album the song belongs to (optional)
  genre: string; // Genre of the song
  lyrics: string; // part of the lyrics
  mastered: boolean; // Whether the user has mastered the song
  // createdAt: Date; // Date the song was added (optional, but useful for sorting)
  // updatedAt?: Date; // Date of last update (optional)
}
