import './App.css'
import { Link as Scroll } from "react-scroll";
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HeroImage } from './components/HeroImage'
import { Commission } from './components/Commission'
import { Mission } from './components/Mission'
import { Customers } from './components/Customers'
import { styled } from 'styled-components'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

function App() {
  const Top = styled(ArrowCircleUpIcon)`
    position: fixed;
    bottom: 20px;
    right: 20px;
    &&:hover{
      bottom: 30px;
      transition: .3s all;
    }
  `;

  return (
    <div>
      <Header/>
      <HeroImage/>
      <Mission/>
      <Customers/>
      <Commission/>
      <Footer/>
      <Scroll to="HeroImage">
        <Top sx={{fontSize: "60px", color: "#00f", opacity: ".65"}}/>
      </Scroll>
    </div>
  )
}

export default App
