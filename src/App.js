import React from "react";
import Api from "./api";
import "./App.css";

function App() {
  let api = new Api();
  api.post().then((data) => {
    console.log(data);
  });
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
