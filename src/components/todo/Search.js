import { useState } from "react";
import "./search.css";

function Search({onAdd}) {

    const [text, setText] = useState("");

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            onAdd(text);
            setText("");
        }}>
            <input className="check" type="text" value={text} onChange={(e) => {
                setText(e.target.value);
            }} />
            <button className="but">Send</button>
        </form>
    )
}

export default Search;