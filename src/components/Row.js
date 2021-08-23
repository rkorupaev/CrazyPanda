import styles from "../styles/Table.module.scss";
import Column from "./Column";

const Row = (props) => {
    return (
            <tr>
                {props.data.map(item => <Column data={item}/>)}
            </tr>
    )
}

export default Row;
