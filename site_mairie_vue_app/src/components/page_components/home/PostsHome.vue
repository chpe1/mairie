<template>
  <div>
    <section class="posts-area">
        <div class="container">
            <div class="section-heading text-center mx-auto">
                <h1>Latest Posts</h1>
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
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import Post from '@/components/page_components/blog/PostExcerpt'

export default {
  name: "PostsHome",
  components: {
      Post
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
        }
      }
  }
};
</script>

<style scoped>
</style>
