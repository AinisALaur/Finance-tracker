import "./Buttons.css";

import importIcon from "./import.png";
import exportIcon from "./export.png";
import addIcon from "./add.png";

function ImportButton({ setBlurOn, setimportMenuOn }) {
  return (
    <>
      <img
        src={importIcon}
        alt="Import"
        className="button"
        onClick={() => {
          setBlurOn((prev) => !prev);
          setimportMenuOn(true);
        }}
      />
    </>
  );
}

function ExportButton({ onExport }) {
  return (
    <>
      <img
        src={exportIcon}
        alt="Export"
        className="button"
        onClick={onExport}
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

export { ImportButton, ExportButton, AddButton };
