import "./App.scss";
import Customers from "./components/Customers/Customers";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <div className="work-section">
        <Customers />
      </div>
    </div>
  );
};

export default App;
