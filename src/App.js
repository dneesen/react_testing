import { Accordion } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import GeneralPage from "./pages/generalPage";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div>
      <Header />
      <Container fluid>
        <Row>
          {/* Sidebar Column */}
          <Col xs={2} className="bg-light">
            <Sidebar />
          </Col>
          <Col xs={10}>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey='1'>
            <Accordion.Header>General Info</Accordion.Header>
              <GeneralPage />
              </ Accordion.Item>
            <Accordion.Item eventKey='2'>
            <Accordion.Header>General Info</Accordion.Header>
              <GeneralPage />
              </ Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
