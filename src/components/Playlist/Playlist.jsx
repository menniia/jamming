/* eslint-disable react/prop-types */
import { useCallback } from "react"
import TrackList from "../TrackList/Tracklist"


const Playlist = ({ playlistTracks, onRemove, onNameChange, onSave }) => {

    const handleNameChange = useCallback((event) => {
        onNameChange(event.target.value)
    }, [onNameChange])


    return (
        <div className="Playlist">
            <input
                type="text"
                defaultValue={"New Playlist"}
                onChange={handleNameChange} />
            <TrackList
                tracks={playlistTracks}
                onRemove={onRemove}
                isRemoved={true} />
            <button className="Playlist-save" onClick={onSave}>Save to Spotify</button>
        </div>
    )
}

export default Playlist