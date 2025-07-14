import { useState } from "react";
import Input from "./components/Input";

import cities from "./constants/cities";

function App() {
  const [hint, setHint] = useState("Enter a City Name");
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    const input = value
      .split(" ")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
      .join(" ");
    setInput(input);

    if (!input) {
      setHint("Enter a City Name");
      return;
    }

    const matchCity = cities.find((city) =>
      city.toLowerCase().startsWith(input.toLowerCase())
    );

    setHint(matchCity);
  };

  return (
    <>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <Input handleChange={handleChange} hint={hint} input={input} />
      </div>
    </>
  );
}

export default App;
