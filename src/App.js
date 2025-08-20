import "./App.css";
import { useState } from "react";

import {
  Container,
  TextBox,
  DataContainer,
  AddMenu,
  Instance,
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

  const [instances, setInstances] = useState({
    utilities: [],
    food: [],
  });

  function handleCreateInstance(category, subCategory, amount, date, author) {
    const newInst = {
      id: Date.now(),
      className: subCategory,
      name: subCategory,
      author,
      date,
      amount,
    };

    setInstances((prev) => ({
      ...prev,
      [category]: [...prev[category], newInst],
    }));
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
              <Instance key={inst.id} {...inst} />
            ))}
          </DataContainer>
        </Container>
        <Container className="food-container">
          <TextBox>Shopping</TextBox>
          <DataContainer id="food-data">
            {instances.food.map((inst) => (
              <Instance key={inst.id} {...inst} />
            ))}
          </DataContainer>
        </Container>
        <Container className="statis-container">
          <TextBox>Monthly Statistics</TextBox>
          <DataContainer id="statis-data"></DataContainer>
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
