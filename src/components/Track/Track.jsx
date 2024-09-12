import { useCallback } from "react"

const Track = ({ track, isRemoved, onAdd }) => {

    const renderAction = () => {
        if (isRemoved) {
            return (
                <button className="Track-action">-</button>
            )
        } return (
            <button className="Track-action">+</button>
        )
    }

    const addTrack = useCallback((track) => {
        onAdd(track)
    }, [onAdd, track])


    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            {renderAction()}
        </div>
    )
}

export default Track;