import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './wholeBlog.css';
import './responsiveWholeBlog.css';
import axios from 'axios';

const WholeBlog = props => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    let id = props.match.params.id;
    axios
      .get(`https://v-blogs.firebaseio.com/blog/${id}.json`)
      .then(res => {
        setBlog(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [props]);

  let wholeBlogDisplay = (
    <React.Fragment>
      <img src={blog.image} className="d-block responsive" alt="card1" />
      <h4>{blog.title}</h4>
      <p>{blog.content}</p>
    </React.Fragment>
  );

  return <Container className="blogStyle">{wholeBlogDisplay}</Container>;
};

export default WholeBlog;
