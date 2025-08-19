import './Buttons.css'

import settingsIcon from './settings-cogwheel-button.png';
import importIcon from './import.png';
import exportIcon from './export.png';
import addIcon from './add.png';

function SettingsButton(){
    return(
        <>
            <a>
                <img src={settingsIcon} alt="Settings" className = "button"/>
            </a>
        </> 
    );
}

function ImportButton(){
    return(
        <>
            <a>
                <img src={importIcon} alt="Import" className = "button"/>
            </a>
        </> 
    );
}

function ExportButton(){
    return(
        <>
            <a>
                <img src={exportIcon} alt="Export" className = "button"/>
            </a>
        </> 
    );
}

function AddButton(){
    return(
        <>
            <a>
                <img src={addIcon} alt="Add" className = "button"/>
            </a>
        </> 
    );
}

export { SettingsButton, ImportButton, ExportButton, AddButton };