import './App.css'
import Container from "./Container";
import TextBox from "./TextBox";

function App() {
  return (
    <div className = "main-container">
      <Container className = "util-container">
        <TextBox>Utility bills</TextBox>
      </Container>
      <Container className = "food-container">
        <TextBox>Food bills</TextBox>
      </Container>
      <Container className = "statis-container">
        <TextBox>Bill statistics</TextBox>
      </Container>
    </div>
  );
}

export default App;