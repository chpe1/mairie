<template>
  <div>
    <TopHeader />
    <MenuStyle1 />
    <PageHeader pageTitle="Portfolio Details" parentPage="Pages" />
    <ProjectDetails />
    <CustomProjects />
    <Footer />
  </div>
</template>

<script>
import TopHeader from '@/components/layout/TopHeader'
import MenuStyle1 from '@/components/layout/MenuStyle1'
import PageHeader from '@/components/layout/PageHeader'
import ProjectDetails from '@/components/page_components/portfolio-details/ProjectDetails'
import CustomProjects from '@/components/common/CustomProjects'
import Footer from '@/components/layout/Footer'

export default {
  name: "PortfolioDetails",
  components: {
      TopHeader,
      MenuStyle1,
      PageHeader,
      ProjectDetails,
      CustomProjects,
      Footer
  }
};

</script>

<style scoped>
</style>
