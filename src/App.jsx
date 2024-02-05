import "./styles/App.css";
import ours from "./images/ours.png";
import { useState } from "react";

function App() {
  const [fontSize, setFontSize] = useState(2);
  const [message, setMessage] = useState({
    ok: false,
    message: "Rdv le 14 Février <3",
  });

  const increaseFontSize = () => {
    if (fontSize < 4.5) setFontSize(fontSize + 0.5);
    else {
      setMessage({ ok: true, message: "M'enfou, on se mari quand même" });
    }
  };

  const showMessage = () => {
    setMessage({...message, ok:true})
  }

  return (
    <main>
      <img src={ours} alt="Gif ours" />
      <h2> Will you be my valentine ? </h2>
      <div>
        <button className="success" style={{ fontSize: `${fontSize}rem` }} onClick={showMessage}>
          Yes
        </button>
        <button className="error" onClick={increaseFontSize}>
          No
        </button>
      </div>
      {message.ok && <h1>{message.message}</h1>}
    </main>
  );
}

export default App;
