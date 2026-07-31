import React from "react";
import { useState } from "react";

function useToggle() {
  const [value, setValue] = useState(false);

  return {
    value,
    toggle: () => setValue(value ? false : true),
  };
}

export default useToggle;
