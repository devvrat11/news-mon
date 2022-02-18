import PropTypes from "prop-types";
import React, { Component } from "react";

export class NewsItem extends Component {
  static propTypes = {};

  render() {
    let {title,desc,imageUrl,newsUrl,date,author}=this.props;
    return (
      <>
        <div className="card" style={{ width: "18 em" }}>
          <img
          src={imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {desc}
            </p>
            <h4>{new Date(date).toGMTString()} : {author}</h4>
            <a className="my-2" href={newsUrl} className="btn-sm btn-primary" target="_blank">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
