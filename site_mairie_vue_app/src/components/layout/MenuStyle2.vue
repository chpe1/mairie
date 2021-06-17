<template>
  <div
    :class="{ menu_header_dark: scrollPosition >= 550 }"
    class="menu-header home-02-menu-header d-flex align-items-center"
  >
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-2 d-flex align-items-center">
          <router-link to="/"
            ><img
              class="logo"
              src="@/assets/logo/site-logo/logo_white.png"
              alt="Habu"
          /></router-link>
        </div>
        <div class="col-10 d-flex align-items-center">
          <nav
            id="mobile-menu"
            class="menu-area d-lg-flex align-items-center ml-auto"
          >
            <ul>
              <router-link to="/" tag="li">
                <a href="javascript:void(0)">Home</a>
                <ul>
                  <router-link to="/" tag="li"
                    ><a href="javascript:void(0)">Home 01</a></router-link
                  >
                  <router-link to="/home2" tag="li"
                    ><a href="javascript:void(0)">Home 02</a></router-link
                  >
                </ul>
              </router-link>
              <router-link to="/about" tag="li"
                ><a href="javascript:void(0)">About</a></router-link
              >
              <router-link to="/pricing" tag="li"
                ><a href="javascript:void(0)">Pricing</a></router-link
              >
              <li>
                <a href="javascript:void(0)">Pages</a>
                <ul>
                  <router-link to="/portfolio" tag="li"
                    ><a href="javascript:void(0)">Portfolio</a></router-link
                  >
                  <router-link to="/portfolio_details" tag="li"
                    ><a href="javascript:void(0)"
                      >Portfolio Details</a
                    ></router-link
                  >
                  <router-link to="/faq" tag="li"
                    ><a href="javascript:void(0)">FAQ</a></router-link
                  >
                  <router-link to="/career" tag="li"
                    ><a href="javascript:void(0)">Career</a></router-link
                  >
                  <router-link to="/contact-us" tag="li"
                    ><a href="javascript:void(0)">Contact Us</a></router-link
                  >
                </ul>
              </li>
              <router-link to="/blog" tag="li">
                <a href="javascript:void(0)">Blog</a>
                <ul>
                  <router-link to="/blog-details" tag="li"
                    ><a href="javascript:void(0)">Blog Details</a></router-link
                  >
                </ul>
              </router-link>
            </ul>
          </nav>
          <div class="mobile-menu-button ml-auto">
            <button @click="mobileMenu = !mobileMenu">
              <font-awesome-icon :icon="['fas', 'bars']" />
            </button>
          </div>
          <router-link to="/contact-us" class="large-white-button menu-button"
            >Get a quote</router-link
          >
        </div>
      </div>
      <transition
        enter-active-class="animate__animated animate__fadeInLeft"
        leave-active-class="animate__animated animate__fadeOutLeft"
      >
        <div class="mobile-menu-area" v-show="mobileMenu">
          <particles />
          <div class="mobile-menu-components">
            <div class="row justify-content-between mobile-menu-header">
              <div class="col-6 d-flex align-items-center">
                <h1>Explore Us</h1>
              </div>
              <div class="col-6 d-flex align-items-center">
                <button @click="mobileMenu = false" class="ml-auto">
                  <font-awesome-icon :icon="['fas', 'times']" />
                </button>
              </div>
            </div>

            <nav class="mobile-menu mx-auto">
              <ul>
                <li>
                  <a href="javascript:void(0)" v-b-toggle.collapseHome>Home</a>
                  <b-collapse id="collapseHome">
                    <ul>
                      <router-link to="/" tag="li"
                        ><a href="javascript:void(0)">Home 01</a></router-link
                      >
                      <router-link to="/home2" tag="li"
                        ><a href="javascript:void(0)">Home 02</a></router-link
                      >
                    </ul>
                  </b-collapse>
                </li>
                <router-link to="/about" tag="li"
                  ><a href="javascript:void(0)">About</a></router-link
                >
                <router-link to="/pricing" tag="li"
                  ><a href="javascript:void(0)">Pricing</a></router-link
                >
                <li>
                  <a href="javascript:void(0)" v-b-toggle.collapsePages
                    >Pages</a
                  >
                  <b-collapse id="collapsePages">
                    <ul>
                      <router-link to="/portfolio" tag="li"
                        ><a href="javascript:void(0)">Portfolio</a></router-link
                      >
                      <router-link to="/portfolio_details" tag="li"
                        ><a href="javascript:void(0)"
                          >Portfolio Details</a
                        ></router-link
                      >
                      <router-link to="/faq" tag="li"
                        ><a href="javascript:void(0)">FAQ</a></router-link
                      >
                      <router-link to="/career" tag="li"
                        ><a href="javascript:void(0)">Career</a></router-link
                      >
                      <router-link to="/contact-us" tag="li"
                        ><a href="javascript:void(0)"
                          >Contact Us</a
                        ></router-link
                      >
                    </ul>
                  </b-collapse>
                </li>
                <li>
                  <a href="javascript:void(0)" v-b-toggle.collapseBlog>Blog</a>
                  <b-collapse id="collapseBlog">
                    <ul>
                      <router-link to="/blog" tag="li">
                        <a href="javascript:void(0)">Blog</a>
                      </router-link>
                      <router-link to="/blog-details" tag="li"
                        ><a href="javascript:void(0)"
                          >Blog Details</a
                        ></router-link
                      >
                    </ul>
                  </b-collapse>
                </li>
              </ul>
            </nav>

            <p>Copyright ©2020 Themexplosion. <br>All Rights Reserved</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import particles from "@/components/common/particles.vue";
export default {
  name: "MenuStyle2",
  components: {
    particles,
  },
  data: function () {
    return {
      scrollPosition: null,
      mobileMenu: false,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped>
.mobile-menu-button button {
  color: #fff;
}
</style>
