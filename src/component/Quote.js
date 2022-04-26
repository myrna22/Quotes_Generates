import React, {useState} from 'react'
import axios from 'axios';

export default function Getdata() {
    const [quotes,setQuotes]=useState("");
    const [Author,setAuthor] = useState("");
    
    const getQuotes = () => {
        axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random').then(
        (res) => {
            setQuotes(res.data.data[0].quoteText);
            setAuthor(res.data.data[0].quoteAuthor);
        });
    };
    
    return (
            
        <div id='quote-box'>
            <div  id="text"><p>{quotes}</p></div>
            <div id="author"><p>{Author}</p></div>
    
            <button onClick={getQuotes} className="button">New Quote</button>
        </div>
    );
}


