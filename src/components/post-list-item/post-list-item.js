import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./post-list-item.sass";

export default class PostListItem extends Component {
  render() {
    const {
      label,
      onDelete,
      onToggleImportant,
      onToggleLiked,
      important,
      like,
    } = this.props;
    let classNames = "app-list-item d-flex justify-content-between";

    if (important === true) {
      classNames += " important";
    }

    if (like === true) {
      classNames += " like";
    }
    return (
      <div className={classNames}>
        <span onClick={onToggleLiked} className="app-list-item-label">
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={onToggleImportant}
          >
            <FontAwesomeIcon icon="star" />
          </button>
          <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
            <FontAwesomeIcon icon="trash" />
          </button>
          <FontAwesomeIcon icon="heart" />
        </div>
      </div>
    );
  }
}
