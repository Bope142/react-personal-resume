import "./assets/style/main.style/main.scss";
import Navbar from "./parts/navbar";
import MainView from "./parts/mainView";

function App() {
  return (
    <div className="App container__app">
      <Navbar />
      <MainView />
    </div>
  );
}

export default App;
