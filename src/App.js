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

  function handleCreateInstance(category, subCategory, amount, date, author) {
    const newInst = {
      id: Date.now(),
      className: subCategory,
      name: subCategory,
      author,
      date: new Date(date),
      amount: parseFloat(amount),
    };

    setInstances((prev) => ({
      ...prev,
      [category]: [...prev[category], newInst],
    }));
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

  return (
    <>
      {blurOn && (
        <div className="blur">
          {addMenuOn && (
            <AddMenu
              setBlurOn={setBlurOn}
              setAddMenuOn={setAddMenuOn}
              onCreateInstance={handleCreateInstance}
            ></AddMenu>
          )}
        </div>
      )}

      <div className="main-container">
        <Container className="util-container">
          <TextBox>Utilities</TextBox>
          <DataContainer id="util-data">
            {instances.utilities.map((inst) => (
              <Instance
                key={inst.id}
                {...inst}
                onDelete={handleDeleteInstance}
              />
            ))}
          </DataContainer>
        </Container>
        <Container className="food-container">
          <TextBox>Shopping</TextBox>
          <DataContainer id="food-data">
            {instances.food.map((inst) => (
              <Instance
                key={inst.id}
                {...inst}
                onDelete={handleDeleteInstance}
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
        <SettingsButton setBlurOn={setBlurOn} />
        <ExportButton setBlurOn={setBlurOn} />
        <ImportButton setBlurOn={setBlurOn} />
        <AddButton setBlurOn={setBlurOn} setAddMenuOn={setAddMenuOn} />
      </div>
    </>
  );
}

export default App;
