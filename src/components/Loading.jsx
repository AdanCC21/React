import '../css/index.css'
import { useEffect, useState } from "react";

const gifList = ['cat-yes', 'writing', 'hi', 'actually']
const messageList = ['Incoming', 'Next page','¿Do you like my page?','In fact...']

export function LoadingGif({ bandera }) {
    let [currentGif, setCurrentGif] = useState('cat-yes');
    let [message, setMessage] = useState(0);

    useEffect(() => {
        let random = Math.floor(Math.random() * gifList.length);
        let gif = gifList[random];
        setMessage(random);
        setCurrentGif(gif);
    }, [bandera])

    return (
        <div className="loading">
            <img src={`src/assets/gif/${currentGif}.gif`} alt="Gif"></img>
            <h3>{messageList[message]}</h3>
        </div>
    );
}