import { styled } from "styled-components";
import { Link as Scroll } from "react-scroll";
import { Button } from "@mui/material";
import image from "../assets/dog.jpg"


export const HeroImage = () => {
  const FontColor = "#444";

  const HeroImageContainer = styled.div`
    width: 100%;
    height: 620px;
    margin: 0 auto;
    padding-top: 80px;
  `;

  const LeftColumn = styled.div`
    padding: 50px 0 0 150px;
    flex-direction: column;
    position: relative;
    z-index: 2;
  `;

  const H1 = styled.h1`
    width: fit-content;
    margin: 60px 0 10px;
    color: ${FontColor};
    font-size: 80px;
    font-weight: bold;
    line-height: 1.1;
  `;

  const P = styled.p`
    margin: 0;
    color: ${FontColor};
    font-size: 24px;
    font-weight: bold;
  `;

  // const Button = styled.button`
  //   width: 200px;
  //   height: 50px;
  //   margin: 40px 0 0 100px;
  //   border: none;
  //   border-radius: 50px;
  //   background: rgba(0, 0, 255, .65);
  //   color: #fff;
  //   font-size: 24px;
  //   font-weight: bold;
  //   overflow: hidden;
  //   transition: .3s ease;

  //   &&:hover{
  //     border: 2px solid rgba(0, 0, 255, .65);
  //     background-color: #fff;
  //     color: rgba(0, 0, 255, .65);
  //   }
  // `;

  const Img = styled.img`
    width: 100%;
    max-width: 1280px;
    height: 1000px;
    background: url(${image}) 0 0 no-repeat;
    background-size: cover;
    position: absolute;
    top: -300px;
    left: auto;
    right: auto;
    z-index: 1;
  `;

  return (
    <HeroImageContainer id="HeroImage">
      <LeftColumn>
        <H1>WORK <br/> SOLUTIONS</H1>
        <P>Don't you want to go home on time?</P>
        <Scroll to="Commission">
          {/* <Button>Commission</Button> */}
          <Button variant="contained" sx={{width: "200px", height: "50px", margin: "40px 0 0 150px", borderRadius: "50px", fontSize: "20px"}}>
            Commission
          </Button>

        </Scroll>
      </LeftColumn>
      <Img alt="HeroImage" />
    </HeroImageContainer>
  )
};