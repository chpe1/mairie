<template>
  <div>
    <TopHeader />
    <MenuStyle1 />
    <PageHeader pageTitle="Portfolio" parentPage="Pages" />
    <Projects />
    <CustomProjects />
    <Footer />
  </div>
</template>

<script>
import TopHeader from '@/components/layout/TopHeader'
import MenuStyle1 from '@/components/layout/MenuStyle1'
import PageHeader from '@/components/layout/PageHeader'
import Projects from '@/components/page_components/portfolio/Projects'
import CustomProjects from '@/components/common/CustomProjects'
import Footer from '@/components/layout/Footer'

export default {
  name: "Portfolio",
  components: {
      TopHeader,
      MenuStyle1,
      PageHeader,
      Projects,
      CustomProjects,
      Footer
  }
};

</script>

<style scoped>
</style>
