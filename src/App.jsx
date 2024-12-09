import "./App.css";
import Header from "./components/Header";
import TVShowSearch from "./components/TVShowSearch";
import TVShowList from "./components/TVShowList";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Header />
      <TVShowSearch setSearchTerm={setSearchTerm} />
      <TVShowList searchTerm={searchTerm} />
    </div>
  );
}

export default App;
