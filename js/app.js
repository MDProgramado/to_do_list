import { TodoController } from "./controller/TodoController.js";
import { TodoModel } from "./model/TodoModel.js";
import { TodoView } from "./view/TodoView.js";

const app = new TodoController(new TodoModel(), new TodoView());