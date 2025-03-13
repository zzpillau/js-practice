import React from "react";

export const UserContext = React.createContext({});

class GreetingComponent extends React.Component {
  static contextType = UserContext;

  render() {
    const { context } = this;
    const { userName, userId } = context;
    return `Your name is ${userName}, your id is ${userId}`;
  }
}

export class App extends React.Component {
  render() {
    return <GreetingComponent />;
  }
} 

