import {useState, useEffect} from 'react';
import './counter.css';

function Shoes(props) {
    const [count, setCount] = useState(props.startingCount);

    useEffect(() => {
        document.title = `You Clicked Shoes ${count} times`
    })

    return (
        <div className="container">
            <h1> Shoes: </h1>
            <h1> {count} </h1>
            <button onClick={() => setCount(count + 1)}><h1> + </h1></button>
            <button onClick={() => setCount(count - 1)}><h1> - </h1></button>
            <button onClick={() => setCount(props.startingCount)}><h1> Reset </h1></button>
        </div>
    )
}
export default Shoes;