import { useState } from "react";

const SearchBar = () => {

    const [searchItem, setSearchItem] = useState("");

    const handleChangeEvent = event => {
        setSearchItem(event.target.value)
    }

    const handleSearch = () => {
        alert("searching");
        setSearchItem("")
    }

    return (
        <div className="SearchBar">
            <input type="text" name="search" id="search" value={searchItem} onChange={handleChangeEvent} placeholder="Enter a Song, Album or Artist" />
            <button className="SearchButton" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar;