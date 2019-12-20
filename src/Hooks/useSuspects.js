import {useEffect, useState } from 'react';
const SUSPECTS_URL = 'http://localhost:20000/api/v1/players/suspects';

function useSuspects() {
    const [suspects, setSuspects] = useState([]);

    useEffect(() => {
        fetch(SUSPECTS_URL)
        .then(res=>res.json())
        .then(res=>setSuspects(res))
        .catch(e=>console.log("Get suspects failed"));
    },[]);

    return suspects;
}

export default useSuspects;

    
