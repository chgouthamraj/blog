import React from 'react';
import './Page.css';
import { useLocation } from 'react-router-dom';

export default function Page(props) {
  const location = useLocation();
  const data = location?.state;

  return (
    <div>
      <div className="blog-post__title">
        <h1>{data && data.title}</h1>
        <p>{data && data.date}</p>
      </div>
      <div className="blog-post__section">
        <img className="blogImage" src={require(`${data.image}`)} alt="data" />
        <div>
          {data?.data.map((item) => {
            return (
              <div>
                <h2>{item.paraTitle}</h2>
                <p className="paraData">{item.paraData}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
