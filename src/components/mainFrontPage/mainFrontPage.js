import React, { useState,useEffect } from 'react';
import './mainFrontPage.css';
import './responsiveMainFrontPage.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MainFrontPage = () => {

    const [data,setData] = useState([]);
    const [mail,setMail] = useState({
        mailName : ''
    });

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
            data.filter(cur => cur.id<=2).map(data =>{
                return (
                    <div className={data.className} key={data.id}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <img src={data.image} className="d-block w-100 responsive" alt="card1" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 blogStyle1Content">
                            <h5>{data.title}</h5>
                            <p>{data.content.substring(0,100)}...</p>
                        </div>
                    </div>
                </div>
                )
            })
        )
    };

    const mailSubmitEventHandler = event => {
        setMail({
            mailName : event.target.value
        })
    };

    const mailSubmitHandler = () => {
        if(mail.mailName !== '') {
            axios.post('https://v-blogs.firebaseio.com/mail.json', mail)
            .then(res => {
                // console.log('Submitted');
            })
            .catch(err => {
                console.log(err);
            });
            setMail({
                mailName : ''
            });
                }
    }

    return (
        <div className="container blogPost">
        <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="blogPost">
                    {blogDisplay}
                </div>
            </div>
            {/* Adding the adjacent section */}
            <div className="col-lg-4 col-md-8 col-sm-12">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="newsletterUpdate">
                            <h4>Get Notified when i add a new post.</h4>
                            <input type="email" onChange={mailSubmitEventHandler} placeholder="Email"/>
                            {mail.mailName !== '' ?
                            <Link to='/success'>
                            <button type="submit" onClick={mailSubmitHandler}>Subscribe</button>
                            </Link> :
                            <button type="submit" onClick={mailSubmitHandler}>Subscribe</button> }
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="aboutMe">
                            <h3>About Me</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            <Link to='/aboutMe'>
                            <button>Read More </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MainFrontPage;