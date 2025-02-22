import { Button } from 'app/App.components/Button/Button.controller'
import * as React from 'react'
import { Link } from 'react-router-dom'

//prettier-ignore
import { HomeContainer, HomePage, HomeStyled } from './Home.style'

export const HomeView = () => {
  return (
    <HomeStyled>
      <HomePage>
        <HomeContainer>

          <section className={"components first"}>
            <div className={"left"}>
              <h1>Build a Web3 App <br /> the fun way!</h1>
              <p>NEAR Academy is an interactive introduction course for web developers looking to explore blockchain integration to their Apps. It is free, and it hands a completion certificate.</p>
              <Link to="/near101/chapter-1">
                <Button text="START ACADEMY" color="primary" />
              </Link>
            </div>
          </section>

          <section className={"components second"}>
            <h1>Join the future</h1>
            <div className={"left"}>
              <img src={'man.svg'} alt="main character" />
              <p>The decentralized internet, or Web3, has been growing at a fast pace since its inception in 2009. It is now a magnet to talent, with more smart developers joining every day. Web3 monthly developers are up +15% over 2020, following investments in venture capital of about 900 Mio USD. </p>
              <p>This is not without similarities to the growth of internet services in the 2000s, and hints at significant development for years to come. Importantly, the infrastructure has matured, and makes it easy to create dApps, the decentralized equivalent to Apps. Do you have NPM installed?</p>
            </div>
            <div className={"button--center"}>
              <Link to="/near101/chapter-1">
                <Button text="JOIN NOW" color="secondary" />
              </Link>
            </div>
          </section>

          <section className={"components third"}>
            <div className={"left"}>
              <h1>Immerse yourself  <br />  in the course narrative</h1>
              <p>You are about to play a web developer at the Meme Museum.</p>
              <p>The year is 2029, the near future; things are not that different from today, except perhaps that life is 80% digital now. Innovation that seemed breakthrough in the early 20s is widely adopted, and so is NEAR protocol in the blockchain space.</p>
              <p>The new NFT Meme museum in Rio de Janeiro is the hottest thing right now. Elon Musk was there at its inauguration last week, that says something.</p>
              <Link to="/near101/chapter-1">
                <Button text="GET STARTED" color="primary" />
              </Link>
            </div>
            <img className={"museum-interior"} src={'museum_interior_x2.svg'} alt="museum interior" />
          </section>

          <footer className={"footer"}>
            <div className={"left"}>
              <img src={'logo-white.svg'} alt="101 labs icon" />
              <p>Made by 101Labs.org</p>
            </div>
            <div className={"right"}>
              <a href={"https://github.com/near"}> <img src={'github.svg'} alt="github icon" /></a>
              <a href={"https://twitter.com/NEARProtocol"}><img src={'twitter.svg'} alt="twitter icon" /></a>
              <a href={"https://t.me/cryptonear"}><img src={'telegram.svg'} alt="telegram icon" /></a>
            </div>
          </footer>

        </HomeContainer>
      </HomePage>
    </HomeStyled>
  )
}
