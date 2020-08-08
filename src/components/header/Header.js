import React from "react";
import styled from "styled-components";
import mediaQuery from "styled-media-query";
import {Link} from "react-router-dom";


const Header = () => {
  return <Container>
    <Link to="/">
      <TopImage src="images/header/banner.png"/>
    </Link>
    <Menus>
      <Menu/>
      <Menu>product</Menu>
      <Menu>about</Menu>
      <Menu>member</Menu>
      <Menu>events</Menu>
      <Menu>contact</Menu>
    </Menus>

  </Container>
};

const mediaMobile = mediaQuery.lessThan("medium");


const Container = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Menu = styled.p`
  margin-top: 3vh;
  line-height: 0;
`;

const Menus = styled.div`
  display:flex;
  justify-content: space-between;
  width: 70vw;
  margin-right: 3vw;
  font-size: 2rem;
`;

const TopImage = styled.img`
  width: 30vw;
`;

export default Header
