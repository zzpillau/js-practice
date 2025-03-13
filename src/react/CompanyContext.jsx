import React from "react";

export const CompanyContext = React.createContext({});

class CompanyNameComponent extends React.Component {
  static contextType = CompanyContext;

  render() {
    const { name } = this.context;
    return (
      <>
        {name}
      </>
    )
  }
}

class CompanyAddressComponent extends React.Component {
  static contextType = CompanyContext;

  render() {
    const { context } = this;
    const { address } = context;

    return (
      <>
        <p>country: {address.country}</p>
        <p>city: {address.city}</p>
        <p>post: {address.post}</p>
      </>
    )
  }
}

export class Company extends React.Component {
  static contextType = CompanyContext;
  static CompanyName = CompanyNameComponent;
  static CompanyAddress = CompanyAddressComponent;

  render() {
    return (
      <div>
        <CompanyNameComponent />
        <hr />
        <CompanyAddressComponent />
      </div>
    )
  }
}