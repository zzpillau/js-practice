import React from "react";

const getCard = ({ title, text }) => {
  if (!title && !text) {
    return null;
  }

  const titleDom = title && <h4 className='card-title'>{title}</h4>;
  const textDom = text && <p className="card-text">{text}</p>;

  return (
    <div className="card">
      <div className="card-body">
        {titleDom}
        {textDom}
        <button type="button" className="btn btn-primary">Go</button>
      </div>
    </div>
  )
}

export default getCard;