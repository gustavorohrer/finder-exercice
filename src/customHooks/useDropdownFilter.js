import React, { useState } from "react";

const useDropdownFilter = (label, options) => {
  const [state, setState] = useState("");
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
    <select
      id={id}
      value={state}
      onChange={e => setState(e.target.value)}
      onBlur={e => setState(e.target.value)}
      disabled={!options.length}
    >
      <option value="">{label}</option>
      {options.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
  return [state, Dropdown, setState];
};

export default useDropdownFilter;
