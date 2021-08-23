import React from 'react';
import styles from '../styles/Table.module.scss';
import Row from "./Row";

const mockData = [
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
]


const Table = (props) => {
    const tableRowsArray = mockData.map(user => {
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
                <th className={styles.table_column}>ID</th>
                <th className={styles.table_column}>Name</th>
                <th className={styles.table_column}>Nick Name</th>
                <th className={styles.table_column}>Age</th>
                <th className={styles.table_column}>Lvl</th>
            </tr>
            </thead>
            <tbody>
            {tableRowsArray}
            </tbody>
        </table>
    )
}

export default Table;
