import { VuexModule, Module, Mutation } from "vuex-module-decorators";

@Module({
  namespaced: true
})
export default class Foo extends VuexModule {
  public text: string = "inside module store";

  @Mutation
  setText(newText: string): void {
    this.text = newText;
  }

  get textUpper(): string {
    return this.text.toUpperCase();
  }
}
