<template>
  <div class="error-page">
    <h1>Coś poszło nie tak...</h1>
    <p>Wróć do <a href="/">strony głównej</a>!</p>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>
