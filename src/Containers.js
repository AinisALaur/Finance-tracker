import './Containers.css'
import closeIcon from './close.png';
import { useState } from "react";

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
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const handleChangeCategory = (e) => {
        setCategory(e.target.value);
        setSubCategory("");
        setAmount("");
        setDate("");
    };

    const handleChangeSubCategory = (e) => {
        setSubCategory(e.target.value);
        setAmount("");
        setDate("");
    };

    const handleChangeAmount = (e) => {
        setAmount(e.target.value);
        setDate("");
    };

    const handleChangeDate = (e) =>{
        setDate(e.target.value);
    };


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
                        <select value={category} onChange={handleChangeCategory}>
                            <option value="">--Not selected--</option>
                            <option value="utilities">Utilities</option>
                            <option value="food">Food</option>
                        </select>
                    </div>
                </div>

                {category ===  "food" && <div className = "add-menu-2-section">
                    <div className = "add-menu-2-section-text">Select a grocery store</div>
                    <div className = "add-menu-2-section-form">
                        <select value={subCategory} onChange={handleChangeSubCategory}>
                            <option value="">--Not selected--</option>
                            <option value="lidl">Lidl</option>
                            <option value="maxima">Maxima</option>
                            <option value="iki">IKI</option>
                            <option value="kita">Kita</option>
                        </select>
                    </div>
                </div>
                }

                {category ===  "utilities" && <div className = "add-menu-2-section">
                    <div className = "add-menu-2-section-text">Select a type of utility</div>
                    <div className = "add-menu-2-section-form">
                        <select value={subCategory} onChange={handleChangeSubCategory}>
                            <option value="">--Not selected--</option>
                            <option value="hot-water">Hot water</option>
                            <option value="cold-water">Cold water</option>
                            <option value="electricity">Electricity</option>
                            <option value="gas">Gas</option>
                        </select>
                    </div>
                </div>
                }

                {subCategory && <div className = "add-menu-3-section">
                    <div className = "add-menu-3-section-text">Enter spent sum</div>
                    <div className = "add-menu-3-section-form"><input type = "text" placeholder="-€"
                    value = {amount} onChange = {handleChangeAmount}></input></div>
                </div>}


                {amount.trim() !== "" && <div className = "add-menu-4-section">
                    <div className = "add-menu-4-section-text">Date of spending</div>
                    <div className = "add-menu-4-section-form"><input type="date" 
                    value = {date} onChange = {handleChangeDate}></input></div>
                </div>}

                {date && <div className = "add-menu-footer">
                    <button>Submit</button>
                </div>}

            </div>
        </div>
    );
}

export { Container, TextBox, DataContainer, AddMenu };