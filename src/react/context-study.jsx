import React from "react";


const companies = [
  {
    id: 1,
    name: 'Google',
    address: {
      street: '1600 Amphitheatre Parkway',
      city: 'Mountain View',
      post: 'CA 94043',
      country: 'USA',
    },
  },
  {
    id: 2,
    name: 'Microsoft',
    address: {
      street: 'One Microsoft Way',
      city: 'Redmond',
      post: 'WA 98052',
      country: 'USA',
    },
  },
];


const CompanyContext = React.createContext({
  companies: [],
  currentCompany: {},
  setCompany: () => {},
});


class CompanyNameComponent extends React.Component {
  static contextType = CompanyContext;

  render() {
    const { name } = this.context;
    return <h1>{name}</h1>
  }
}

class CompanyAddressComponent extends React.Component {
  static contextType = CompanyContext;

  render() {
    const { currentCompany } = this.context;
    const { street, city, post, country } = currentCompany.address;

    return (
      <p>
        {street}
        <br />
        {city}
        <br />
        {post}
        <br />
        {country}
      </p>
    )
  }
}

class CompanySwitcher extends React.Component {
  static contextType = CompanyContext;

  render() {
    const { companies, currentCompany, setCompany } = this.context;

    return (
      <div>
        <h3>Switch Company:</h3>
          {companies.map((company) => (
            <button
              key={company.id}
              onClick={() => setCompany(company)}
              disable={company.name === currentCompany.name}
            >
              {company.name}
            </button>
          ))}
      </div>
    )
  }
}

export class CompanyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentCompany: companies[0]}
  }

  setCompany = (company) => {
    this.setState({currentCompany: company})
  }

  render() {
    const { currentCompany} = this.state;

    return (
      <CompanyContext.Provider value={{companies, currentCompany, setCompany: this.setCompany}}>
        <CompanyNameComponent />
        <CompanyAddressComponent />
        <CompanySwitcher />
      </CompanyContext.Provider>
    )
  }
}