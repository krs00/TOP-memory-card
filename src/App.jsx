import { useState } from "react";

import Header from "./components/Header"
import GameBoard from "./components/GameBoard"
import ScoreBoard from "./components/ScoreBoard";

function App() {


  const [score, setScore] = useState([]);

  const [clickedImages, setClickedImages] = useState([]);

  return (
    <>
    <Header />
    <ScoreBoard />
    <GameBoard />
    </>
  )
}

export default App
