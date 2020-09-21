import {HashLink} from 'react-router-hash-link';
import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import {Icon, Image, Menu, Segment, Sidebar} from 'semantic-ui-react';
import {useMediaQuery} from "react-responsive";
import {changeLanguage} from "../../stores";


const Header = ({children}) => {
  const [visible, setVisible] = useState(false);
  const isMobile = useMediaQuery({query: '(max-device-width: 768px)'});
  return isMobile ?
    <Sidebar.Pushable style={{transaction: "none", transform: "none"}}>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        vertical
        visible={visible}
        width='thin'
        style={{position: "fixed", width: "100px"}}
      >
        <div style={{
          height: isMobile ? "90vh" : "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          width: "100%"
        }}>
          <div>
            <Menu.Item as={HashLink} to="/#product">
              <Icon name='wrench'/>
              product
            </Menu.Item>
            <Menu.Item as={HashLink} to="/#about">
              <Icon name='question circle'/>
              about
            </Menu.Item>
            <Menu.Item as={HashLink} to="/#member">
              <Icon name='user'/>
              member
            </Menu.Item>
            <Menu.Item as={HashLink} to="/#events">
              <Icon name='calendar alternate outline'/>
              events
            </Menu.Item>
            <Menu.Item as={HashLink} to="/#contact">
              <Icon name='address book outline'/>
              contact
            </Menu.Item>
          </div>
          {/*<div>*/}
          {/*  <Menu.Item as="div">*/}
          {/*    <Icon name="globe"/>*/}
          {/*  </Menu.Item>*/}
          {/*  <Menu.Item as="a" onClick={() => changeLanguage("en")}>*/}
          {/*    English*/}
          {/*  </Menu.Item>*/}
          {/*  <Menu.Item as="a" onClick={() => changeLanguage("ja")}>*/}
          {/*    日本語*/}
          {/*  </Menu.Item>*/}
          {/*</div>*/}
        </div>
      </Sidebar>

      <Sidebar.Pusher>
        <div onClick={() => visible && setVisible(false)}>
          <Banner style={{position: isMobile && "fixed", zIndex: isMobile && "99"}}>
            <div className="ui container">
              <TableContainer>
                <Icon name="sidebar" style={{fontSize: "2rem", margin: "4vh 0 0 0", color: "#897657"}}
                      onClick={() => {
                        !visible && document.addEventListener("click", () => setVisible(false), {once: true});
                        setVisible(!visible)}}/>
              </TableContainer>
            </div>
          </Banner>
          <div>{children}</div>
        </div>
      </Sidebar.Pusher>
    </Sidebar.Pushable> :
    <Container>
      <Link to="/">
        <TopImage src="images/header/banner.png"/>
      </Link>
      <Menus>
        <HashLink to="/#product"><MenuContent>product</MenuContent></HashLink>
        <HashLink to="/#about"><MenuContent>about</MenuContent></HashLink>
        <HashLink to="/#member"><MenuContent>member</MenuContent></HashLink>
        <HashLink to="/#events"><MenuContent>events</MenuContent></HashLink>
        <HashLink to="/#contact"><MenuContent>contact</MenuContent></HashLink>
      </Menus>
    </Container>
};


const Banner = styled.div`
  background-image: url('/images/header/banner.png');
  background-size: cover;
  background-position: center center;
  width: 100vw;
  height: 20vw;
  margin-bottom: 5vh;
  background-color:white; 
`;
const TableContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom:1rem;
`;
const Container = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MenuContent = styled.p`
  margin-top: 3vh;
  line-height: 0;
  color:black;
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
export default Header;
