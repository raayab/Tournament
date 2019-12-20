
import React, { useState } from 'react';
import Pagination from './Pagination';
import SearchInput from './SearchInput';
import TournamentTableResults from './TournamentTableResults';
import useTournamentResults from '../Hooks/useTournamentResults';
import TournamentAppTitle from './TournamentAppTitle';

function Tournament() {
    const [levelFilter,setLevelFilter] = useState('');
    const [freeSearchfilter,setFreeSearchfilter] = useState('');
    const [pageNumber,setPageNumber] = useState(1);
    const playersPerPage = 10;
    const { players, total } = useTournamentResults(levelFilter,freeSearchfilter,pageNumber,playersPerPage);

    const onLevelFilterChange = (filter) => {
        setLevelFilter(filter);
        setPageNumber(1);
    };
    const onFreeFilterChange = (filter) => {
        setFreeSearchfilter(filter);
        setPageNumber(1);
    };
    const onPageNumberChange = (page) => {
        setPageNumber(page);
    };
      
    return (
        <div>
            <TournamentAppTitle />
            <SearchInput freeSearchfilter={freeSearchfilter}
                        onFreeFilterChange = {onFreeFilterChange}/>
            <TournamentTableResults playersList= {players}
                                    onLevelFilterChange = {onLevelFilterChange}/>
            <Pagination pageNumber={pageNumber}
                        onPageNumberChange={onPageNumberChange}
                        total = {total}
                        playersPerPage = {playersPerPage}
                        />
        </div>
    );
}
export default Tournament;