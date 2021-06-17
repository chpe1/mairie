<template>
  <div>
    <div class="companies d-flex align-items-center">
      <div class="container">
        <VueSlickCarousel
          v-bind="settings"
          class="row justify-content-between companies-logo"
        >
          <div class="mx-auto">
            <img
              src="@/assets/logo/company-logo/logo-kupa.png"
              class="mx-auto my-auto"
              alt="Habu"
            />
          </div>
          <div class="mx-auto">
            <img
              src="@/assets/logo/company-logo/logo-tarabara.png"
              class="mx-auto my-auto"
              alt="Habu"
            />
          </div>
          <div class="mx-auto">
            <img
              src="@/assets/logo/company-logo/logo-shiram.png"
              class="mx-auto my-auto"
              alt="Habu"
            />
          </div>
          <div class="mx-auto">
            <img
              src="@/assets/logo/company-logo/logo-codex.png"
              class="mx-auto my-auto"
              alt="Habu"
            />
          </div>
          <div class="mx-auto">
            <img
              src="@/assets/logo/company-logo/logo-kupa.png"
              class="mx-auto my-auto"
              alt="Habu"
            />
          </div>
          <div class="mx-auto">
            <img
              src="@/assets/logo/company-logo/logo-tarabara.png"
              class="mx-auto my-auto"
              alt="Habu"
            />
          </div>
          <div class="mx-auto">
            <img
              src="@/assets/logo/company-logo/logo-shiram.png"
              class="mx-auto my-auto"
              alt="Habu"
            />
          </div>
          <div class="mx-auto">
            <img
              src="@/assets/logo/company-logo/logo-codex.png"
              class="mx-auto my-auto"
              alt="Habu"
            />
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

export default {
  name: "CompaniesSlider",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 376,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
</style>
