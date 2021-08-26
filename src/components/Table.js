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
        age: 25,
        level: 9999
    },
    {
        id: 11,
        name: 'Uix',
        nick: 'WWW2',
        age: 23,
        level: 9999
    },
];

for (let i = 0; i < 100; i++) {
    mockData.push(mockData[getRandomInt(0, 5)])
}

const USERS_PER_PAGE = 50;

const Table = (props) => {

    props.setPageCount(Math.ceil(mockData.length / USERS_PER_PAGE));

    const [data, setData] = useState([]);
    const [clickedTarget, setClickedTarget] = useState(null);
    const [sortedDown, setSortedDown] = useState(false);
    const [filteredData, setFilteredData] = useState([]);


    useEffect(() => {
        setData(mockData.slice((props.currentPage - 1) * USERS_PER_PAGE, props.currentPage * USERS_PER_PAGE));
    }, [props.currentPage]);

    useEffect(() => {
        setFilteredData(data.filter(user => {
                for (const prop of Object.keys(user)) {
                    if (user[prop].toString().toLowerCase().includes(props.inputText.toString().toLowerCase())) {
                        return true;
                    }
                }
            }
        ));
    }, [props.inputText, data]);

    const onHeaderClick = (evt) => {

        const sortData = () => {
            const abbr = evt.target.abbr;
            filteredData.sort((a, b) => {
                if (!sortedDown) {
                    setSortedDown(true);
                    if (typeof a[abbr] === 'number' && typeof b[abbr] === 'number') {
                        return a[abbr] - b[abbr];

                    } else if (typeof a[abbr] === 'string' && typeof b[abbr] === 'string') {
                        if (a[abbr].toLowerCase() < b[abbr].toLowerCase())
                            return -1;
                        if (a[abbr].toLowerCase() > b[abbr].toLowerCase())
                            return 1;
                        return 0;
                    }
                } else {
                    setSortedDown(false);
                    if (typeof a[abbr] === 'number' && typeof b[abbr] === 'number') {
                        return b[abbr] - a[abbr];
                    } else if (typeof a[abbr] === 'string' && typeof b[abbr] === 'string') {
                        if (b[abbr].toLowerCase() < a[abbr].toLowerCase())
                            return -1;
                        if (b[abbr].toLowerCase() > a[abbr].toLowerCase())
                            return 1;
                        return 0;
                    }
                }
            });
        }

        if (clickedTarget !== evt.target) {
            setSortedDown(false);
            sortData();
        } else {
            sortData();
        }

        setData(filteredData);
        setClickedTarget(evt.target);
    }

    const pageArrayOfUSers = filteredData.map(user => {
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
