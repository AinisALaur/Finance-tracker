import './TextBox.css'

function TextBox({ children }){
    return(
        <div className = "textBox">
            {children}
        </div>
    );
}

export default TextBox;