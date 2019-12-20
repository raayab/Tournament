
import React from 'react'
import PlayerRow from './PlayerRow';
import useSuspects from '../Hooks/useSuspects';
import FilteredColumn from './FilteredColumn';

const distinctValuesForLevel = ["all","rookie","pro","amateur"];

function TournamentTableResults(props) {
    const suspects = useSuspects();
    let players = props.playersList.map(player=>(<PlayerRow key = {player.id}
        id = {player.id}
        name = {player.name}
        level = {player.level}
        score = {player.score}
        isSuspect = {suspects.includes(player.id)?"suspect":""}
        />));

    const getDistinctValuesForColumn = (col) => {
        if (col === "level")
            return getDistinctValuesForLevel();
    };

    const getDistinctValuesForLevel = () => {
        return distinctValuesForLevel;
    };
    
    const onLevelFilterChange = (filter) => {
        filter==="all" ?
        props.onLevelFilterChange('')
        : props.onLevelFilterChange(filter);
    };

    return (
        <div className="table_container">
            <table className="users_list">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th> 
                    <th><FilteredColumn columnName="level" 
                                        allFilters = {getDistinctValuesForColumn("level")}
                                        onLevelFilterChange = {onLevelFilterChange}
                                        /> </th> 
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {players}
            </tbody>
            </table>
        </div>
    );
}

export default TournamentTableResults;