import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => {
  return (
    <div
      className={`menu-item menu-item--${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="menu-item__background-image"
        style={{ backgroundImage: `URL(${imageUrl})` }}
      />
      <div className="menu-item__content">
        <h1 className="title">{title}</h1>
        <span className="sub-title">shop now</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
