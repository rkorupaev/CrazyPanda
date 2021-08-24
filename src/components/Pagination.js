import React from 'react';
import styles from '../styles/Pagination.module.scss';

const Pagination = (props) => {
    const setPreviousPage = () => {
        if (props.currentPage > 1) {
            props.setCurrentPage(props.currentPage - 1);
        }
    }

    const setNextPage = () => {
        if (props.currentPage < props.pageCount) {
            props.setCurrentPage(props.currentPage + 1);
        }
    }

    let pagesArray = [];
    for (let i = 0; i < props.pageCount; i++) {
        const page = i + 1;
        pagesArray.push(<span className={styles.pagination_button} onClick={() => props.setCurrentPage(page)}>{page}</span>)
    }

    return (
        <div className={styles.pagination}>
            <span className={styles.pagination_button} onClick={setPreviousPage}>-</span>
            {pagesArray}
            <span className={styles.pagination_button} onClick={setNextPage}>+</span>
        </div>
    )
}

export default Pagination;
