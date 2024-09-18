import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import useHandleBlur from "../hooks/useHandleBlur";

const DropdownInputHorizontal = ({
  label,
  name,
  value,
  onChange,
  options,
  colSize,
}) => {
  const { handleBlur, isTbd } = useHandleBlur(); // Destructure the hook
  return (
    <Form.Group as={Row} controlId={name} className="mb-3">
      {/* Label to the left */}
      <Form.Label className="fw-bold" column>
        {label}
      </Form.Label>

      {/* Dropdown to the right */}
      <Col sm={7}>
        <Form.Select
          name={name}
          value={value}
          onChange={onChange}
          onBlur={(e) => handleBlur(e, label, options)}
          style={{ backgroundColor: isTbd ? "#ffcccb" : "white" }}
        >
          <option value=""></option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      </Col>
    </Form.Group>
  );
};

export default DropdownInputHorizontal;
