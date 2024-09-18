import React from "react";
import { Form, Col } from "react-bootstrap";
import useHandleBlur from "../hooks/useHandleBlur";

const DropdownInput = ({ label, name, value, onChange, options, colSize }) => {
  const { handleBlur, isTbd } = useHandleBlur(); // Destructure the hook
  return (
    <Col md={colSize} className="mb-3">
      <Form.Group controlId={name}>
        <Form.Label className="fw-bold">{label}</Form.Label>
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
      </Form.Group>
    </Col>
  );
};

export default DropdownInput;
