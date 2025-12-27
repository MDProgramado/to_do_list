import { TodoController } from "./controller/TodoController";
import { TodoModel } from "./model/TodoModel";
import { TodoView } from "./view/TodoView";

const app = new TodoController(new TodoModel(), new TodoView());