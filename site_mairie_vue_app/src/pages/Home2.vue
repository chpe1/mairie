<template>
  <div>
    <MenuStyle2 />
    <BannerStyle2 />
    <FeaturesStyle2 />
    <CompaniesSlider />
    <Services4Column />
    <ProjectsHome />
    <Speciality />
    <PostsHome />
    <Reviews />
    <Footer />
  </div>
</template>

<script>

import MenuStyle2 from '@/components/layout/MenuStyle2'
import BannerStyle2 from '@/components/page_components/home/home_2/BannerStyle2'
import FeaturesStyle2 from '@/components/page_components/home/home_2/FeaturesStyle2'
import CompaniesSlider from '@/components/common/companiesSlider'
import Services4Column from '@/components/page_components/home/home_2/Services4Column'
import ProjectsHome from '@/components/page_components/home/ProjectsHome'
import Speciality from '@/components/page_components/home/Speciality'
import PostsHome from '@/components/page_components/home/PostsHome'
import Reviews from '@/components/common/Reviews'
import Footer from '@/components/layout/Footer'

export default {
  name: "Home2",
  components: {
      MenuStyle2, 
      BannerStyle2,
      FeaturesStyle2,
      CompaniesSlider,
      Services4Column,
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
