import './Containers.css'
import closeIcon from './close.png';

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

function AddMenu({ setBlurOn, setAddMenuOn }){
    return(
        <div className = "add-menu">

            <div className = "add-menu-header">
                <div className = "add-menu-tittle">Add new instance</div>
                <div className = "close-add-menu"><img src={closeIcon} alt="Close" className = "closeButton" 
                    onClick={() => {setBlurOn(prev => !prev); setAddMenuOn(prev => !prev)}} 
                    width = "10px" height = "10px"/></div>
            </div>

            <div className = "add-menu-body">
                <div className = "add-menu-1-section">
                    <div className = "add-menu-1-section-text">Select instance section</div>
                    <div className = "add-menu-1-section-form">
                        <select>
                            <option value="utilities">Utilities</option>
                            <option value="food">Food</option>
                        </select>
                    </div>
                </div>
                <div className = "add-menu-2-section">
                    <div className = "add-menu-2-section-text">Select a type/store</div>
                    <div className = "add-menu-2-section-form">
                        <select>
                            <option value="lidl">Lidl</option>
                            <option value="maxima">Maxima</option>
                            <option value="iki">IKI</option>
                            <option value="kita">Kita</option>
                        </select>
                    </div>
                </div>
                <div className = "add-menu-3-section">
                    <div className = "add-menu-3-section-text">Enter spent sum</div>
                    <div className = "add-menu-3-section-form"><input type = "text"></input></div>
                </div>
                <div className = "add-menu-4-section">
                    <div className = "add-menu-4-section-text">Date of spending</div>
                    <div className = "add-menu-4-section-form"><input type="date"></input></div>
                </div>
            </div>
        </div>
    );
}

export { Container, TextBox, DataContainer, AddMenu };