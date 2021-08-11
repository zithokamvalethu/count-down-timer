import "./App.css";
import CountDown from "./CountDown";

function App() {
  const hoursMinSecs = { hours: 1, minutes: 0, seconds: 0 };

  return (
    <div className="App">
      <CountDown hoursMinSecs={hoursMinSecs} />
    </div>
  );
}

export default App;
