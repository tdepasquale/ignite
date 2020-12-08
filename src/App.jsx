import { Home } from "./pages/Home";
import { GlobalStyles } from "./components/GlobalStyles";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]} component={Home} />
    </div>
  );
}

export default App;
