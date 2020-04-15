export default class Todo {
  constructor(title) {
    this.title = title;
    this.id = Date.now().toString();
    this.description = '';
  }
}
