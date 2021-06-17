<template>
    <div class="col-xl-4 col-lg-4 col-md-8 offset-lg-0 offset-md-2">
                    <div class="post">
                        <div class="post-thumbnail">
                            <a href="javascript:void(0)"><img v-bind:src="postThumbnail" alt="Habu"></a>
                        </div>
                        <div class="post-excerpt">
                            <a href="javascript:void(0)">{{category}}</a>
                            <h2><a href="javascript:void(0)">{{title}}</a></h2>
                            <p>{{Excerpt}}</p>
                            <hr>
                            <div class="post-extra">
                                <p>{{date}}</p>
                                <a href="javascript:void(0)"><font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" /> Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>

export default {
  name: "Post",
  props: [
      'category',
      'title',
      'date',
      'postThumbnail',
      'Excerpt'
  ]
  
};

</script>

<style scoped>
.post-excerpt > a:hover {
    color: rgb(255, 255, 255);
}
</style>