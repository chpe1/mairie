<template>
  <div>
    <TopHeader />
    <MenuStyle1 />
    <PageHeader pageTitle="Blog" parentPage="Home" />
    <section class="blog-area">
        <div class="container">
            <div class="section-heading text-center mx-auto">
                <h2>Latest Posts</h2>
                <p>We have people of multiple kind in the house. Together we can provide high quality work to satisfy
                    you.</p>
            </div>
            <div class="row">
                <Post
                :category="post1.category"
                :date="post1.date" 
                :postThumbnail="post1.postThumbnail"
                :title="post1.title"
                :Excerpt="post1.excerpt"/>

                <Post
                :category="post2.category"
                :date="post2.date" 
                :postThumbnail="post2.postThumbnail"
                :title="post2.title"
                :Excerpt="post2.excerpt"/>

                <Post
                :category="post3.category"
                :date="post3.date" 
                :postThumbnail="post3.postThumbnail"
                :title="post3.title"
                :Excerpt="post3.excerpt"/>

                <Post
                :category="post4.category"
                :date="post4.date" 
                :postThumbnail="post4.postThumbnail"
                :title="post4.title"
                :Excerpt="post4.excerpt"/>

                <Post
                :category="post5.category"
                :date="post5.date" 
                :postThumbnail="post5.postThumbnail"
                :title="post5.title"
                :Excerpt="post5.excerpt"/>

                <Post
                :category="post6.category"
                :date="post6.date" 
                :postThumbnail="post6.postThumbnail"
                :title="post6.title"
                :Excerpt="post6.excerpt"/>

                <Post
                :category="post7.category"
                :date="post7.date" 
                :postThumbnail="post7.postThumbnail"
                :title="post7.title"
                :Excerpt="post7.excerpt"/>

                <Post
                :category="post8.category"
                :date="post8.date" 
                :postThumbnail="post8.postThumbnail"
                :title="post8.title"
                :Excerpt="post8.excerpt"/>

                <Post
                :category="post9.category"
                :date="post9.date" 
                :postThumbnail="post9.postThumbnail"
                :title="post9.title"
                :Excerpt="post9.excerpt"/>

                <div class="mx-auto mt-60">
                    <a href="javascript:void(0)" class="wow animate__animated animate__flipInX large-blue-button">Load More</a>
                </div>
            </div>
        </div>
    </section>
    <SubscribeForm />
    <Footer />
  </div>
</template>

<script>

import TopHeader from '@/components/layout/TopHeader'
import MenuStyle1 from '@/components/layout/MenuStyle1'
import PageHeader from '@/components/layout/PageHeader'
import Post from '@/components/page_components/blog/PostExcerpt'
import SubscribeForm from '@/components/common/SubscribeForm'
import Footer from '@/components/layout/Footer'

export default {
  name: "Blog",
  components: {
      TopHeader,
      MenuStyle1,
      PageHeader,
      Post,
      SubscribeForm,
      Footer
  },
  data(){
    return {
        post1: {
            category: "News",
            date: "Feb 27, 2020",
            postThumbnail: require('@/assets/blog/post-01.png'),
            title: "Why you should hire UI/UX Guy before work",
            excerpt: "Lorem ipsum, dolor sit amet conse cte tur adipisicing elit. Vitae ipsam provi dent ut quod esse iste quam corrupti."
        },
        post2: {
            category: "Sports",
            date: "Feb 20, 2020",
            postThumbnail: require('@/assets/blog/post-02.png'),
            title: "A good website starts with a good idea and great people",
            excerpt: "Lorem ipsum, dolor sit amet conse cte tur adipisicing elit. Vitae ipsam provi dent ut quod esse iste quam corrupti."
        },
        post3: {
            category: "International",
            date: "January 24, 2020",
            postThumbnail: require('@/assets/blog/post-03.png'),
            title: "Interests in web development arises aroud the world",
            excerpt: "Lorem ipsum, dolor sit amet conse cte tur adipisicing elit. Vitae ipsam provi dent ut quod esse iste quam corrupti."
        },
        post4: {
            category: "Designs",
            date: "April 24, 2020",
            postThumbnail: require('@/assets/blog/post-04.png'),
            title: "How should we start website designing and development",
            excerpt: "Lorem ipsum, dolor sit amet conse cte tur adipisicing elit. Vitae ipsam provi dent ut quod esse iste quam corrupti."
        },
        post5: {
            category: "Technology",
            date: "July 07, 2020",
            postThumbnail: require('@/assets/blog/post-05.png'),
            title: "New technologies that will change the world soon",
            excerpt: "Lorem ipsum, dolor sit amet conse cte tur adipisicing elit. Vitae ipsam provi dent ut quod esse iste quam corrupti."
        },
        post6: {
            category: "Programming",
            date: "October 12, 2020",
            postThumbnail: require('@/assets/blog/post-06.png'),
            title: "Vuejs 3 comes with more and awesome features",
            excerpt: "Lorem ipsum, dolor sit amet conse cte tur adipisicing elit. Vitae ipsam provi dent ut quod esse iste quam corrupti."
        },
        post7: {
            category: "News",
            date: "Feb 27, 2020",
            postThumbnail: require('@/assets/blog/post-07.png'),
            title: "Why you should hire UI/UX Guy before work",
            excerpt: "Lorem ipsum, dolor sit amet conse cte tur adipisicing elit. Vitae ipsam provi dent ut quod esse iste quam corrupti."
        },
        post8: {
            category: "Sports",
            date: "Feb 20, 2020",
            postThumbnail: require('@/assets/blog/post-08.png'),
            title: "A good website starts with a good idea and great people",
            excerpt: "Lorem ipsum, dolor sit amet conse cte tur adipisicing elit. Vitae ipsam provi dent ut quod esse iste quam corrupti."
        },
        post9: {
            category: "Technology",
            date: "July 07, 2020",
            postThumbnail: require('@/assets/blog/post-09.png'),
            title: "New technologies that will change the world soon",
            excerpt: "Lorem ipsum, dolor sit amet conse cte tur adipisicing elit. Vitae ipsam provi dent ut quod esse iste quam corrupti."
        }
    }
  }
};

</script>

<style scoped>
</style>
