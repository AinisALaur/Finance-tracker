import "./Containers.css";
import closeIcon from "./close.png";
import { useState, useEffect } from "react";

function DataContainer({ className, children }) {
  return <div className={`data-container ${className || ""}`}>{children}</div>;
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
}) {
  const [category, setCategory] = useState(givenCategory);
  const [subCategory, setSubCategory] = useState(givenSubCategory);
  const [amount, setAmount] = useState(givenAmount);
  const [date, setDate] = useState(givenDate);
  const [id, setId] = useState(givenId);
  const [author, setAuthor] = useState(givenAuthor);

  useEffect(() => {
    setId(givenId);
    setCategory(givenCategory);
    setSubCategory(givenSubCategory);
    setAmount(givenAmount);
    setDate(givenDate);
    setAuthor(givenAuthor);
  }, [
    givenId,
    givenCategory,
    givenSubCategory,
    givenAmount,
    givenDate,
    givenAuthor,
  ]);

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
    setSubCategory("");
    setAmount("");
    setDate("");
    setAuthor("");
  };

  const handleChangeSubCategory = (e) => {
    setSubCategory(e.target.value);
    setAmount("");
    setDate("");
    setAuthor("");
  };

  const handleChangeAmount = (e) => {
    setAmount(e.target.value);
    setDate("");
    setAuthor("");
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
    setAuthor("");
  };

  const handleChangeAuthor = (e) => {
    setAuthor(e.target.value);
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
            width="10px"
            height="10px"
          />
        </div>
      </div>

      <div className="add-menu-body">
        <div className="add-menu-1-section">
          <div className="add-menu-1-section-text">Select instance section</div>
          <div className="add-menu-1-section-form">
            <select value={category} onChange={handleChangeCategory}>
              <option value="">--Not selected--</option>
              <option value="utilities">Utilities</option>
              <option value="food">Food</option>
            </select>
          </div>
        </div>
        {category === "food" && (
          <div className="add-menu-2-section">
            <div className="add-menu-2-section-text">
              Select a grocery store
            </div>
            <div className="add-menu-2-section-form">
              <select value={subCategory} onChange={handleChangeSubCategory}>
                <option value="">--Not selected--</option>
                <option value="lidl">Lidl</option>
                <option value="maxima">Maxima</option>
                <option value="iki">IKI</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        )}
        {category === "utilities" && (
          <div className="add-menu-2-section">
            <div className="add-menu-2-section-text">
              Select a type of utility
            </div>
            <div className="add-menu-2-section-form">
              <select value={subCategory} onChange={handleChangeSubCategory}>
                <option value="">--Not selected--</option>
                <option value="hot-water">Hot water</option>
                <option value="cold-water">Cold water</option>
                <option value="electricity">Electricity</option>
                <option value="gas">Gas</option>
              </select>
            </div>
          </div>
        )}
        {subCategory && (
          <div className="add-menu-3-section">
            <div className="add-menu-3-section-text">Enter spent sum</div>
            <div className="add-menu-3-section-form">
              <input
                type="number"
                placeholder="-€"
                value={amount}
                onChange={handleChangeAmount}
              ></input>
            </div>
          </div>
        )}
        {amount !== "" && (
          <div className="add-menu-4-section">
            <div className="add-menu-4-section-text">Date of spending</div>
            <div className="add-menu-4-section-form">
              <input
                type="date"
                value={date}
                onChange={handleChangeDate}
              ></input>
            </div>
          </div>
        )}
        {date && category === "food" && (
          <div className="add-menu-5-section">
            <div className="add-menu-5-section-text">
              Select person who paid
            </div>
            <div className="add-menu-5-section-form">
              <select value={author} onChange={handleChangeAuthor}>
                <option value="">--Not selected--</option>
                <option value="ainis">Ainis</option>
                <option value="emilė">Emilė</option>
              </select>
            </div>
          </div>
        )}

        {(category === "utilities" && date && !editModeOn) ||
        (category === "food" && date && author && !editModeOn) ? (
          <div className="add-menu-footer">
            <button
              type="button"
              onClick={() => {
                onCreateInstance(
                  category,
                  subCategory,
                  amount + "€",
                  date,
                  author
                );

                setBlurOn((prev) => !prev);
                setAddMenuOn((prev) => !prev);
              }}
            >
              Submit
            </button>
          </div>
        ) : null}

        {(category === "utilities" && date && editModeOn) ||
        (category === "food" && date && author && editModeOn) ? (
          <div className="add-menu-footer">
            <button
              type="button"
              onClick={() => {
                onEditInstance(
                  id,
                  givenCategory,
                  category,
                  subCategory,
                  amount + "€",
                  date,
                  author
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
  onDelete,
  onEdit,
}) {
  return (
    <>
      <div className="instance-container">
        <div className="instance-on-hover">
          <button
            className="instance-on-hover-edit"
            onClick={() => {
              {
                onEdit(id);
              }
            }}
          >
            Edit
          </button>
          <button
            className="instance-on-hover-delete"
            onClick={() => onDelete(id)}
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
          <div className="instance-date">{date.toLocaleDateString()}</div>
        </div>
        <div className="instance-amount">{amount}€</div>
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
        <div className="ainis-expenses-amount">{ainisExpenses} eur</div>
      </div>
      <div className="emile-expenses">
        <div className="emile-expenses-name">Emilė</div>
        <div className="emile-expenses-amount">{emileExpenses} eur</div>
      </div>
      <div className="food-expenses">
        <div className="food-expenses-name">Food</div>
        <div className="food-expenses-amount">{foodExpenses} eur</div>
      </div>
      <div className="utility-expenses">
        <div className="utility-expenses-name">Utilities</div>
        <div className="utility-expenses-amount">{utilityExpenses} eur</div>
      </div>
      <div className="this-month-total">
        <div className="this-month-total-name">This month's total</div>
        <div className="this-month-total-amount">{thisMonthTotal} eur</div>
      </div>
      <div className="last-month-total">
        <div className="last-month-total-name">Last month's total</div>
        <div className="last-month-total-amount">{lastMonthTotal} eur</div>
      </div>
    </>
  );
}

export { Container, TextBox, DataContainer, AddMenu, Instance, MonthlyData };
