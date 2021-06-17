<template>
  <div>
    <section class="banner">
      <div class="shape-03 text-center">
        <img
          src="@/assets/shapes/shape-03.png"
          class="wow animate__animated animate__fadeInDown animate__delay-1s"
          alt="Habu"
        />
      </div>

      <VueSlickCarousel v-bind="settings" class="home-slider">
        <template #prevArrow>
          <button class="slick-prev slick-arrow">
            <font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" />
          </button>
        </template>
        <div class="home-slider-content">
          <div class="container position-relative">
            <div class="banner-floating-text">
              <h1
                class="wow animate__animated animate__fadeInDown animate__delay-1s"
              >
                Agency
              </h1>
            </div>
            <div class="row justify-content-between">
              <div class="col-lg-6 col-md-6">
                <div
                  class="banner-text wow animate__animated animate__fadeInDown"
                >
                  <h1>Professional Designers & Developers Under One Roof.</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus, animi voluptate! Voluptatum assumenda eum tempore
                    minus ipsam soluta incidunt odit.
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="wow animate__animated animate__flipInX animate__delay-1s large-blue-button"
                    >Contact Us</a
                  >
                </div>
              </div>
              <div class="col-xl-5 col-lg-6 col-md-6">
                <div
                  class="banner-image wow animate__animated animate__fadeInRight"
                >
                  <img src="@/assets/banner/home_banner.png" alt="Habu" />
                  <div class="shape-0">
                    <img
                      src="@/assets/shapes/shape-0.png"
                      class="wow animate__animated animate__fadeInUp animate__delay-1s"
                      alt="Habu"
                    />
                  </div>
                  <div class="shape-02">
                    <img src="@/assets/shapes/shape-02.png" alt="Habu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="home-slider-content">
          <div class="container position-relative">
            <div class="banner-floating-text">
              <h1
                class="wow animate__animated animate__fadeInDown animate__delay-1s"
              >
                Agency
              </h1>
            </div>
            <div class="row justify-content-between">
              <div class="col-lg-6 col-md-6">
                <div
                  class="banner-text wow animate__animated animate__fadeInDown"
                >
                  <h1>Professional Designers & Developers Under One Roof.</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus, animi voluptate! Voluptatum assumenda eum tempore
                    minus ipsam soluta incidunt odit.
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="wow animate__animated animate__flipInX animate__delay-1s large-blue-button"
                    >Contact Us</a
                  >
                </div>
              </div>
              <div class="col-xl-5 col-lg-6 col-md-6">
                <div
                  class="banner-image wow animate__animated animate__fadeInRight"
                >
                  <img src="@/assets/banner/home_banner.png" alt="Habu" />
                  <div class="shape-0">
                    <img
                      src="@/assets/shapes/shape-0.png"
                      class="wow animate__animated animate__fadeInUp animate__delay-1s"
                      alt="Habu"
                    />
                  </div>
                  <div class="shape-02">
                    <img src="@/assets/shapes/shape-02.png" alt="Habu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <template #nextArrow>
          <button class="slick-next slick-arrow">
            <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" />
          </button>
        </template>
      </VueSlickCarousel>

      <div class="shape-01">
        <img
          src="@/assets/shapes/shape-01.png"
          class="wow animate__animated animate__pulse animate__infinite"
          alt="Habu"
        />
      </div>

      <div class="bottom-arrow text-center">
        <a href="#features-area">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background: new 0 0 512 512"
            xml:space="preserve"
          >
            <path
              style="fill: #1e2a78"
              d="M440.437,301.781L266.656,475.584V10.667C266.656,4.776,261.88,0,255.989,0
               c-5.891,0-10.667,4.776-10.667,10.667v464.917L71.541,301.781c-4.237-4.093-10.99-3.975-15.083,0.262
               c-3.992,4.134-3.992,10.687,0,14.82l192,192c4.16,4.171,10.914,4.179,15.085,0.019c0.006-0.006,0.013-0.013,0.019-0.019l192-192
               c4.093-4.237,3.975-10.99-0.262-15.083c-4.134-3.993-10.687-3.993-14.821,0L440.437,301.781z"
            />
            <path
              d="M255.989,512c-2.831,0.005-5.548-1.115-7.552-3.115l-192-192c-4.093-4.237-3.975-10.99,0.262-15.083
               c4.134-3.992,10.687-3.992,14.82,0l184.469,184.448l184.448-184.448c4.237-4.093,10.99-3.975,15.083,0.262
               c3.993,4.134,3.993,10.687,0,14.821l-192,192C261.521,510.879,258.813,511.999,255.989,512z"
            />
            <path
              d="M255.989,512c-5.891,0-10.667-4.776-10.667-10.667V10.667C245.323,4.776,250.098,0,255.989,0
               c5.891,0,10.667,4.776,10.667,10.667v490.667C266.656,507.224,261.88,512,255.989,512z"
            />
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "BannerStyle1",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: true,
        speed: 1000,
      },
    };
  },
};
</script>

<style>
@media screen and (max-width: 991.5px) {
  .banner-image {
    background-image: url("~@/assets/banner/home_banner.png");
    height: 74%;
    background-position-x: 68%;
    background-size: cover;
  }
}
</style>
