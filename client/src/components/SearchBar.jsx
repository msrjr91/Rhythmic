import React from "react";
import { useState } from "react";


const SearchBar = () => {
    const [query, setQuery] = useState("")



    return (
        <div className="searchbar">
            <input type="text" onChange={e => setQuery(e.target.value)} />

            <button type='button' className="searchbtn"
            // onClick={searchMeal}
            > Search </button>



        </div>
    

    )
}

export default SearchBar