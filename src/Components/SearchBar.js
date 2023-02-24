import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import '../StyleSheets/SearchBarStyle.css';

export default function SearchBar() {
    //useState for input that will be received 
    const [input, setInput] = useState("");

    //useNavigate from react router dom to redirect upon clicking search icon
    const navigate = useNavigate();

    //takes event as parameter, prevents page reload, navigates to recipes page
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        navigate("/searched" + "/" + input);
    };

    return (
        <div>
            <form className="d-flex search" onSubmit={handleSearchSubmit}>
                <input
                    type="search"
                    placeholder="Search by restriction or recipe"
                    className="searchInput"
                    onChange={(e) => setInput(e.target.value.toLowerCase())}
                    value={input}
                />
                <button className="submit"> <FaSearch /> </button>
                <div className="dataResult">
                    <br />
                </div>
            </form>
        </div>
    )
}
