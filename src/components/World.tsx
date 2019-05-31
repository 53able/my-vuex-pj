import { Component, Vue } from "vue-property-decorator";
@Component
export default class World extends Vue {
  private text: string = "World!";

  get textUpper() {
    return this.text.toUpperCase();
  }
  changeText(newText: string) {
    this.text = newText;
  }
  render(h: Vue.CreateElement): Vue.VNode {
    return (
      <div>
        <p>World.jsx</p>
        <ul>
          <li>Text: {this.text}</li>
          <li>Text Upper: {this.textUpper} </li>
        </ul>
        <input
          on-input={(e: any) => this.changeText(e.target.value)}
          value={this.text}
          type="text"
        />
      </div>
    );
  }
}
