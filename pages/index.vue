<template>
  <div class="home-page">
    <section class="intro">
      <h1>Zapraszamy do skorzystania z naszej oferty</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
      .filter(post => {
        return post.title.match(this.search);
      })
      .sort(function(a, b) {
        return new Date(b.updatedDate) - new Date(a.updatedDate);
      });     
    }
  },
  created() {

  }
};
</script>


<style scoped>
.intro {
  height: auto;
  position: relative;
  padding: 30px;
  box-sizing: border-box; 
  background-position: center;
  background-size: cover;    
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 1rem;
  }
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.2rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
  margin-top: 7px;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
