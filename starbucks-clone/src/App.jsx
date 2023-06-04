import React from "react";
import { NavLink } from "react-router-dom";

import Header from "./components/Header";
import Banner from "./components/Banner";

import Footer from "./components/Footer";

import imageColumn1 from './Images/1-image--1.jpg'
import imageColumn4 from './Images/4--image-1.jpeg'
import imageColumn5 from './Images/5--image-1.jpeg'

import imageColumn2First from '../src/Images/2--image-1.jpeg'
import imageColumn2Second from '../src/Images/2--image-2.jpeg'

import imageColumn3First from '../src/Images/3--image-1.jpeg'
import imageColumn3Second from '../src/Images/3--image-2.jpg'

function App() {

  const [navToggled, setNavToggled] = React.useState(false)

  // Toggling Nav Burger
  function navToggledFunction() {
    setNavToggled(toggle => !toggle)
  }

  return (
    <div>
      <Header
        toggleFunction={navToggledFunction}
        toggled={navToggled}

      />

      <main>
        <Banner />

        <div className="column--wide">
          <div className="content--wide">
            <div className="column--images" style={{ backgroundImage: `url(${imageColumn1})` }}></div>
            <div className="wide-1 text-box">
              <h1> Gifting Made Easy </h1>
              <h2> Order and send a Starbucks eGift through GLife on GCash today. </h2>
              <div className="button-box">
                <button> Learn More </button>
              </div>

            </div>
          </div>
        </div>

        <div className='column--tall'>

          <div className='first--content'>
            <div className="tall-column--images" style={{ backgroundImage: `url(${imageColumn2First})` }}></div>
            <div className='text-box'>
              <h1> All-out Summer </h1>
              <h2> Welcome the bright, sunny days ahead with Starbucks new lineup of summer stunners. </h2>
              <div className='button-box'>
                <NavLink
                  to="/menu"
                  activeclassname="active">
                  <button> Sip Sip Go </button>
                </NavLink>

              </div>
            </div>
          </div>

          <div className='second--content'>
            <div className="tall-column--images" style={{ backgroundImage: `url(${imageColumn2Second})` }}></div>
            <div className='text-box'>
              <h1> Summer Power-up </h1>
              <h2> Yummy treats for your summer days with new and returning snacks. </h2>
              <div className='button-box'>
                <NavLink
                  to="/menu"
                  activeclassname="active">
                  <button> See More </button>
                </NavLink>

              </div>
            </div>
          </div>

        </div>

        <div className='column--tall'>

          <div className='first--content'>
            <div className="tall-column--images" style={{ backgroundImage: `url(${imageColumn3First})` }}></div>
            <div className='text-box'>
              <h1> Use your reusables today </h1>
              <h2> Fill your favorite drink and go wherever the day takes you. </h2>
              <div className='button-box'>
                <NavLink
                  to="/merchandise"
                  activeclassname="active">
                  <button> Explore </button>
                </NavLink>


              </div>
            </div>
          </div>

          <div className='second--content'>
            <div className="tall-column--images" style={{ backgroundImage: `url(${imageColumn3Second})` }}></div>
            <div className='text-box'>
              <h1> No time to head out? </h1>
              <h2> Have your favorites delivered straight to your doorstep. </h2>
              <div className='button-box'>
                <button> Learn More </button>
              </div>
            </div>
          </div>

        </div>

        <div className="column--wide">
          <div className="content--wide">
            <div className="column--images" style={{ backgroundImage: `url(${imageColumn4})` }}></div>
            <div className="wide-2 text-box">
              <h1> Sweet as you like </h1>
              <h2> Customize your sweetness to suit your wellness needs. *Select beverages only </h2>
            </div>
          </div>
        </div>

        <div className="column--wide">
          <div className="content--wide">
            <div className="wide-3 text-box">
              <h1> Starbucks Stories </h1>
              <h2> Continuing to inspire and nurture the human spirit–one person, one cup and one neighborhood at a time. </h2>
              <div className="button-box">
                <button> Explore </button>
              </div>
            </div>
            <div className="column--images" style={{ backgroundImage: `url(${imageColumn5})` }}></div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}

export default App;
