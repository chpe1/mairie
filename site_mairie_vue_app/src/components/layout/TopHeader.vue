<template>
  <div>
    <div class="top-header d-flex align-items-center">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-xl-4 col-lg-5 col-md-6 col-12">
                    <div class="top-header-contact">
                        <a href="tel:+1(718)73493">
                            <font-awesome-icon :icon="['fas', 'phone-alt']" />+1 (718) 73493
                        </a>
                    </div>
                    <div class="top-header-contact">
                        <a href="mailto:info@example.com">
                            <font-awesome-icon :icon="['fas', 'envelope']" />info@example.com
                        </a>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-0 text-right top-header-social">
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
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
};
</script>

<style scoped>
</style>
