<template>
  <div>
    <TopHeader />
    <MenuStyle1 />
    <PageHeader pageTitle="Frequently Asked Questions" parentPage="Pages" />
    <Questions />
    <CustomProjects />
    <Footer />
  </div>
</template>

<script>

import TopHeader from '@/components/layout/TopHeader'
import MenuStyle1 from '@/components/layout/MenuStyle1'
import PageHeader from '@/components/layout/PageHeader'
import Questions from '@/components/page_components/faq/Questions'
import CustomProjects from '@/components/common/CustomProjects'
import Footer from '@/components/layout/Footer'

export default {
  name: "Faq",
  components: {
      TopHeader,
      MenuStyle1,
      PageHeader,
      Questions,
      CustomProjects,
      Footer
  }
};

</script>

<style scoped>

</style>
