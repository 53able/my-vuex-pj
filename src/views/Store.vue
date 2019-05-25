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

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState("Foo", ["text"]),
    ...mapGetters("Foo", ["textUpper"])
  },
  methods: {
    ...mapMutations("Foo", ["setText"]),
    changeText(event) {
      this.setText(event.target.value);
    }
  }
};
</script>
