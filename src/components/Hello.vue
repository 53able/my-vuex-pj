<template>
  <div>
    <p>Hello.vue</p>
    <ul>
      <li>Text: {{ text }}</li>
      <li>Text Upper: {{ textUpper }}</li>
    </ul>
    <input v-model="text" type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Hello"
    };
  },
  computed: {
    textUpper() {
      return this.text.toUpperCase();
    }
  }
};
</script>
