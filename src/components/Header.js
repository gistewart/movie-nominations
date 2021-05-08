import React from "react";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  // return <div className="heading">The Shoppies</div>;
  return (
    <Navbar bg="primary" variant="dark" className="justify-content-center">
      <Navbar.Brand href="#home">The Shoppies</Navbar.Brand>
    </Navbar>
  );
}
