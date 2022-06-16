import React, { useRef, useEffect } from "react";
import Input from "./Input";
function App() {
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  function firstNameKeyDown(e) {
    if (e.key === "Enter") {
      lastNameRef.current.focus();
    }
  }
  return (
    <div>
      <header>
        First Name:{" "}
        <Input
          ref={firstNameRef}
          placeholder="Enter first name here"
          onKeyDown={firstNameKeyDown}
        />
        <br />
        <br />
        Last Name:{" "}
        <Input ref={lastNameRef} placeholder="Enter last name here" />
        <br />
        <br />
      </header>
    </div>
  );
}
export default App;
