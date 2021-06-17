<template>
  <div>
    <section class="home-02-banner">
      <VueSlickCarousel v-bind="settings" class="home-slider-2">
        <template #prevArrow>
          <button class="slick-prev slick-arrow">
            <font-awesome-icon :icon="['fas', 'long-arrow-alt-left']" />
          </button>
        </template>
        <div class="home-slider-content-2">
          <div class="container position-relative">
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
                    class="wow animate__animated animate__flipInX animate__delay-1s large-white-button"
                    >Contact Us</a
                  >
                </div>
              </div>
              <div class="col-xl-5 col-lg-6 col-md-6">
                <div
                  class="banner-image wow animate__animated animate__fadeInRight"
                >
                  <div class="banner-video-player">
                    <div class="vid-player-first-layer">
                      <a
                        class="home-2-video"
                        href="javascript:void(0)"
                        @click="showModal = true"
                      >
                        <font-awesome-icon :icon="['fas', 'play-circle']" />
                      </a>
                    </div>
                    <transition name="fade" appear>
                      <div class="modal-overlay" v-if="showModal">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/LMlCN6_vUvs"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                        <button @click="showModal=false">
                          <font-awesome-icon :icon="['fas', 'window-close']" />
                        </button>
                      </div>
                    </transition>
                    <div class="vid-player-second-layer"></div>
                  </div>
                  <img
                    src="@/assets/banner/02_home_banner_img.png"
                    alt="Habu"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="home-slider-content-2">
          <div class="container position-relative">
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
                    class="wow animate__animated animate__flipInX animate__delay-1s large-white-button"
                    >Contact Us</a
                  >
                </div>
              </div>
              <div class="col-xl-5 col-lg-6 col-md-6">
                <div
                  class="banner-image wow animate__animated animate__fadeInRight"
                >
                  <div class="banner-video-player">
                    <div class="vid-player-first-layer">
                      <a
                        class="home-2-video"
                        href="javascript:void(0)"
                        @click="showModal2 = true"
                      >
                        <font-awesome-icon :icon="['fas', 'play-circle']" />
                      </a>
                    </div>
                    <transition name="fade" appear>
                      <div class="modal-overlay" v-if="showModal2">
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/0ZMjIKw2nss" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <button @click="showModal2=false">
                          <font-awesome-icon :icon="['fas', 'window-close']" />
                        </button>
                      </div>
                    </transition>
                    <div class="vid-player-second-layer"></div>
                  </div>
                  <img
                    src="@/assets/banner/02_home_banner_img.png"
                    alt="Habu"
                  />
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
              style="fill: #fff"
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
  name: "BannerStyle2",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      showModal: false,
      showModal2: false,
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

<style scoped>
section.home-02-banner {
  background-image: url("~@/assets/banner/02_home_banner_bg.png");
}

.modal-overlay {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 998;
  width: 100%;
  height: 100%;
  background: #000000;
  cursor: pointer;
}

.modal-overlay button {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  border: none;
  color: red;
  font-size: 30px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 991.5px) {
  section.home-02-banner .banner-image {
    background-image: url("~@/assets/banner/02_home_banner_img.png");
    width: 100%;
  }
}
</style>
