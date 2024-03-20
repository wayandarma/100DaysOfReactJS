import "./app.css";

function App() {
  const thisMessage = "100 days of react js";
  let count = 0;
  const incrementCount = () => {
    count++;
  };

  return <div className="text-9xl text-orange-400">100 days of react js</div>;
}

export default App;
