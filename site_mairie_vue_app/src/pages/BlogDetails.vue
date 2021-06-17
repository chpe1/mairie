<template>
  <div>
    <TopHeader />
    <MenuStyle1 />
    <PageHeader pageTitle="Blog Details" parentPage="Blog" />
    <PostDetails />
    <SubscribeForm />
    <Footer />
  </div>
</template>

<script>

import TopHeader from '@/components/layout/TopHeader'
import MenuStyle1 from '@/components/layout/MenuStyle1'
import PageHeader from '@/components/layout/PageHeader'
import PostDetails from '@/components/page_components/blog-details/PostDetails.vue'
import SubscribeForm from '@/components/common/SubscribeForm'
import Footer from '@/components/layout/Footer'

export default {
  name: "BlogDetails",
  components: {
      TopHeader,
      MenuStyle1,
      PageHeader,
      PostDetails,
      SubscribeForm,
      Footer
  }
};

</script>

<style scoped>
</style>
