import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import { useCallback, useState } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const removeTrack = useCallback(
    (track) => {
      setPlaylistTracks(prevPlaylistTracks => {
        prevPlaylistTracks.filter(myTracks => myTracks.id !== track.id)
      })
    }, []
  )

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some(savedTrack => {
        savedTrack.id === track.id
      }))
        return;

      setPlaylistTracks(prevPlaylistTracks => [...prevPlaylistTracks, track])
    }, [playlistTracks])

  return (
    <div>
      <h1>Ja<span className='highlight'>mm</span>ing</h1>
      <div className='App'>
        <SearchBar />
        <div className='App-playlist'>
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
        </div>
      </div>
    </div>
  )
}

export default App
