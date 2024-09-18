import { Form, Col } from 'react-bootstrap';
import useHandleBlur from "../hooks/useHandleBlur";

const DateInput = ({ label, name, value="", onChange, colSize }) => {

    const { handleBlur } = useHandleBlur(); // Destructure the hook
    return (
        <Col md={colSize} className="mb-3">
            <Form.Group controlId={name}>
                <Form.Label className="fw-bold">{label}</Form.Label>
                <Form.Control
                    type="date"
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={(e) => handleBlur(e, label)} // Pass the event and label to the hook
                     />
            </Form.Group>
        </Col>
    );
};

export default DateInput;
