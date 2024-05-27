import React, { useEffect, useState } from "react";
import $ from "jquery";
import Navbar from "./components/Navbar";
import flowerline from "../src/assets/photos/flowerline.png";
// import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Chatbot from "./components/Chatbot";
import { motion, useAnimation } from "framer-motion";
import { Analytics } from '@vercel/analytics/react';
 

import {
  Animator,
  Fade,
  FadeUp,
  FadeIn,
  FadeOut,
  ZoomInVar,
  MoveIn,
  MoveOut,
  Move,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  ZoomIn,
  batch,
} from "react-scroll-motion";
import Carousle from "./components/Carousle";
import BackgroundVideo from "./components/BackgroundVideo";
const App = () => {

  const [setscroll, setsetscroll] = useState(false);

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 100,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    });
  }, [controls]);

  useEffect(() => {
    // NAVBAR CODE
    const navbar = document.getElementById("navbar");
    $(window).scroll(function(event) {
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        navbar.style.boxShadow = "none";
        navbar.style.backgroundColor = "#fff0";
        setsetscroll(false);
      }
      if (scroll > 100) {
        navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, .2)";
        navbar.style.backgroundColor = "#ffffffde";
        navbar.style.Color = "black";
        setsetscroll(true);
      }
    });
  }, []);
  console.log(setscroll);
  return (
    <div className="App">
      <Navbar setscroll={setscroll} />
      <BackgroundVideo />
      <img src={flowerline} alt="" />
      <Section2 />
      <Section3 />
      <Carousle />
      <Section4 />
      <Section5 />
      <Section6 />
      {/* <Chatbot /> */}
      <Analytics />
    </div>
  );
};

export default App;
