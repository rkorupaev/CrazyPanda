import React, {useEffect, useState} from 'react';
import styles from '../styles/Table.module.scss';

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const tableHeaders = [
    {
        header: 'ID',
        abbr: 'id'
    },
    {
        header: 'Name',
        abbr: 'name'
    },
    {
        header: 'Nick',
        abbr: 'nick'
    },
    {
        header: 'Age',
        abbr: 'age'
    },
    {
        header: 'Lvl',
        abbr: 'level'
    },
]

let mockData = [
    {
        id: 1,
        name: 'Roman',
        nick: 'Susanin',
        age: 32,
        level: 665
    },
    {
        id: 2,
        name: 'Ann',
        nick: 'Killaah',
        age: 17,
        level: 234
    },
    {
        id: 5,
        name: 'John',
        nick: 'The Gun',
        age: 67,
        level: 1257
    },
    {
        id: 9,
        name: 'Uin',
        nick: 'WWW',
        age: 23,
        level: 9999
    },
];

for (let i = 0; i < 100; i++) {
    mockData.push(mockData[getRandomInt(0, 4)])
}

const USERS_PER_PAGE = 50;

const Table = (props) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(mockData.slice((props.currentPage - 1) * USERS_PER_PAGE, props.currentPage * USERS_PER_PAGE));
    }, [props.currentPage]);

    props.setPageCount(Math.ceil(mockData.length / USERS_PER_PAGE));
    const pageMockData = mockData.slice((props.currentPage - 1) * USERS_PER_PAGE, props.currentPage * USERS_PER_PAGE);

    const onHeaderClick = (evt) => {
        const abbr = evt.target.abbr;
        pageMockData.sort((a, b) => {
            if (typeof a.[abbr] === 'number' && typeof b.[abbr] === 'number') {
                return a.[abbr] - b.[abbr];
            } else if (typeof a.[abbr] === 'string' && typeof b.[abbr] === 'string') {
                if (a.[abbr].toLowerCase() < b.[abbr].toLowerCase())
                    return -1;
                if (a.[abbr].toLowerCase() > b.[abbr].toLowerCase())
                    return 1;
                return 0;
            }
        });
        setData(pageMockData);
    }

    const pageArrayOfUSers = data.map(user => {
        return (
            <tr>
                <td className={styles.table_column}>{user.id}</td>
                <td className={styles.table_column}>{user.name}</td>
                <td className={styles.table_column}>{user.nick}</td>
                <td className={styles.table_column}>{user.age}</td>
                <td className={styles.table_column}>{user.level}</td>
            </tr>
        )
    });

    return (
        <table className={styles.table}>
            <thead>
            <tr>
                {tableHeaders.map(header => <th className={styles.table_column}
                                                onClick={(evt) => onHeaderClick(evt)}
                                                abbr={header.abbr}>{header.header}</th>)}
            </tr>
            </thead>
            <tbody>
            {pageArrayOfUSers}
            </tbody>
        </table>
    )
}

export default Table;
