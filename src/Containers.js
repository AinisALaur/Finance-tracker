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

function AddMenu(){
    return(
        <div className = "add-menu">

        </div>
    );
}

export { Container, TextBox, DataContainer, AddMenu };