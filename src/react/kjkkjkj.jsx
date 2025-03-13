// @ts-check

import axios from 'axios';
import React from 'react';
import update from 'immutability-helper';
import Item from './Item.jsx';
import routes from './routes.js';

// BEGIN (write your solution here)
// TodoBox.jsx
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      tasks: []
    };
  }

  componentDidMount() {
    this.loadTasks();
  }

  loadTasks = async () => {
    try {
      const { data } = await axios.get(routes.tasksPath());
      const sortedTasks = data.sort((a, b) => b.id - a.id);
      this.setState({ tasks: sortedTasks });
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { input } = this.state;
    if (!input.trim()) return;

    try {
      await axios.post(routes.tasksPath(), { text: input });
      await this.loadTasks();
      this.setState({ input: '' });
    } catch (error) {
      console.error('Error submitting task:', error);
    }
  };

  toggleActivate = (task) => async (e) => {
    e.preventDefault();
    const { id, state } = task;
    const endpoint = state === 'active' 
      ? routes.finishTaskPath(id) 
      : routes.activateTaskPath(id);

    try {
      await axios.patch(endpoint);
      await this.loadTasks();
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  renderActiveTasks = () => {
    const { tasks } = this.state;
    return (
      <div className="todo-active-tasks">
        {tasks
          .filter(task => task.state === 'active')
          .map(task => (
            <Item
              key={task.id}
              task={task}
              taskIndex={tasks.indexOf(task)}
              tasksCount={tasks.length}
              toggleActivate={this.toggleActivate}
            />
          ))}
      </div>
    );
  };

  renderFinishedTasks = () => {
    const { tasks } = this.state;
    return (
      <div className="todo-finished-tasks">
        {tasks
          .filter(task => task.state === 'finished')
          .map(task => (
            <Item
              key={task.id}
              task={task}
              taskIndex={tasks.indexOf(task)}
              tasksCount={tasks.length}
              toggleActivate={this.toggleActivate}
            />
          ))}
      </div>
    );
  };

  render() {
    const { input } = this.state;
    return (
      <div>
        <div className="mb-3">
          <form className="todo-form mx-3" onSubmit={this.handleSubmit}>
            <div className="d-flex col-md-3">
              <input
                type="text"
                value={input}
                className="form-control me-3"
                placeholder="I am going..."
                required
                onChange={this.handleChange}
              />
              <button type="submit" className="btn btn-primary">add</button>
            </div>
          </form>
        </div>
        {this.renderActiveTasks()}
        {this.renderFinishedTasks()}
      </div>
    );
  }
}
// END



// @ts-check
/* eslint-disable react/prefer-stateless-function, jsx-a11y/anchor-is-valid */

import React from 'react';

// BEGIN (write your solution here)
// Item.jsx
export default class Item extends React.Component {
  render() {
    const { task, toggleActivate, taskIndex, tasksCount } = this.props;
    const number = tasksCount - taskIndex;
    
    return (
      <div className="row">
        <div className="col-1">{number}</div>
        <div className="col">
          {task.state === 'finished' ? (
            <s>
              <a href="#" className="todo-task" onClick={toggleActivate(task)}>
                {task.text}
              </a>
            </s>
          ) : (
            <a href="#" className="todo-task" onClick={toggleActivate(task)}>
              {task.text}
            </a>
          )}
        </div>
      </div>
    );
  }
}
// END
