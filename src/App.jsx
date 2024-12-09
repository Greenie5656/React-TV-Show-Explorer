import "./App.css";
import Header from "./components/Header";
import TVShowSearch from "./components/TVShowSearch";
import TVShowList from "./components/TVShowList";
import { useEffect, useState } from "react";
import Granim from "granim";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    new Granim({
      element: "#canvas-basic",
      direction: "diagonal",
      isPausedWhenNotInView: true,
      states: {
        "default-state": {
          gradients: [
            ["#ff9966", "#ff5e62"],
            ["#00F260", "#0575E6"],
            ["#e1eec3", "#f05053"],
          ],
        },
      },
    });
  });

  return (
    <div>
      <canvas id="canvas-basic"></canvas>
      <Header />
      <TVShowSearch setSearchTerm={setSearchTerm} />
      <TVShowList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
