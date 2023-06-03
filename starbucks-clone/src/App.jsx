import React from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Poster from "./components/Poster";
import Footer from "./components/Footer";

import dataPoster from "./mainData"

import imageColumn1 from './Images/1-image--1.jpg'
import imageColumn4 from './Images/4--image-1.jpeg'
import imageColumn5 from './Images/5--image-1.jpeg'

function App() {

  const [navToggled, setNavToggled] = React.useState(false)



  const posterElements = dataPoster.map(data => {
    return <Poster
      key={data.id} // Add a unique key prop
      id={data.id}
      title={data.title}
      secondTitle={data.secondTitle}
      desc={data.description}
      secondDesc={data.secondDescription}
      firstImageUrl={data.firstImageUrl}
      secondImageUrl={data.secondImageUrl}
    />
  })

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

        {posterElements}

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
