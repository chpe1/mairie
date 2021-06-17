<template>
  <div>
    <TopHeader />
    <MenuStyle1 />
    <PageHeader pageTitle="Career" parentPage="Pages" />
    <Jobs />
    <CustomProjects />
    <Footer />
  </div>
</template>

<script>

import TopHeader from '@/components/layout/TopHeader'
import MenuStyle1 from '@/components/layout/MenuStyle1'
import PageHeader from '@/components/layout/PageHeader'
import Jobs from '@/components/page_components/career/Jobs'
import CustomProjects from '@/components/common/CustomProjects'
import Footer from '@/components/layout/Footer'

export default {
  name: "Career",
  components: {
      TopHeader,
      MenuStyle1,
      PageHeader,
      Jobs,
      CustomProjects,
      Footer
  }
};

</script>

<style scoped>
</style>
