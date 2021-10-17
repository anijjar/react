import React, { Component, useState, useEffect } from "react";
import styled from "styled-components";
import NavBottom from "./components/NavBottom";

const Wrapper = styled.div`
  background-color: rgb(43, 43, 43);
  display: flex;
  justifyContent: 'space-evenly';
`;
export default function App() {
  const [resume, setResume] = useState(null);
  useEffect(() => {
    fetch("https://gitconnected.com/v1/portfolio/anijjar")
      .then((res) => res.json())
      .then((resume) => {
        setResume(resume);
      });
  }, []);
  if (!resume) {
    return <div />;
  }
  return (
     <NavBottom/>
  );
}
