import styles from '../styles/Filter.module.scss';

const Filter = (props) => {
    return (
        <>
            <input type="text" className={styles.filter__input} onInput={(evt) => props.setInputText(evt.target.value)}/>
        </>
    )
}

export default Filter;
