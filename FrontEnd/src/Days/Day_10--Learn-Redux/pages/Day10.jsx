import { useState } from "react";
import Counter from "../components/Counter.component";
import Form from "../components/Form.component";
function Day10() {
  const [showCounter, setShowCounter] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const handleClick = (e) => {
    if (e.target.id === "counter") {
      setShowCounter(!showCounter);
      setShowForm(false);
    }
    if (e.target.id === "form") {
      setShowForm(!showForm);
      setShowCounter(false);
    }
  };
  return (
    <div>
      <button
        name="counter"
        className="px-4 py-2 hover:border-purple-400 text-lg border-2 "
        onClick={handleClick}
        id="counter"
      >
        {showCounter ? "Close Counter" : "Open Counter"}
      </button>
      <button
        name="form"
        id="form"
        className="px-4 py-2 hover:border-purple-400 text-lg border-2 "
        onClick={handleClick}
      >
        {showForm ? "Close form" : "Open form"}
      </button>
      <div>{showCounter ? <Counter /> : null}</div>
      <div>{showForm ? <Form /> : null}</div>
    </div>
  );
}

export default Day10;
