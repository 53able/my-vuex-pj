<template>
  <div id="app">
    <div class="container">
      <nav class="row">
        <RouterLink
          to="/"
          exact
          active-class="button-outline"
          class="button column"
          style="margin: 3px;"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/store"
          exact
          active-class="button-outline"
          class="button column"
          style="margin: 3px;"
        >
          Store
        </RouterLink>
      </nav>
    </div>
    <RouterView class="container" />
  </div>
</template>

<style src="milligram/dist/milligram.min.css"></style>
