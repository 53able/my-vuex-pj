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

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Hello extends Vue {
  private text: string = "Hello";
  get textUpper() {
    return this.text.toUpperCase();
  }
}
</script>
