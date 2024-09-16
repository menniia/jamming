import Track from "../Track/Track";

const TrackList = ({ tracks, onAdd, onRemove, isRemoved }) => {
    return (
        <div className="TrackList">
            {tracks.map(track => {
                return (
                    <Track
                        key={track.id}
                        track={track}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        isRemoved={isRemoved} />
                )
            })}
        </div>
    )
}

export default TrackList;