import React from 'react';

function SearchInput(props) {
    return (
        <input className="search_input"
                type="text" placeholder="Search..." value={props.freeSearchfilter} 
                onChange={(e)=>props.onFreeFilterChange(e.target.value)}>
        </input>);
}
export default SearchInput;