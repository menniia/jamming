import Track from "../Track/Track";

const TrackList = ({ tracks, onAdd }) => {
    return (
        <div className="TrackList">
            {tracks.map(track => {
                return (
                    <Track
                        key={track.id}
                        track={track}
                        onAdd={onAdd} />
                )
            })}
        </div>
    )
}

export default TrackList;