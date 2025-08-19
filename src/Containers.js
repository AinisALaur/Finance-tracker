import './Containers.css'

function DataContainer({ className }){
    return(
        <div className = {`data-container ${className || ""}`}>

        </div>
    );
}

function TextBox({ children }){
    return(
        <div className = "textBox">
            {children}
        </div>
    );
}

function Container({ children, className }) {
  return (
    <div className={`my-container ${className || ""}`}>
      {children}
    </div>
  );
}

export { Container, TextBox, DataContainer };