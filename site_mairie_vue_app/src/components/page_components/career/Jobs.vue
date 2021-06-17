<template>
  <div>
    <section class="pricing-area">
        <div class="container">
            <div class="section-heading text-center mx-auto">
                <h2>We Are Hiring</h2>
                <p>We have people of multiple kind in the house. Together we can provide high quality work to satisfy
                    you.</p>
            </div>

            <div class="row">
                <div class="col-lg-6 wow animate__animated animate__fadeInLeft">
                    <div class="price-box">
                        <JobIntro 
                        Title="Web Developer"
                        vacancy="12" />

                        <div class="job-offer">
                            <JobOffer 
                            title="Front End Developer"
                            experience="1 Year"
                            location="NY - 1012, USA" />
                            <JobOffer 
                            title="Back End Developer"
                            experience="3 Years"
                            location="NY - 1011, USA" />
                            <JobOffer 
                            title="Full Stack Developer"
                            experience="5 Years"
                            location="NY - 1010, USA" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 wow animate__animated animate__fadeInRight">
                    <div class="price-box">
                        <JobIntro 
                        Title="Social Media Marketer"
                        vacancy="06" />

                        <div class="job-offer">
                            <JobOffer 
                            title="Facebook Marketer"
                            experience="1 Year"
                            location="NY - 1012, USA" />
                            <JobOffer 
                            title="Linkedin Marketer"
                            experience="3 Years"
                            location="NY - 1011, USA" />
                            <JobOffer 
                            title="Twitter Marketer"
                            experience="2 Years"
                            location="NY - 1010, USA" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 wow animate__animated animate__fadeInLeft">
                    <div class="price-box">
                        <JobIntro 
                        Title="UI / UX Designer"
                        vacancy="08" />

                        <div class="job-offer">
                            <JobOffer 
                            title="App UI Designer"
                            experience="2 Years"
                            location="NY - 1012, USA" />
                            <JobOffer 
                            title="Web UI / UX Designer"
                            experience="3 Years"
                            location="NY - 1011, USA" />
                            <JobOffer 
                            title="Junior Product Designer"
                            experience="2 Years"
                            location="NY - 1010, USA" />
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 wow animate__animated animate__fadeInRight">
                    <div class="price-box">
                        <JobIntro 
                        Title="Email Marketer"
                        vacancy="02" />

                        <div class="job-offer">
                            <JobOffer 
                            title="Email Template Designer"
                            experience="1 Year"
                            location="NY - 1012, USA" />
                            <JobOffer 
                            title="Email Writer"
                            experience="1 Year"
                            location="NY - 1011, USA" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>

import JobIntro from './JobIntro'
import JobOffer from './JobOffer'

export default {
  name: "Jobs",
  components: {
      JobIntro, JobOffer
  }
};

</script>

<style scoped>
</style>
