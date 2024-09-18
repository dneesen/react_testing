import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import TextInputHorizontal from "./formelements/TextInputHorizontal";
import TextInputVertical from "./formelements/TextInputVertical";
import DateInput from "./formelements/DateSelector";
import DropdownVertical from "./formelements/DropdownVertical";
import DropdownHorizontal from "./formelements/DropdownHorizontal";
import useDropdownOptions from "../components/hooks/DropdownValues";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    jobNumber: "",
    projectName: "",
    salesRepName: "",
    orderDate: "",
    state: "",
    modelNumber: "",
    requestedDeliveryDate: "",
    dateShipped: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const {
    drawingStatusOptions,
    projectStatusOptions,
    projectManagerOptions,
    mechanicalEngineerOptions,
    electricalEngineerOptions,
    controlsEngineerOptions,
    stationTypeOptions,
    siteVoltageOptions,
    stationConfigurationOptions,
    powerConfigurationOptions,
    primeSystemOptions,
    fccTypeOptions,
    regulatoryComplianceOptions,
    stationLocationOptions,
    colorOptions,
    flowMeterLocationOptions,
    trackerTypeOptions,
    electricalEnclosureLocationOptions,
  } = useDropdownOptions();

  return (
    <Form onSubmit={handleSubmit} className="container mt-4">
      <Row>
        <Col>
          {" "}
          <TextInputVertical
            label="Job Number"
            name="jobNumber"
            value={formData.jobNumber}
            onChange={handleChange}
            placeholder="Enter Job Number"
          />
        </Col>
        <Col>
          {" "}
          <TextInputVertical
            label="Project Name"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="Enter Project Name"
          />
        </Col>
        <Col>
          {" "}
          <TextInputVertical
            label="Sales Rep Name"
            name="salesRepName"
            value={formData.salesRepName}
            onChange={handleChange}
            placeholder="Enter Sales Rep Name"
          />
        </Col>
        <Col>
          {" "}
          <DateInput
            label="Order Date"
            name="orderDate"
            value={formData.orderDate}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInputVertical
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="Enter State"
          />
        </Col>
        <Col>
          {" "}
          <TextInputVertical
            label="Model Number"
            name="modelNumber"
            value={formData.modelNumber}
            onChange={handleChange}
            placeholder="Enter Model Number"
          />
        </Col>
        <Col>
          {" "}
          <DateInput
            label="Requested Delivery Date"
            name="requestedDeliveryDate"
            value={formData.requestedDeliveryDate}
            onChange={handleChange}
          />
        </Col>
        <Col>
          {" "}
          <DateInput
            label="Date Shipped"
            name="dateShipped"
            value={formData.dateShipped}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <DropdownVertical
            label="Drawing Status"
            name="drawingStatus"
            value={formData.drawingStatus}
            onChange={handleChange}
            options={drawingStatusOptions}
          />
        </Col>
        <Col>
          <DropdownVertical
            label="Project Status"
            name="projectStatus"
            value={formData.projectStatus}
            onChange={handleChange}
            options={projectStatusOptions}
          />
        </Col>
        <Col>
          <DateInput
            label="CSO Due Date"
            name="csoDueDate"
            value={formData.csoDueDate}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <DateInput
            label="Release Meeting Date"
            name="releaseMeetingDate"
            value={formData.releaseMeetingDate}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <DropdownVertical
            label="Project Manager"
            name="projectManager"
            value={formData.projectManager}
            onChange={handleChange}
            options={projectManagerOptions}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <DropdownHorizontal
            label="Mechanical Engineer"
            name="mechanicalEngineer"
            value={formData.mechanicalEngineer}
            onChange={handleChange}
            options={mechanicalEngineerOptions}
          />
        </Col>
        <Col>
          <DropdownHorizontal
            label="Electrical Engineer"
            name="electricalEngineer"
            value={formData.electricalEngineer}
            onChange={handleChange}
            options={electricalEngineerOptions}
          />
        </Col>
        <Col>
          <DropdownHorizontal
            label="Controls Engineer"
            name="controlsEngineer"
            value={formData.controlsEngineer}
            onChange={handleChange}
            options={controlsEngineerOptions}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <DropdownHorizontal
            label="Station Type"
            name="stationType"
            value={formData.stationType}
            onChange={handleChange}
            options={stationTypeOptions}
          />
        </Col>
        <Col>
          <DropdownHorizontal
            label="Site Voltage"
            name="siteVoltage"
            value={formData.siteVoltage}
            onChange={handleChange}
            options={siteVoltageOptions}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <DropdownHorizontal
            label="Station Configuration"
            name="stationConfiguration"
            value={formData.stationConfiguration}
            onChange={handleChange}
            options={stationConfigurationOptions}
          />
        </Col>
        <Col>
          <DropdownHorizontal
            label="Power Configuration"
            name="powerConfiguration"
            value={formData.powerConfiguration}
            onChange={handleChange}
            options={powerConfigurationOptions}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <DropdownHorizontal
            label="Prime System"
            name="primeSystem"
            value={formData.primeSystem}
            onChange={handleChange}
            options={primeSystemOptions}
          />
        </Col>
        <Col>
          <TextInputHorizontal
            label="SCCR Rating"
            name="sccrRating"
            value={formData.sccrRating}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <TextInputHorizontal
            label="Dynamic Inlet PSI"
            name="dynamicInletPsi"
            value={formData.dynamicInletPsi}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <DropdownHorizontal
            label="FCC Type"
            name="fccType"
            value={formData.fccType}
            onChange={handleChange}
            options={fccTypeOptions}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <DropdownHorizontal
            label="Regulatory Compliance"
            name="regulatoryCompliance"
            value={formData.regulatoryCompliance}
            onChange={handleChange}
            options={regulatoryComplianceOptions}
          />
        </Col>
        <Col>
          <TextInputHorizontal
            label="Feet of Lift"
            name="feetOfLift"
            value={formData.feetOfLift}
            onChange={handleChange}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <DropdownHorizontal
            label="Station Location"
            name="stationLocation"
            value={formData.stationLocation}
            onChange={handleChange}
            options={stationLocationOptions}
          />
        </Col>
        <Col>
          <TextInputHorizontal
            label="Site Elevation"
            name="siteElevation"
            value={formData.siteElevation}
            onChange={handleChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <DropdownHorizontal
            label="Color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            options={colorOptions}
          />
        </Col>
        <Col>
          <DropdownHorizontal
            label="Flow Meter Location"
            name="flowMeterLocation"
            value={formData.flowMeterLocation}
            onChange={handleChange}
            options={flowMeterLocationOptions}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <DropdownHorizontal
            label="Tracker Type"
            name="trackerType"
            value={formData.trackerType}
            onChange={handleChange}
            options={trackerTypeOptions}
          />
        </Col>
        <Col>
          <TextInputHorizontal
            label="Discharge PSI"
            name="dischargePsi"
            value={formData.dischargePsi}
            onChange={handleChange}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <TextInputHorizontal
            label="Total GPM"
            name="totalGpm"
            value={formData.totalGpm}
            onChange={handleChange}
          />
        </Col>
        <Col>
          <TextInputHorizontal
            label="Wet Well Depth"
            name="wetWellDepth"
            value={formData.wetWellDepth}
            onChange={handleChange}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <DropdownHorizontal
            label="Electrical Enclosure Location"
            name="electricalEnclosureLocation"
            value={formData.electricalEnclosureLocation}
            onChange={handleChange}
            options={electricalEnclosureLocationOptions}
          />
        </Col>
        <Col>
          <TextInputHorizontal
            label="Comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default FormComponent;
