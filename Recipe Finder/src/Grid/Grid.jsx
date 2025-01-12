import Styles from './Grid.module.css'
import Card from "../Card/Card";

function Grid(props){
    const cards = [];
  
    for (let i = 0; i < props.index; i++) {
        cards.push(<Card key={i}/>);
    }
    return <div className={Styles.grid}>{cards}</div>;
}
export default Grid