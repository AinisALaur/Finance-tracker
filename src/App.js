import "./App.css";
import { useState, useEffect, useRef } from "react";

import {
  Container,
  TextBox,
  DataContainer,
  AddMenu,
  Instance,
  MonthlyData,
} from "./Containers";
import {
  SettingsButton,
  ImportButton,
  ExportButton,
  AddButton,
} from "./Buttons";

function App() {
  const [blurOn, setBlurOn] = useState(false);
  const [addMenuOn, setAddMenuOn] = useState(false);
  const [deleteInstance, setDeleteInstance] = useState("");
  const [instances, setInstances] = useState({ utilities: [], food: [] });
  const [editModeOn, setEditModeOn] = useState(false);

  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [id, setId] = useState("");
  const [usage, setUsage] = useState("");

  const firstRender = useRef(true);

  useEffect(() => {
    const storedUtilities =
      JSON.parse(localStorage.getItem("utilities"))?.map((inst) => ({
        ...inst,
        date: new Date(inst.date),
      })) || [];

    const storedFood =
      JSON.parse(localStorage.getItem("food"))?.map((inst) => ({
        ...inst,
        date: new Date(inst.date),
      })) || [];

    setInstances({ utilities: storedUtilities, food: storedFood });
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem("utilities", JSON.stringify(instances.utilities));
    localStorage.setItem("food", JSON.stringify(instances.food));
  }, [instances]);

  useEffect(() => {
    if (deleteInstance) {
      setInstances((prev) => {
        const newInstances = {};
        for (const category in prev) {
          newInstances[category] = prev[category].filter(
            (inst) => inst.id !== deleteInstance
          );
        }
        return newInstances;
      });
      setDeleteInstance("");
    }
  }, [deleteInstance]);

  function handleCreateInstance(
    category,
    subCategory,
    amount,
    date,
    author,
    usage
  ) {
    const newInst = {
      id: Date.now(),
      className: subCategory,
      name: subCategory,
      author,
      date: new Date(date),
      amount: parseFloat(amount),
      usage: parseFloat(usage),
    };

    setInstances((prev) => ({
      ...prev,
      [category]: [...prev[category], newInst],
    }));
  }

  function handleEditInstance(
    id,
    oldCategory,
    newCategory,
    subCategory,
    amount,
    date,
    author,
    usage
  ) {
    setInstances((prev) => {
      if (oldCategory === newCategory) {
        const updatedCategoryInstances = prev[oldCategory].map((inst) => {
          if (inst.id === id) {
            return {
              ...inst,
              className: subCategory,
              name: subCategory,
              author,
              date: new Date(date),
              amount: parseFloat(amount),
              usage: usage,
            };
          }
          return inst;
        });

        return {
          ...prev,
          [oldCategory]: updatedCategoryInstances,
        };
      } else {
        const filteredOldCategory = prev[oldCategory].filter(
          (inst) => inst.id !== id
        );

        const updatedInstance = {
          id,
          className: subCategory,
          name: subCategory,
          author,
          date: new Date(date),
          amount: parseFloat(amount),
          usage: parseFloat(usage),
        };

        const updatedNewCategory = prev[newCategory]
          ? [...prev[newCategory], updatedInstance]
          : [updatedInstance];

        return {
          ...prev,
          [oldCategory]: filteredOldCategory,
          [newCategory]: updatedNewCategory,
        };
      }
    });
  }

  function sumByAuthor(author) {
    const now = new Date();
    let total = 0;

    for (const category in instances) {
      for (const inst of instances[category]) {
        if (
          inst.author === author &&
          inst.date.getMonth() === now.getMonth() &&
          inst.date.getFullYear() === now.getFullYear()
        ) {
          total += inst.amount;
        }
      }
    }
    return total;
  }

  function sumByCategory(thisCategory) {
    const now = new Date();
    let total = 0;

    for (const inst of instances[thisCategory]) {
      if (
        inst.date.getMonth() === now.getMonth() &&
        inst.date.getFullYear() === now.getFullYear()
      ) {
        total += inst.amount;
      }
    }
    return total;
  }

  function sumByMonth(year, month) {
    let total = 0;
    for (const category in instances) {
      for (const inst of instances[category]) {
        if (
          inst.date.getMonth() === month &&
          inst.date.getFullYear() === year
        ) {
          total += inst.amount;
        }
      }
    }
    return total;
  }

  function handleDeleteInstance(id) {
    setInstances((prev) => {
      const newInstances = {};
      for (const category in prev) {
        newInstances[category] = prev[category].filter(
          (inst) => inst.id !== id
        );
      }
      return newInstances;
    });
  }

  function getInstanceById(id) {
    for (const category in instances) {
      const found = instances[category].find((inst) => inst.id === id);
      if (found) {
        return { instance: found, category };
      }
    }
    return null;
  }

  function formatDateForInput(date) {
    if (!date) return "";
    const d = new Date(date);
    if (isNaN(d)) return "";
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function handleEdit(id) {
    setBlurOn(true);
    setAddMenuOn(true);
    setEditModeOn(true);

    const result = getInstanceById(id);
    if (!result) return;

    const { instance, category } = result;

    setId(id);
    setCategory(category);
    setSubCategory(instance.className);
    setAmount(instance.amount);
    setAuthor(instance.author);
    setDate(formatDateForInput(instance.date));
    setUsage(instance.usage);
  }

  function handleExport() {
    let text = "";
    for (const category in instances) {
      instances[category].forEach((instance) => {
        if (category === "utilities") {
          text += instance.id + " ";
          text += category + " ";
          text += instance.name + " ";
          text += instance.amount + " ";
          text += instance.usage + " ";
          text += formatDateForInput(instance.date) + " ";
        } else {
          text += instance.id + " ";
          text += category + " ";
          text += instance.name + " ";
          text += instance.amount + " ";
          text += instance.author + " ";
          text += formatDateForInput(instance.date) + " ";
        }
        text += "\n";
      });
    }

    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "exportedData.txt";
    link.click();

    URL.revokeObjectURL(link.href);
  }

  return (
    <>
      {blurOn && (
        <div className="blur">
          {addMenuOn && (
            <AddMenu
              setBlurOn={setBlurOn}
              setAddMenuOn={setAddMenuOn}
              onCreateInstance={handleCreateInstance}
              givenId={id}
              givenCategory={category}
              givenSubCategory={subCategory}
              givenAmount={amount}
              givenDate={date}
              givenAuthor={author}
              givenUsage={usage}
              editModeOn={editModeOn}
              setEditModeOn={setEditModeOn}
              onEditInstance={handleEditInstance}
            ></AddMenu>
          )}
        </div>
      )}

      <div className="main-container">
        <Container className="util-container">
          <TextBox>Utilities</TextBox>
          <DataContainer id="util-data">
            {instances.utilities
              .slice()
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((inst) => (
                <Instance
                  key={inst.id}
                  {...inst}
                  onDelete={handleDeleteInstance}
                  onEdit={handleEdit}
                />
              ))}
          </DataContainer>
        </Container>
        <Container className="food-container">
          <TextBox>Shopping</TextBox>
          <DataContainer id="food-data">
            {instances.food
              .slice()
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((inst) => (
                <Instance
                  key={inst.id}
                  {...inst}
                  onDelete={handleDeleteInstance}
                  onEdit={handleEdit}
                />
              ))}
          </DataContainer>
        </Container>
        <Container className="statis-container">
          <TextBox>Monthly Statistics</TextBox>
          <DataContainer id="statis-data">
            <MonthlyData
              ainisExpenses={sumByAuthor("ainis")}
              emileExpenses={sumByAuthor("emilė")}
              foodExpenses={sumByCategory("food")}
              utilityExpenses={sumByCategory("utilities")}
              thisMonthTotal={sumByMonth(
                new Date().getFullYear(),
                new Date().getMonth()
              )}
              lastMonthTotal={sumByMonth(
                new Date().getFullYear(),
                new Date().getMonth() - 1
              )}
            />
          </DataContainer>
        </Container>
      </div>

      <div className="options">
        <ExportButton onExport={handleExport} />
        <ImportButton setBlurOn={setBlurOn} />
        <AddButton
          setBlurOn={setBlurOn}
          setAddMenuOn={setAddMenuOn}
          setId={setId}
          setCategory={setCategory}
          setSubCategory={setSubCategory}
          setAuthor={setAuthor}
          setDate={setDate}
          setAmount={setAmount}
          setUsage={setUsage}
          setEditModeOn={setEditModeOn}
        />
      </div>
    </>
  );
}

export default App;
