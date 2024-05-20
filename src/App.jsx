import { useState } from "react";
import logo from "./assets/logo.png";
import banner from "./assets/banner.png";
import appStore from "./assets/app-store.svg";
import googlePlay from "./assets/google-play.svg";
import food1 from "./assets/food1.png";
import food2 from "./assets/food2.png";
import pasta from "./assets/pasta.png";
import salad from "./assets/salad.png";
import dessert from "./assets/dessert.png";
import bike from "./assets/bike.svg";
import blackQuote from "./assets/black-quote.svg";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a id="logo" href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#">Restaurants</a>
          <a href="#">Recipes</a>
          <a href="#">About</a>
          <div className="dropdown">
            <button type="drop" className="dropbtn">
              Page{" "}
            </button>

            <div className="dropdown-content">
              <a href="#">Page 1</a>
              <a href="#">Page 2</a>
              <a href="#">Page 3</a>
            </div>
          </div>
        </div>
        <div className={`navbar-buttons ${isMenuOpen ? "active" : ""}`}>
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
      </nav>

      <section className="banner">
        <div className="banner-text">
          <h1>Your Favorite Food Delivery Partner</h1>
          <p>
            The food at your doorstep. Why starve when you have us. You hunger
            partner. Straight out of the oven to your doorstep.{" "}
          </p>
          <div className="input-div">
            <input type="text" placeholder="Enter your delivery location" />
            <button className="signup-btn">Order Now</button>
          </div>
          <div className="banner-app">
            <img src={appStore} alt="" />
            <img src={googlePlay} alt="" />
          </div>
        </div>
        <div className="banner-img">
          <div>
            <img src={banner} alt="banner" />
          </div>
        </div>
      </section>

      <section className="orders">
        <h1>
          MORE THAN <span>10,000</span> DISHES <br />
          TO ORDER!
        </h1>
        <p>Welcome to The Biggest Network of Food Ordering & Delivery</p>

        <div className="food">
          <div className="food-card">
            <div className="food-img">
              <img src={logo} alt="" />
            </div>
            Pizza
          </div>
          <div className="food-card">
            <div className="food-img">
              <img src={food1} alt="" />
            </div>
            Burger
          </div>
          <div className="food-card">
            <div className="food-img">
              <img src={food2} alt="" />
            </div>
            Sushi
          </div>
          <div className="food-card-right">
            Find <span className="span1">deals</span>,{" "}
            <span className="span2">free delivery</span>, and more <br />
            from our restaurant partners.
            <div className="food-right-bike">
              <img src={bike} alt="" />
            </div>
          </div>
        </div>

        <div className="food-bottom">
          <div className="food-card">
            <div className="food-img">
              <img src={dessert} alt="" />
            </div>
            Dessert
          </div>
          <div className="food-card">
            <div className="food-img">
              <img src={salad} alt="" />
            </div>
            Salad
          </div>
          <div className="food-card">
            <div className="food-img">
              <img src={pasta} alt="" />
            </div>
            Pasta
          </div>
          <div className="food-card-left">
            <div className="food-left-icon">
              <img src={blackQuote} alt="" />
            </div>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </div>
        </div>
      </section>

      <section className="how-to-order">
        <h1>How To Order?</h1>
        <div className="order-container">
          <div className="options">
            <h1>01</h1>
            <div className="option-card">
              <div>
                <img src={food1} alt="" />
              </div>
              Choose your location
            </div>
          </div>
          <div className="options">
            <h1>01</h1>
            <div className="option-card">
              <div>
                <img src={food1} alt="" />
              </div>
            </div>
          </div>
          <div className="options">
            <h1>01</h1>
            <div className="option-card">
              <div>
                <img src={food1} alt="" />
              </div>
            </div>
          </div>
          <div className="options">
            <h1>01</h1>
            <div className="option-card">
              <div>
                <img src={food1} alt="" />
              </div>
              Choose your location
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
