import React from "react";

export default class DefinitionsList extends React.Component {
  render() {
    const { data} = this.props;
    if (data.length === 0) {
      return null;
    }

    return (
      <dl>
        {data.map(({dt, dd, id}) =>
          <React.Fragment key={id}>
            <dt>{dt}</dt>
            <dd>{dd}</dd>
          </React.Fragment>
        )}
      </dl>
    )
  }
}