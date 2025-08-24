import "./Buttons.css";

import settingsIcon from "./settings-cogwheel-button.png";
import importIcon from "./import.png";
import exportIcon from "./export.png";
import addIcon from "./add.png";

function SettingsButton({ setBlurOn }) {
  return (
    <>
      <img
        src={settingsIcon}
        alt="Settings"
        className="button"
        onClick={() => setBlurOn((prev) => !prev)}
      />
    </>
  );
}

function ImportButton({ setBlurOn }) {
  return (
    <>
      <img
        src={importIcon}
        alt="Import"
        className="button"
        onClick={() => setBlurOn((prev) => !prev)}
      />
    </>
  );
}

function ExportButton({ setBlurOn }) {
  return (
    <>
      <img
        src={exportIcon}
        alt="Export"
        className="button"
        onClick={() => setBlurOn((prev) => !prev)}
      />
    </>
  );
}

function AddButton({
  setBlurOn,
  setAddMenuOn,
  setCategory,
  setSubCategory,
  setAmount,
  setDate,
  setAuthor,
  setEditModeOn,
  setId,
  setUsage,
}) {
  return (
    <>
      <img
        src={addIcon}
        alt="Add"
        className="button"
        onClick={() => {
          setBlurOn((prev) => !prev);
          setAddMenuOn((prev) => !prev);
          setCategory("");
          setSubCategory("");
          setAuthor("");
          setDate("");
          setAmount("");
          setId("");
          setUsage("");
          setEditModeOn(false);
        }}
      />
    </>
  );
}

export { SettingsButton, ImportButton, ExportButton, AddButton };
