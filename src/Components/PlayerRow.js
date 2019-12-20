
import React from 'react';

function PlayerRow(props) {
    return (
        <tr className={"table_row " + props.isSuspect}>
            <td className="item">{props.id}</td>
            <td className="item">{props.name.charAt(0).toUpperCase() + props.name.substring(1)}</td>
            <td className="item">{props.level}</td>
            <td className="item">{props.score}</td>
        </tr>
    );
}

export default PlayerRow;