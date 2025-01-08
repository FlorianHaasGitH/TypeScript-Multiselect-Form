import { useState } from "react";
import { Select } from "./components/Select";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Three", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Five", value: 5 },
];

function App() {
  const [value, setValue] = useState<(typeof options)[0] | undefined>(
    options[0]
  );

  return (
    <>
      <Select options={options} onChange={(o) => setValue(0)} />
    </>
  );
}

export default App;
