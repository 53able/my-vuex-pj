<template>
  <div>
    <h1>This is Home!</h1>
    <div class="row">
      <div class="column">
        <h3>Hello Component</h3>
        <Hello />
      </div>
      <div class="column">
        <h3>World Component</h3>
        <World />
      </div>
    </div>
  </div>
</template>

<script>
import Hello from "../components/Hello.vue";
import World from "../components/World.jsx";

export default {
  components: {
    Hello,
    World
  }
};
</script>
