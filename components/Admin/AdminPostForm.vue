<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Autor</AppControlInput>
    <AppControlInput v-model="editedPost.title">Tytuł postu</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail">Obrazek</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.content">Treść</AppControlInput>
      <AppControlInput
      control-type="textarea"
      v-model="editedPost.previewText">Tekst podglądowy</AppControlInput>
    <AppButton type="submit">Dodaj</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">Anuluj</AppButton>
  </form>
</template>
<script>


export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "",
            title: "",
            thumbnail: "",
            content: "",
            previewText: ""
          }
    };
  },
  methods: {
    onSave() {
      this.$emit('submit', this.editedPost);
    },
    onCancel() {
      this.$router.push("/admin");
    }
  }
};
</script>
