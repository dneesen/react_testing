import { Form, Col, Row } from "react-bootstrap";
import useHandleBlur from "../hooks/useHandleBlur";

const TextInputHorizontal = ({
  label,
  name,
  value = "",
  onChange,
  placeholder,

}) => {
  const { handleBlur, isTbd } = useHandleBlur(); // Destructure the hook

  return (
    <Form.Group as={Row} controlId={name} className="mb-3">
      <Form.Label className="fw-bold" column>
        {label}
      </Form.Label>
      {/* Label on the left */}
      <Col sm='7'>
        {/* Input on the right */}
        <Form.Control
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={(e) => handleBlur(e, label)} // Pass the event and label to the hook
          placeholder={placeholder}
          style={{ backgroundColor: isTbd ? "#ffcccb" : "white" }} // Highlight if 'tbd'
        />
      </Col>
    </Form.Group>
  );
};

export default TextInputHorizontal;
