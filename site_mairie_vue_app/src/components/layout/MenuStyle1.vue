<template>
  <div
    :class="{ menu_header_dark: scrollPosition >= 550 }"
    class="menu-header d-flex align-items-center"
  >
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-2 d-flex align-items-center">
          <router-link to="/"
            ><img
              class="logo"
              :src="
                isDefaultImage
                  ? require('@/assets/logo/site-logo/logo.png')
                  : require('@/assets/logo/site-logo/logo_white.png')
              "
              alt="Habu"
          /></router-link>
        </div>
        <div class="col-10 d-flex align-items-center">
          <nav class="menu-area d-lg-flex align-items-center ml-auto">
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
          <router-link to="/contact-us" class="large-blue-button menu-button"
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
  name: "MenuStyle1",
  components: {
    particles,
  },
  data: function () {
    return {
      scrollPosition: null,
      isDefaultImage: true,
      mobileMenu: false,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;

      if (window.scrollY > 550) {
        return (this.isDefaultImage = false);
      }
      if (window.scrollY <= 550) {
        if (!this.defaultImage) {
          return (this.isDefaultImage = true);
        }
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>

<style>
.mobile-menu-button button {
  color: rgb(30, 42, 120);
  border: none;
  background: transparent;
  font-size: 25px;
  padding: 0px 15px;
}
.menu_header_dark .mobile-menu-button button {
  color: #fff;
}
.mobile-menu-button {
  display: none;
}

.mobile-menu-area {
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  color: #647589;
  width: 100%;
  height: min-content;
  height: -webkit-min-content;
  height: -moz-min-content;
  z-index: 1000;
}
.mobile-menu-area button {
  background: transparent;
  border: none;
  color: #fff;
  font-size: 30px;
}
nav.mobile-menu {
  width: 100%;
  overflow-y: scroll;
}
nav.mobile-menu ul {
  list-style: none;
  padding-left: 17px;
}
nav.mobile-menu a {
  font-size: 18px;
  font-family: "Rubik", sans-serif;
  font-weight: 400;
  color: #b5b5b5;
  line-height: 2.05em;
  padding: 5px 0;
}
nav.mobile-menu ul li.current-menu-item > a,
nav.mobile-menu ul li a:hover {
  color: #fff;
}
.mobile-menu-components {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.mobile-menu-components p {
  padding: 0 15px;
}

.mobile-menu-header {
  height: 90px;
}
.mobile-menu-header h1 {
  color: #fff;
  font-size: 27px;
  margin: 0;
}

@media screen and (max-width: 991px) {
  .mobile-menu-button {
    display: inherit;
  }
}
</style>
