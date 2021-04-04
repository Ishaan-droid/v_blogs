import React, { useState,useEffect } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './allBlog.css';
import './responsiveAllBlog.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllBlog = () => {

    const [data,setData] = useState([]);

    useEffect(() => {
         axios.get('https://v-blogs.firebaseio.com/blog.json')
        .then(res => {
            setData(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[]);

    let blogDisplay;

    if(data.length) {
        blogDisplay = (
            data.map(cur => {
                return (
                    <Row key={cur.id}>
                    <Col className="colStyle col-xs-6">
                        <div>
                            <Link to={'blog/' + cur.id} style={{ textDecoration : 'none' }}>
                                <img src={cur.image} className="d-block w-50 responsive" alt="card1" />
                            </Link>
                            <Link to={'blog/' + cur.id} style={{ textDecoration : 'none' }}>
                            <h3>{cur.title}</h3>
                            </Link>
                            <Link to={'blog/' + cur.id} style={{ textDecoration : 'none' }}>
                            <p>{cur.content.substring(0,200)}...</p>
                            </Link>
                        </div>
                    </Col>
                    </Row>
                )
            })
        )
    }

    return(
        <Container>
            {blogDisplay}
        </Container>
    )
};

export default AllBlog;