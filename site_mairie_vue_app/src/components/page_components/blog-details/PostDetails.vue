<template>
  <div>
    <section class="blog-details">
        <div class="container">
            <div class="row">
                <!-- Article Area -->
                <div class="col-xl-9">
                    <div class="article-area">
                        <div class="article-title">
                            <h2>Why You Should Hire UI / UX Guy Before You Work On Your Product</h2>
                        </div>
                        <div class="article-details">
                            <div class="article-author">
                                <img src="@/assets/clients/client-02.png" alt="Habu">
                                <h6><a href="javascript:void(0)">Jason Harper</a> | <a href="javascript:void(0)">UI / UX Design</a> | <a href="javascript:void(0)">August
                                        1, 2020</a></h6>
                            </div>
                            <div class="share-article">
                                <h6>SHARE:</h6>
                                <a href="https://www.facebook.com"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
                                <a href="https://twitter.com/"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                                <a href="https://www.google.com/"><font-awesome-icon :icon="['fab', 'google-plus-g']" /></a>
                                <a href="https://www.behance.net/"><font-awesome-icon :icon="['fab', 'behance']" /></a>
                            </div>
                        </div>
                        <div class="article-thumbnail">
                            <img src="@/assets/blog/post-details.png" alt="Habu">
                        </div>
                        <div class="article-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reprehenderit veniam
                                quaerat enim, temporibus praesentium architecto corrupti? Odio illo ut nostrum quos
                                iusto, nesciunt exercitationem molestias. Iste est hic quia voluptas deserunt deleniti
                                eligendi sit illum ea quasi. Officia laborum nihil molestias, quam recusandae aut sed
                                nesciunt rem facere atque tenetur reiciendis tempora delectus ea expedita eveniet
                                voluptatum eos veritatis magnam error temporibus! <br><br>

                                Inventore alias dolorum, eveniet recusandae maxime obcaecati saepe magnam ducimus? Sint
                                hic quas magnam dolorum id architecto alias sunt saepe temporibus iste nobis eaque,
                                molestias ullam ab ducimus corporis officiis velit consectetur sequi! Et fugiat maxime
                                omnis odio quam aliquid magni praesentium iure iste necessitatibus rerum officia ea
                                corporis consectetur fugit, enim laudantium vitae repellendus. Alias, saepe omnis? Eum
                                explicabo temporibus pariatur. Pariatur deleniti commodi cumque magni perspiciatis
                                voluptatibus molestiae laboriosam iste consectetur ducimus eveniet possimus enim,
                                consequatur quisquam, ex velit nam. Ipsa neque eligendi dolor, explicabo id quo, labore
                                minima dicta sunt totam omnis. Rem sint distinctio, nesciunt vitae aliquid nobis
                                molestiae illo eligendi perspiciatis delectus deserunt mollitia, qui hic ea voluptates
                                fugit quasi quod minus ducimus. Excepturi magnam laboriosam ut eum maiores, culpa vitae
                                dolore aliquid alias illum enim est! Doloribus ducimus culpa eveniet blanditiis!</p>

                            <h2 class="article-subheading">Why You Should Hire UI / UX Guy Before You Work On Your
                                Product</h2>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reprehenderit veniam
                                quaerat enim, temporibus praesentium architecto corrupti? Odio illo ut nostrum quos
                                iusto, nesciunt exercitationem molestias. Iste est hic quia voluptas deserunt deleniti
                                eligendi sit illum ea quasi. Officia laborum nihil molestias, quam recusandae aut sed
                                nesciunt rem facere atque tenetur reiciendis tempora delectus ea expedita eveniet
                                voluptatum eos veritatis magnam error temporibus! <br><br>

                                Inventore alias dolorum, eveniet recusandae maxime obcaecati saepe magnam ducimus? Sint
                                hic quas magnam dolorum id architecto alias sunt saepe temporibus iste nobis eaque,
                                molestias ullam ab ducimus corporis officiis velit consectetur sequi! Et fugiat maxime
                                omnis odio quam aliquid magni praesentium iure iste necessitatibus rerum officia ea
                                corporis consectetur fugit, enim laudantium vitae repellendus. Alias, saepe omnis? Eum
                                explicabo temporibus pariatur. Pariatur deleniti commodi cumque magni perspiciatis
                                voluptatibus molestiae laboriosam iste consectetur ducimus eveniet possimus enim,
                                consequatur quisquam, ex velit nam. Ipsa neque eligendi dolor, explicabo id quo, labore
                                minima dicta sunt totam omnis. Rem sint distinctio, nesciunt vitae aliquid nobis
                                molestiae illo eligendi perspiciatis delectus deserunt mollitia, qui hic ea voluptates
                                fugit quasi quod minus ducimus. Excepturi magnam laboriosam ut eum maiores, culpa vitae
                                dolore aliquid alias illum enim est! Doloribus ducimus culpa eveniet blanditiis!</p>

                            <div class="article-tags">
                                <h6>TAGS: </h6>
                                <a href="javascript:void(0)">UI / UX</a><span>,</span>
                                <a href="javascript:void(0)">WEB DESIGN</a>
                            </div>
                        </div>
                        <div class="article-navigation">
                            <a href="javascript:void(0)"><font-awesome-icon :icon="['fas', 'arrow-alt-circle-left']" /> PREVIOUS</a>
                            <a href="javascript:void(0)" class="float-right">NEXT <font-awesome-icon :icon="['fas', 'arrow-alt-circle-right']" /></a>
                        </div>
                        <!-- Comment Area -->
                        <CommentArea />
                    </div>
                </div>

                <!-- Sidebar Area -->
                <div class="col-xl-3">
                    <Sidebar />
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>

import Sidebar from '@/components/layout/Sidebar'
import CommentArea from '@/components/common/CommentArea'

export default {
  name: "PostDetails",
  components: {
      CommentArea,
      Sidebar
  }
};

</script>

<style scoped>
</style>
