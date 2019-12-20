
import React, { useState } from 'react';

function FilteredColumn(props) {

    const [columnName,setColumnName] = useState(props.columnName);
    const changeFilter = (filter)=> {
        setColumnName(filter);
        props.onLevelFilterChange(filter);
    };
    const filters =  props.allFilters.map(filter=>
            <button key={filter} onClick={()=>changeFilter(filter)}>{filter}</button>
            );

    return (
        <div className="dropdown">
            <div className="dropbtn">
                {(columnName==="level"? "Level: all" : "Level: " + columnName) + " "}
                <i className="down"></i>
            </div>
            <div className="dropdown-content">
                <div className="container">
                    {filters}
                </div>
            </div>
        </div> 
    )
}
export default FilteredColumn;