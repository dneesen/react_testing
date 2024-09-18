import { Form, Col } from "react-bootstrap";
import useHandleBlur from "../hooks/useHandleBlur";

const TextInputVertical = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  colSize,
}) => {
  const { handleBlur, isTbd } = useHandleBlur(); // Destructure the hook

  return (
    <Col md={colSize} className="mb-3">
      <Form.Group controlId={name}>
        <Form.Label className="fw-bold">{label}</Form.Label>
        <Form.Control
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={(e) => handleBlur(e, label)} // Pass the event and label to the hook
          placeholder={placeholder}
          style={{ backgroundColor: isTbd ? "#ffcccb" : "white" }} // Highlight if 'tbd'
        />
      </Form.Group>
    </Col>
  );
};

export default TextInputVertical;
