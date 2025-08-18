import './App.css'
import Container from "./Container";

function App() {
  return (
    <div className = "main-container">
      <Container>Utility bills</Container>
      <Container>Food bills</Container>
      <Container>Bill statistics</Container>
    </div>
  );
}

export default App;