/* eslint-disable react/prop-types */
import TrackList from "../TrackList/Tracklist";

const SearchResults = ({ searchResults, onAdd }) => {
    return (
        <div className="SearchResults">
            <h2>Search Results</h2>
            <TrackList tracks={searchResults} onAdd={onAdd} isRemoved={false} />
        </div>
    )
}

export default SearchResults;
