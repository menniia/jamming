import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import { useCallback, useState } from "react";
import Spotify from "../../util/Spotify";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const removeTrack = (track) => {
    const updatedTrack = playlistTracks.filter(
      (myTracks) => myTracks.id !== track.id
    );
    setPlaylistTracks(updatedTrack);
  };

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
        return;
      }

      setPlaylistTracks((prevPlaylistTracks) => [...prevPlaylistTracks, track]);
    },
    [playlistTracks]
  );


  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = useCallback(() => {
    const trackURIs = playlistTracks.map((tracks) => tracks.uri);
    console.log(trackURIs);
  }, [playlistTracks]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, [])

  return (
    <div>
      <h1>
        Ja<span className="highlight">mm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
