import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadAllGames } from "./actions/gamesActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAllGames());
  });

  return (
    <div className="App">
      <h1>Hello Ignite</h1>
    </div>
  );
}

export default App;
