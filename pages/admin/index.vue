<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Dodaj wiadomość</AppButton>
      <AppButton style="margin-left: 20px" @click="onLogout">Wyloguj</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Wiadomości dla klientów</h1>
      <PostList 
      isAdmin 
      :posts="loadedPosts"/>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
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
  methods: {
    onLogout() {
      this.$store.dispatch('logout');
      this.$router.push('/admin/auth')
    }
  }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>

