import React from "react";

import { data } from "./data";
import "./drag.css";
class DragExp extends React.Component {
  state = {
    todos: [],
    completedTodos: [],
    selectedTodo: {}
  };

  componentDidMount() {
    this.setState({
      todos: data
    });
  }

  onDrag = (e, todo) => {
    e.preventDefault();
    this.setState({
      selectedTodo: todo
    });
  };

  onDragOverCompletedTodo = e => {
    e.preventDefault();
  };

  onDragOverIncompletedTodo = e => {
    e.preventDefault();
  };

  onDropCompletedTodo = e => {
    e.preventDefault();
    let { selectedTodo } = this.state;
    !this.state.completedTodos.find(el => el.todoId === selectedTodo.todoId) &&
      this.setState({
        completedTodos: this.state.completedTodos.concat(selectedTodo),
        todos: this.state.todos.filter(el => el.todoId !== selectedTodo.todoId),
        selectedTodo: {}
      });
  };

  onDropIncompletedTodo = e => {
    e.preventDefault();
    let { selectedTodo } = this.state;
    !this.state.todos.find(el => el.todoId === selectedTodo.todoId) &&
      this.setState({
        completedTodos: this.state.completedTodos.filter(
          el => el.todoId !== selectedTodo.todoId
        ),
        todos: this.state.todos.concat(selectedTodo),
        selectedTodo: {}
      });
  };

  onDragStart = (e, index) => {
    this.draggedItem = this.state.todos[index];
  };

  onDragEnd = () => {
    this.draggedIdx = null;
  };

  onDragOver = index => {
    const draggedOverItem = this.state.todos[index];

    // if the item is dragged over itself, ignore
    if (this.draggedItem === draggedOverItem) {
      return;
    }

    // filter out the currently dragged item
    let items = this.state.todos.filter(item => item !== this.draggedItem);

    // add the dragged item after the dragged over item
    items.splice(index, 0, this.draggedItem);

    this.setState({ todos: items });
  };
  render() {
    let { todos, completedTodos } = this.state;
    return (
      <div className="drag-container">
        <div
          className="incompleted"
          onDragOver={e => this.onDragOverIncompletedTodo(e)}
          onDrop={e => this.onDropIncompletedTodo(e)}
        >
          {todos.map((el, i) => {
            return (
              <div
                key={i}
                className="todo-item"
                onDragOver={() => this.onDragOver(i)}
              >
                <div
                  draggable
                  onDrag={e => this.onDrag(e, el)}
                  onDragStart={e => this.onDragStart(e, i)}
                  onDragEnd={this.onDragEnd}
                >
                  {el.todo}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="completed"
          onDragOver={e => this.onDragOverCompletedTodo(e)}
          onDrop={e => this.onDropCompletedTodo(e)}
        >
          {completedTodos.map((el, i) => {
            return (
              <div
                key={i}
                className="todo-item"
                draggable
                onDrag={e => this.onDrag(e, el)}
              >
                {el.todo}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DragExp;
