/* eslint-disable react/prop-types */
import { useState } from "react";

const SearchBar = ({ onSearch }) => {

    const [searchItem, setSearchItem] = useState("");

    const handleChangeEvent = event => {
        setSearchItem(event.target.value)
    }

    const search = () => {
        onSearch(searchItem)
    }

    return (
        <div className="SearchBar">
            <input type="text" name="search" id="search" value={searchItem} onChange={handleChangeEvent} placeholder="Enter a Song, Album or Artist" />
            <button className="SearchButton" onClick={search}>Search</button>
        </div>
    )
}

export default SearchBar;