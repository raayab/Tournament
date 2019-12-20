
import React from 'react'; 

function Pagination(props) { 
    const  maxPages = Math.ceil(props.total / props.playersPerPage);

    const changePage=() =>{
        let pages = [];
        let start = ((props.pageNumber - 2) < 1) ? 1 : (props.pageNumber - 2);
        let end =  ((props.pageNumber + 2) > maxPages) ? maxPages : (props.pageNumber + 2);

        if (props.pageNumber > 1) {
            pages.push(<button key="left" onClick={()=>props.onPageNumberChange(props.pageNumber - 1)}>&laquo;</button>);
        }
        if (start > 1) {
            pages.push(<button key="1" onClick={()=>props.onPageNumberChange(1)}>1</button>);
        }
        if (start > 2) {
            pages.push(<button key="dot1">...</button>);
        }

        for (let i = start; i <= end; i++) {
            let classes = i===props.pageNumber?'active' : ''; 
            pages.push(<button key={i} onClick={()=>props.onPageNumberChange(i)} className={classes}>{i}</button>);
        }

        if (end < maxPages - 1) {
            pages.push(<button key="dot2">...</button>);
        }
        if (end < maxPages) {
            pages.push(<button key={maxPages} onClick={()=>props.onPageNumberChange(maxPages)}>{maxPages}</button>);
        }
        if (props.pageNumber < maxPages) {
            pages.push(<button key="right" onClick={()=>props.onPageNumberChange(props.pageNumber + 1)}>&raquo;</button>);
        }

        return pages;
    };

    return (
        <div className="pagination">
            {changePage()}
        </div>
    );
}
export default Pagination;