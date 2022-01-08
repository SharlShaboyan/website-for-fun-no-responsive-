import "./footer.css";

function Footer({todos, onClear}) {

    let compSize = todos.filter(el => el.isCompleted);

    return (
        <div className="footer">
            <p className="p">{compSize.length}/{todos.length} completed</p>
            <button className="p1" onClick={onClear}>Clear Completed</button>
        </div>
    )
}

export default Footer;