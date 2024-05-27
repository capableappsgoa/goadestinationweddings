import React , {useState, useEffect} from "react";
import "../App.css";
import logo from "../assets/Asset 1.png";
const Navbar = (props) => {
  
  console.log("working =>" + props.setscroll);
  const [scrollClass, setscrollClass] = useState("w-nav-link");
  
  useEffect(() => {
    if(props.setscroll === true){
      setscrollClass("w-nav-link changeColorNavbarOnscroll");
    }else{
      setscrollClass("w-nav-link");
    }
  }, [props.setscroll]);


  
  return (
    <div
      id="navbar"
      data-animation="over-right"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="ban"
      class="navbar w-nav"
    >
      <div class="container w-container">
        <a href="/" class="brand w-nav-brand circle">
          <img
            src={logo}
            loading="lazy"
            sizes="(max-width: 479px) 15vw, (max-width: 767px) 8vw, (max-width: 991px) 7vw, (max-width: 1439px) 48.6875px, (max-width: 1919px) 3vw, 48.6875px"
            alt=""
            id="logo"
            class="image-2"
          />
        </a>
        <nav id="mobileNav" role="navigation" class="nav-menu w-nav-menu">
          <div className="flexcol">
          <a href="#home" class={scrollClass}>
            Home
          </a>
          <a href="#services" class={scrollClass}>
            Services
          </a>
          <a href="#gallery" class={scrollClass}>
            Gallery
          </a>
          <a href="#about-us" class={scrollClass}>
            About us
          </a>
          <a href="#testimonial" class={scrollClass}>
            Testimonial
          </a>
          </div>
        </nav>
        <div class="menu-button w-nav-button">
          <div id="navigation" class="icon w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
