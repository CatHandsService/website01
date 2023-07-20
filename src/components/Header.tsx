import styled from "styled-components";
import { Link as Scroll } from "react-scroll";

import "../App.css"
export const Header = () => {

  const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    height: 60px;
    position: fixed;
    top: 10px;
    left: auto;
    right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
  `;

  const Nav = styled.nav`
    padding-right: 10px;
    display: flex;
  `;

  const Logo = styled.div`
    padding-left: 30px;
    font-size: 40px;
    font-weight: bold;
  `;

  const A = styled.a`
    margin: 0 20px;
    padding: 5px 10px;
    border: 2px solid transparent;
    color: #444;
    font-size: 16px;
    font-weight: bold;
    transition: .5s all;
    &&:hover{
      border: 2px solid #444;
      border-radius: 50px;
    }
  `;

  return (
    <HeaderContainer id="top">
      <Scroll to="HeroImage">
        <Logo>T-easy</Logo>
      </Scroll>
      <Nav>
        <Scroll to="mission">
          <A>Mission</A>
        </Scroll>
        <Scroll to="Customers">
          <A>Customers</A>
        </Scroll>
        <Scroll to="Commission">
          <A>Commission</A>
        </Scroll>
      </Nav>
    </HeaderContainer>
  )
};