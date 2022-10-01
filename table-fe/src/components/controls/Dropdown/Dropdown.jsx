import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
const Dropdown = ({ content, dispatch, func }) => {
  const [value, setValue] = useState(content[0]);
  useEffect(() => {
    dispatch(func(value));
  }, [value]);
  const options = content.map((text, index) => {
    return <option key={index}>{text}</option>;
  });

  return (
    <div className="w-100">
      <Form.Select
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        {options}
      </Form.Select>
    </div>
  );
};

export default Dropdown;
