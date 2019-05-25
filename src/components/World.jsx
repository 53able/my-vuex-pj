export default {
  data() {
    return {
      text: "World!"
    };
  },
  computed: {
    textUpper() {
      return this.text.toUpperCase();
    }
  },
  methods: {
    changeText(newText) {
      this.text = newText;
    }
  },
  render() {
    return (
      <div>
        <p>World.jsx</p>
        <ul>
          <li>Text: {this.text}</li>
          <li>Text Upper: {this.textUpper} </li>
        </ul>
        <input
          on-input={e => this.changeText(e.target.value)}
          value={this.text}
          type="text"
        />
      </div>
    );
  }
};
