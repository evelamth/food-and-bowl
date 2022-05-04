import React from "react";
import { Dropdown } from "react-bootstrap";

function DropdownFood() {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Food
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Item1</Dropdown.Item>
          <Dropdown.Item>Item2</Dropdown.Item>
          <Dropdown.Item>Item3</Dropdown.Item>
          <Dropdown.Item>Item4</Dropdown.Item>
          <Dropdown.Item>Item5</Dropdown.Item>
          <Dropdown.Item>Item6</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default DropdownFood;
