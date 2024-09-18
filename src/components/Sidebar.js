import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 bg-light" style={{ height: '100vh', width: '250px' }}>
      <h4>Navigation</h4>
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/general">General Info</Nav.Link>
        <Nav.Link href="/settings">Settings</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
