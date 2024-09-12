import TrackList from "../TrackList/TrackList"

const Playlist = ({ playlistTracks }) => {
    return (
        <div className="Playlist">
            <input type="text" defaultValue={"New Playlist"} />
            <TrackList tracks={playlistTracks} />
            <button className="Playlist-save">Save to Spotify</button>
        </div>
    )
}

export default Playlist