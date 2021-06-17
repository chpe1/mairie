<template>
  <div>
    <TopHeader />
    <MenuStyle1 />
    <BannerStyle1 />
    <FeaturesStyle1 />
    <CompaniesSlider />
    <Services3Column />
    <ProjectsHome />
    <Speciality />
    <PostsHome />
    <Reviews />
    <Footer />
  </div>
</template>

<script>

import TopHeader from '@/components/layout/TopHeader'
import MenuStyle1 from '@/components/layout/MenuStyle1'
import BannerStyle1 from '@/components/page_components/home/home_1/BannerStyle1'
import FeaturesStyle1 from '@/components/page_components/home/home_1/FeaturesStyle1'
import CompaniesSlider from '@/components/common/companiesSlider'
import Services3Column from '@/components/page_components/home/home_1/Services3Column'
import ProjectsHome from '@/components/page_components/home/ProjectsHome'
import Speciality from '@/components/page_components/home/Speciality'
import PostsHome from '@/components/page_components/home/PostsHome'
import Reviews from '@/components/common/Reviews'
import Footer from '@/components/layout/Footer'

export default {
  name: "Home1",
  components: {
      TopHeader,
      MenuStyle1,
      BannerStyle1,
      FeaturesStyle1,
      CompaniesSlider,
      Services3Column,
      ProjectsHome,
      Speciality,
      PostsHome,
      Reviews,
      Footer
  }
};


</script>

<style scoped>
</style>
