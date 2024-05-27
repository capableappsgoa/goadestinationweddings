import React from "react";

const Section1 = () => {
  return (
    <section id="home" class="section">
      <div class="w-layout-blockcontainer container-2 w-container">
        <div class="box">
          <h1 class="heading">
            Best<span class="text-span">Wedding Planner</span>Services !
          </h1>
          <p class="paragraph">
            Its your special day let us plan and make the most memorable day for
            you as you live it.
          </p>
          <div class="div-block">
            <a href="https://wa.me/9156237438" class="button w-button">
              Contact Us
            </a>
          </div>
        </div>
        <div class="box">
          <img
            src="https://assets-global.website-files.com/65d4aaefe59bed6be4138a09/65d4b50662179da299357552_hero%20image.png"
            loading="lazy"
            width="Auto"
            sizes="(max-width: 767px) 90vw, (max-width: 991px) 85vw, (max-width: 1279px) 470px, (max-width: 1439px) 580px, 645px"
            alt=""
            srcset="
            https://assets-global.website-files.com/65d4aaefe59bed6be4138a09/65d4b50662179da299357552_hero%20image-p-500.png 500w,
            https://assets-global.website-files.com/65d4aaefe59bed6be4138a09/65d4b50662179da299357552_hero%20image.png       800w
          "
            class="image-3"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;