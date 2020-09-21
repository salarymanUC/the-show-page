import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <Container>
    <CopyRight>Copyright ©CHANT-THROUGH Ltd. All Right Reserved.</CopyRight>
  </Container>
};

const Container = styled.div`
    background-color: #565554;
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const CopyRight = styled.span`
  color: #FFFFFF;
  padding-bottom: 3vh;
`;

export default Footer;
