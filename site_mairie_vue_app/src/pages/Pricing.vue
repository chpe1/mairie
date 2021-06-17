<template>
  <div>
    <TopHeader />
    <MenuStyle1 />
    <PageHeader pageTitle="Pricing" parentPage="Home" />
    <section class="pricing-area">
        <div class="container">
            <div class="section-heading text-center mx-auto">
                <h2>The Way We Charge</h2>
                <p>We have people of multiple kind in the house. Together we can provide high quality work to satisfy
                    you.</p>
            </div>

            <div class="row">
                <div class="col-lg-6 wow animate__animated animate__fadeInLeft">
                    <PriceBox 
                    ProjectName="Consultation" 
                    pricePerHour="$40" 
                    />
                </div>
                <div class="col-lg-6 wow animate__animated animate__fadeInRight">
                    <PriceBox 
                    ProjectName="Web Development" 
                    pricePerHour="$65" 
                    />
                </div>
                <div class="col-lg-6 wow animate__animated animate__fadeInLeft">
                    <PriceBox 
                    ProjectName="UI Design" 
                    pricePerHour="$70" 
                    />
                </div>
                <div class="col-lg-6 wow animate__animated animate__fadeInRight">
                    <PriceBox 
                    ProjectName="Social Media Marketing" 
                    pricePerHour="$35" 
                    />
                </div>
                <div class="col-lg-6 wow animate__animated animate__fadeInLeft">
                    <PriceBox 
                    ProjectName="Bug Fixing" 
                    pricePerHour="$20" 
                    />
                </div>
                <div class="col-lg-6 wow animate__animated animate__fadeInRight">
                    <PriceBox 
                    ProjectName="Speed Optimization" 
                    pricePerHour="$45" 
                    />
                </div>
            </div>
        </div>
    </section>
    <CustomProjects />
    <Footer />
  </div>
</template>

<script>

import TopHeader from '@/components/layout/TopHeader'
import MenuStyle1 from '@/components/layout/MenuStyle1'
import PageHeader from '@/components/layout/PageHeader'
import PriceBox from '@/components/page_components/pricing/priceBox'
import CustomProjects from '@/components/common/CustomProjects'
import Footer from '@/components/layout/Footer'

export default {
  name: "Pricing",
  components: {
      TopHeader,
      MenuStyle1,
      PageHeader,
      PriceBox,
      CustomProjects,
      Footer
  }
};

</script>

<style scoped>
</style>
