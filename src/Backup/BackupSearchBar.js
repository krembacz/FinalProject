import React, { useState } from 'react'
import '../StyleSheets/SearchBarStyle.css';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
    const [search, setSearch] = useState("");

    const handleSearchSubmit = () => {
    }

    const clearSearch = () => {
        setSearch("");
    }

    return (
        <div>
            <form className="d-flex search">
                <input
                    type="search"
                    placeholder="Search by restriction or recipe"
                    className="searchInput"
                    aria-label="Search"
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                />
                <button className="submit"> <FaSearch /> </button>
                <div className="dataResult">
                    {/*                 
                    {recipeData.map((recipe, key) => {
                        return <div> {recipe.name} </div>
                    })} */}
                </div>
            </form>
        </div>
    )
}
