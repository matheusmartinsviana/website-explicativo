/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 60px;
  height: 30px;
  border-radius: 100px;
  border: 2px solid gray;
  position: relative;
  transition: background-color 0.2s;
`;
const SwitchButton = styled.span`
  content: "";
  position: absolute;
  left: 1px;
  width: 24px;
  height: 24px;
  border-radius: 45px;
  transition: 0.2s;
  background: #888;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
    background: #f3f3f3;
  }

  ${SwitchLabel}:active & {
    width: 45px;
  }
`;

const Switch = ({ id, toggled, onChange }) => {
  return (
    <div className="toogle-checkbox-theme">
      <SwitchInput
        className="switch-checkbox"
        id={id}
        type="checkbox"
        checked={toggled}
        onChange={onChange}
      />
      <SwitchLabel className="switch-label" htmlFor={id}>
        <SwitchButton className="switch-button" />
      </SwitchLabel>
    </div>
  );
};

export default Switch;
