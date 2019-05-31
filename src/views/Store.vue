<template>
  <div>
    <h1>Store Module Foo</h1>
    <div class="row">
      <div class="column">
        <h3>Text from State</h3>
        <p>{{ text }}</p>
      </div>
      <div class="column">
        <h3>Text from State Getter</h3>
        <p>{{ textUpper }}</p>
      </div>
    </div>
    <h3>Change Text Inside Module</h3>
    <input type="text" :value="text" @input="changeText" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

const fooModule = namespace("Foo");

@Component
export default class Store extends Vue {
  @fooModule.State
  private text!: string;

  @fooModule.Getter
  private textUpper!: string;

  @fooModule.Mutation
  private setText!: (newText: string) => void;

  changeText(event: any): void {
    this.setText(event.target.value);
  }
}
</script>
