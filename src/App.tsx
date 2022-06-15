import "./App.css";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      {/* TODO: Add navigation */}
      {/* <Router location={""} navigator={Navigator}>
        <Route path='/'> */}
      <Dashboard />
      {/* </Route>
      </Router> */}
    </div>
  );
}

export default App;
