import { useState, useEffect } from "react";
import Input from "./components/Input";

import cities from "./constants/cities";

function App() {
  const [hint, setHint] = useState("Enter a City Name");
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (isFocused) {
      document.body.classList.add("blur-background");
    } else {
      document.body.classList.remove("blur-background");
    }
  }, [isFocused]);

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
    if (/\d/.test(input)) {
      setInput("");
      setHint("Enter a City Name");
      alert("Please enter a valid text without numbers");
      return;
    }
    const matchCity = cities.find((city) =>
      city.toLowerCase().startsWith(input.toLowerCase())
    );

    setHint(matchCity);
  };

  return (
    <>
      <Input
        handleChange={handleChange}
        hint={hint}
        input={input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <div className={`main-wrapper ${isFocused ? "blurred" : ""}`}></div>
    </>
  );
}

export default App;
