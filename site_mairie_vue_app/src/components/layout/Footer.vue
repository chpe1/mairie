<template>
  <div>
    <section class="footer-area">
        <div class="container position-relative">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6 col-9">
                    <h2>Contact Us</h2>
                    <p>1 (800) 686-6688 <br>suport@wpsmasher.com <br>40 Baria Sreet 133/2 <br>NewYork City, USA <br>Open
                        hours: 8.00-18.00 Mon-Fri</p>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 col-9">
                    <h2>Important</h2>
                    <ul>
                        <li><a href="javascript:void(0)">Home</a></li>
                        <li><a href="javascript:void(0)">About Us</a></li>
                        <li><a href="javascript:void(0)">Pricing</a></li>
                        <li><a href="javascript:void(0)">Work</a></li>
                        <li><a href="javascript:void(0)">Single Service</a></li>
                        <li><a href="javascript:void(0)">Blog</a></li>
                        <li><a href="javascript:void(0)">Contact</a></li>
                        <li><a href="javascript:void(0)">Support</a></li>
                        <li><a href="javascript:void(0)">Career</a></li>
                        <li><a href="javascript:void(0)">Privacy</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-9 col-12">
                    <h2>Our Newsletter</h2>
                    <p>Subscribe to our mailing list to get the up dates to your email inbox</p>
                    <form action="/">
                        <input type="email" placeholder="E-mail">
                        <input type="submit" value="Subscribe">
                    </form>
                    <div class="footer-social mt-30">
                        <a href="https://www.facebook.com">
                            <font-awesome-icon :icon="['fab', 'facebook-f']" />
                        </a>
                        <a href="https://twitter.com/">
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                        </a>
                        <a href="https://www.instagram.com/">
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                        </a>
                        <a href="https://www.youtube.com">
                            <font-awesome-icon :icon="['fab', 'youtube']" />
                        </a>
                        <a href="https://www.snapchat.com/">
                            <font-awesome-icon :icon="['fab', 'snapchat']" class="m-0" />
                        </a>
                    </div>
                </div>
                <a class="go-to-top" href="#"><font-awesome-icon :icon="['fas', 'chevron-up']" /></a>
            </div>
        </div>
    </section>
    <div class="container text-center copyright">
        <p>Copyright ©2020 Themexplosion. All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
</style>
