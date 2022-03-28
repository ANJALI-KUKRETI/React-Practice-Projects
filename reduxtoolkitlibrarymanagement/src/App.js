import React from "react";
import AddBook from "./components/AddBook/AddBook";
import Header from "./components/Header/Header";
import Library from "./components/Library/Library";

function App() {
  return (
    <div className="App">
      <Header />
      <AddBook />
      <Library />
    </div>
  );
}

export default App;
