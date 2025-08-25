import "./Containers.css";
import "./Buttons.css";
import closeIcon from "./close.png";
import { useState, useEffect } from "react";

function DataContainer({ className, children }) {
  return (
    <>
      <div className={`data-container ${className || ""}`}>{children}</div>
    </>
  );
}

function DataContainerOptionsUtilities({
  setFilterUtilities,
  setSortUtilities,
}) {
  const handleChangeSort = (e) => {
    setSortUtilities(e.target.value);
  };

  const handleChangeFilter = (e) => {
    setFilterUtilities(e.target.value);
  };

  return (
    <>
      <div className="data-container-options">
        <div className="selectdivOpt">
          <select onChange={handleChangeFilter}>
            <option value="all-utilities">All categories</option>
            <option value="hot-water">Hot water</option>
            <option value="cold-water">Cold water</option>
            <option value="electricity">Electricity</option>
            <option value="gas">Gas</option>
          </select>
        </div>

        <div className="selectdivOpt">
          <select onChange={handleChangeSort}>
            <option value="dateDescending-utilities">Date descending</option>
            <option value="dateAscending-utilities">Date ascending</option>
            <option value="sumDescending-utilities">Amount descending</option>
            <option value="sumAscending-utilities">Amount ascending</option>
          </select>
        </div>
      </div>
    </>
  );
}

function DataContainerOptionsFood({ setFilterFood, setSortFood, setAuthor }) {
  const handleChangeSort = (e) => {
    setSortFood(e.target.value);
  };

  const handleChangeFilter = (e) => {
    setFilterFood(e.target.value);
  };

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <>
      <div className="data-container-options">
        <div className="selectdivOpt">
          <select onChange={handleChangeFilter}>
            <option value="all-food">All shops</option>
            <option value="lidl">Lidl</option>
            <option value="maxima">Maxima</option>
            <option value="iki">IKI</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="selectdivOpt">
          <select onChange={handleChangeAuthor}>
            <option value="all-authors">All</option>
            <option value="ainis">Ainis</option>
            <option value="emilė">Emilė</option>
          </select>
        </div>

        <div className="selectdivOpt">
          <select onChange={handleChangeSort}>
            <option value="dateDescending-food">Date descending</option>
            <option value="dateAscending-food">Date ascending</option>
            <option value="sumDescending-food">Amount descending</option>
            <option value="sumAscending-food">Amount ascending</option>
          </select>
        </div>
      </div>
    </>
  );
}

function TextBox({ children }) {
  return <div className="textBox">{children}</div>;
}

function Container({ children, className }) {
  return <div className={`my-container ${className || ""}`}>{children}</div>;
}

function AddMenu({
  setBlurOn,
  setAddMenuOn,
  onCreateInstance,
  onEditInstance,
  givenId,
  givenCategory,
  givenSubCategory,
  givenAmount,
  givenDate,
  givenAuthor,
  editModeOn,
  givenUsage,
}) {
  const [category, setCategory] = useState(givenCategory);
  const [subCategory, setSubCategory] = useState(givenSubCategory);
  const [amount, setAmount] = useState(givenAmount);
  const [date, setDate] = useState(givenDate);
  const [usage, setUsage] = useState(givenUsage);
  const [id, setId] = useState(givenId);
  const [author, setAuthor] = useState(givenAuthor);

  useEffect(() => {
    setId(givenId);
    setCategory(givenCategory);
    setSubCategory(givenSubCategory);
    setAmount(givenAmount);
    setDate(givenDate);
    setAuthor(givenAuthor);
    setUsage(givenUsage);
  }, [
    givenId,
    givenCategory,
    givenSubCategory,
    givenAmount,
    givenDate,
    givenAuthor,
    givenUsage,
  ]);

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
    setSubCategory("");
    setAmount("");
    setDate("");
    setAuthor("");
    setUsage("");
  };

  const handleChangeSubCategory = (e) => {
    setSubCategory(e.target.value);
  };

  const handleChangeAmount = (e) => {
    let value = e.target.value;

    if (value === "" || Number(value) <= 0) {
      setAmount("");
      return;
    }

    setAmount(value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleChangeUsage = (e) => {
    let value = e.target.value;

    if (value === "" || Number(value) <= 0) {
      setUsage("");
      return;
    }

    setUsage(value);
  };

  return (
    <div className="add-menu">
      <div className="add-menu-header">
        {!editModeOn && <div className="add-menu-tittle">Add new instance</div>}
        {editModeOn && <div className="add-menu-tittle">Edit instance</div>}
        <div className="close-add-menu">
          <img
            src={closeIcon}
            alt="Close"
            className="closeButton"
            onClick={() => {
              setBlurOn((prev) => !prev);
              setAddMenuOn((prev) => !prev);
            }}
          />
        </div>
      </div>

      <div className="add-menu-body">
        <div className="add-menu-1-section">
          <div className="add-menu-1-section-text">Select instance section</div>
          <div className="add-menu-1-section-form">
            <div className="selectdiv">
              <select value={category} onChange={handleChangeCategory}>
                <option value="">--Not selected--</option>
                <option value="utilities">Utilities</option>
                <option value="food">Food</option>
              </select>
            </div>
          </div>
        </div>
        {category === "food" && (
          <div className="add-menu-2-section">
            <div className="add-menu-2-section-text">
              Select a grocery store
            </div>
            <div className="add-menu-2-section-form">
              <div className="selectdiv">
                <select value={subCategory} onChange={handleChangeSubCategory}>
                  <option value="">--Not selected--</option>
                  <option value="lidl">Lidl</option>
                  <option value="maxima">Maxima</option>
                  <option value="iki">IKI</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        )}
        {category === "utilities" && (
          <div className="add-menu-2-section">
            <div className="add-menu-2-section-text">
              Select a type of utility
            </div>
            <div className="add-menu-2-section-form">
              <div className="selectdiv">
                <select value={subCategory} onChange={handleChangeSubCategory}>
                  <option value="">--Not selected--</option>
                  <option value="hot-water">Hot water</option>
                  <option value="cold-water">Cold water</option>
                  <option value="electricity">Electricity</option>
                  <option value="gas">Gas</option>
                </select>
              </div>
            </div>
          </div>
        )}
        {category && (
          <div className="add-menu-3-section">
            <div className="add-menu-3-section-text">Enter spent sum</div>
            <div className="add-menu-3-section-form">
              <div className="amountWrapper">
                <input
                  type="number"
                  value={amount}
                  onChange={handleChangeAmount}
                  step="1"
                  min="1"
                  className="amountInput"
                />
                <span className="currencySymbol">€</span>
              </div>
            </div>
          </div>
        )}
        {category && (
          <div className="add-menu-4-section">
            <div className="add-menu-4-section-text">Date of spending</div>
            <div className="add-menu-4-section-form">
              <input
                type="date"
                value={date}
                onChange={handleChangeDate}
                className="dateInput"
              />
            </div>
          </div>
        )}

        {category == "food" && (
          <div className="add-menu-5-section">
            <div className="add-menu-5-section-text">
              Select person who paid
            </div>
            <div className="add-menu-5-section-form">
              <div className="selectdiv">
                <select value={author} onChange={handleChangeAuthor}>
                  <option value="">--Not selected--</option>
                  <option value="ainis">Ainis</option>
                  <option value="emilė">Emilė</option>
                </select>
              </div>
            </div>
          </div>
        )}
        {category === "utilities" &&
          (subCategory === "hot-water" || subCategory === "cold-water") && (
            <div className="add-menu-5-section">
              <div className="add-menu-5-section-text">Input water usage</div>
              <div className="add-menu-5-section-form">
                <div className="amountWrapper">
                  <input
                    type="number"
                    value={usage}
                    onChange={handleChangeUsage}
                    step="1"
                    min="1"
                    className="amountInput"
                  />
                  <span className="currencySymbol">m³</span>
                </div>
              </div>
            </div>
          )}
        {category === "utilities" && subCategory === "electricity" && (
          <div className="add-menu-5-section">
            <div className="add-menu-5-section-text">
              Input electricity usage
            </div>
            <div className="add-menu-5-section-form">
              <div className="amountWrapper">
                <input
                  type="number"
                  value={usage}
                  onChange={handleChangeUsage}
                  step="1"
                  min="1"
                  className="amountInput"
                />
                <span className="currencySymbol">kWh</span>
              </div>
            </div>
          </div>
        )}
        {category === "utilities" && subCategory === "gas" && (
          <div className="add-menu-5-section">
            <div className="add-menu-5-section-text">Input gas usage</div>
            <div className="add-menu-5-section-form">
              <div className="amountWrapper">
                <input
                  type="number"
                  value={usage}
                  onChange={handleChangeUsage}
                  step="1"
                  min="1"
                  className="amountInput"
                />
                <span className="currencySymbol">m³</span>
              </div>
            </div>
          </div>
        )}
        {(category === "utilities" &&
          usage &&
          subCategory &&
          amount &&
          !editModeOn) ||
        (category === "food" &&
          date &&
          author &&
          amount &&
          subCategory &&
          !editModeOn) ? (
          <div className="add-menu-footer">
            <button
              className="button-17"
              type="button"
              onClick={() => {
                onCreateInstance(
                  id || Date.now(),
                  category,
                  subCategory,
                  amount,
                  date,
                  author || "",
                  usage || 0
                );

                setBlurOn((prev) => !prev);
                setAddMenuOn((prev) => !prev);
              }}
            >
              Submit
            </button>
          </div>
        ) : null}
        {(category === "utilities" &&
          date &&
          usage &&
          subCategory &&
          amount &&
          editModeOn) ||
        (category === "food" &&
          date &&
          author &&
          amount &&
          subCategory &&
          editModeOn) ? (
          <div className="add-menu-footer">
            <button
              className="button-17"
              type="button"
              onClick={() => {
                onEditInstance(
                  id,
                  givenCategory,
                  category,
                  subCategory,
                  parseFloat(amount),
                  date,
                  author || "",
                  usage !== "" ? parseFloat(usage) : 0
                );

                setBlurOn((prev) => !prev);
                setAddMenuOn((prev) => !prev);
              }}
            >
              Edit
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function TypeCircle({ className }) {
  return <div className={`type-circle ${className || ""}`}></div>;
}

function Instance({
  id,
  className,
  name,
  author,
  date,
  amount,
  usage,
  onEdit,
  setDeleteId,
  setDeleteMenuOn,
  setBlurOn,
}) {
  return (
    <>
      <div className="instance-container">
        <div className="instance-on-hover">
          <button
            className="instance-on-hover-edit button-16-edit"
            onClick={() => {
              {
                onEdit(id);
              }
            }}
          >
            Edit
          </button>
          <button
            className="instance-on-hover-delete button-16-delete"
            onClick={() => {
              setDeleteId(id);
              setDeleteMenuOn(true);
              setBlurOn(true);
            }}
          >
            Delete
          </button>
        </div>
        <div className="instance-ball">
          <TypeCircle className={className}></TypeCircle>
        </div>
        <div className="instance-info">
          <div className="instance-name">{name.toUpperCase()}</div>
          {author && (
            <div className="instance-author">{author.toUpperCase()}</div>
          )}
          {typeof usage === "number" &&
            usage > 0 &&
            (name === "cold-water" ||
              name === "hot-water" ||
              name === "gas") && (
              <div className="instance-usage">
                {Math.round((usage + Number.EPSILON) * 100) / 100} m³
              </div>
            )}

          {typeof usage === "number" && usage > 0 && name === "electricity" && (
            <div className="instance-usage">
              {Math.round((usage + Number.EPSILON) * 100) / 100} kWh
            </div>
          )}

          <div className="instance-date">{date.toLocaleDateString()}</div>
        </div>
        <div className="instance-amount">
          {Math.round((amount + Number.EPSILON) * 100) / 100} €
        </div>
      </div>
    </>
  );
}

function MonthlyData({
  ainisExpenses,
  emileExpenses,
  foodExpenses,
  utilityExpenses,
  thisMonthTotal,
  lastMonthTotal,
}) {
  return (
    <>
      <div className="ainis-expenses">
        <div className="ainis-expenses-name">Ainis</div>
        <div className="ainis-expenses-amount">
          {Math.round((ainisExpenses + Number.EPSILON) * 100) / 100} eur
        </div>
      </div>
      <div className="emile-expenses">
        <div className="emile-expenses-name">Emilė</div>
        <div className="emile-expenses-amount">
          {Math.round((emileExpenses + Number.EPSILON) * 100) / 100} eur
        </div>
      </div>
      <div className="food-expenses">
        <div className="food-expenses-name">Food</div>
        <div className="food-expenses-amount">
          {Math.round((foodExpenses + Number.EPSILON) * 100) / 100} eur
        </div>
      </div>
      <div className="utility-expenses">
        <div className="utility-expenses-name">Utilities</div>
        <div className="utility-expenses-amount">
          {Math.round((utilityExpenses + Number.EPSILON) * 100) / 100} eur
        </div>
      </div>
      <div className="this-month-total">
        <div className="this-month-total-name">This month's total</div>
        <div className="this-month-total-amount">
          {Math.round((thisMonthTotal + Number.EPSILON) * 100) / 100} eur
        </div>
      </div>
      <div className="last-month-total">
        <div className="last-month-total-name">Last month's total</div>
        <div className="last-month-total-amount">
          {Math.round((lastMonthTotal + Number.EPSILON) * 100) / 100} eur
        </div>
      </div>
    </>
  );
}

function ImportMenu({ setBlurOn, setImportMenuOn, onImport }) {
  const [importFile, setImportFile] = useState("");

  const handleChangeFile = (e) => {
    setImportFile(e.target.files[0]);
  };

  return (
    <div className="import-menu">
      <div className="import-menu-header">
        <div className="import-menu-header-title">
          Choose a file to import data from
        </div>
        <div className="import-menu-header-close">
          <img
            src={closeIcon}
            alt="Close"
            className="closeButton"
            onClick={() => {
              setBlurOn((prev) => !prev);
              setImportMenuOn((prev) => !prev);
            }}
          />
        </div>
      </div>

      <div className="import-menu-body">
        <div className="import-menu-header-choose-file">
          <input type="file" onChange={handleChangeFile}></input>
        </div>
      </div>
      <div className="import-menu-footer">
        {importFile && (
          <button
            className="button-17"
            onClick={() => {
              setBlurOn((prev) => !prev);
              setImportMenuOn((prev) => !prev);
              onImport(importFile);
            }}
          >
            Import data
          </button>
        )}
      </div>
    </div>
  );
}

function DeleteMenu({ setBlurOn, setDeleteMenuOn, onDelete, deleteId }) {
  return (
    <div className="delete-menu">
      <div className="delete-menu-tittle">
        Are you sure you want to delete the instance?
      </div>
      <div className="delete-menu-buttons">
        <button
          className="button-16-edit"
          onClick={() => {
            setBlurOn(false);
            setDeleteMenuOn(false);
          }}
        >
          Cancel
        </button>
        <button
          className="button-16-delete"
          onClick={() => {
            onDelete(deleteId);
            setBlurOn(false);
            setDeleteMenuOn(false);
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export {
  Container,
  TextBox,
  DataContainer,
  AddMenu,
  Instance,
  MonthlyData,
  ImportMenu,
  DataContainerOptionsUtilities,
  DataContainerOptionsFood,
  DeleteMenu,
};
