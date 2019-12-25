
import {useEffect, useState } from 'react';

const PLAYERS_URL = `/api/v1/players?`;

function useTournamentResults(levelFilter,freeSearchfilter,pageNumber,playersPerPage) {
    const [total,setTotal] = useState(1);
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        let start = pageNumber===1 ? 0 : (pageNumber-1) * playersPerPage;

        fetch(PLAYERS_URL+`start=${start}&n=${playersPerPage}&level=${levelFilter}&search=${freeSearchfilter.toLowerCase()}`)
        .then(res => { setTotal(res.headers.get('x-total')); return res.json()})
        .then(res=>setPlayers(res))
        .catch(e=>console.log("Get players failed"));
    },[levelFilter,freeSearchfilter,pageNumber,playersPerPage] );

    return {players, total};
}

export default useTournamentResults;