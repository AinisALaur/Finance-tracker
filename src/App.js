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

  return (
    <>
      {blurOn && (
        <div className="blur">
          {addMenuOn && (
            <AddMenu
              setBlurOn={setBlurOn}
              setAddMenuOn={setAddMenuOn}
            ></AddMenu>
          )}
        </div>
      )}

      <div className="main-container">
        <Container className="util-container">
          <TextBox>Utilities</TextBox>
          <DataContainer id="util-data">
            <Instance
              className="cold-water"
              name="Cold water "
              amount="30eur"
              author="Ainis"
              date="2025-08-20"
            ></Instance>
          </DataContainer>
        </Container>
        <Container className="food-container">
          <TextBox>Shopping</TextBox>
          <DataContainer id="food-data">
            <Instance
              className="maxima"
              name="Maxima"
              amount="25eur"
              author="Emile"
              date="2025-08-19"
            ></Instance>
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
