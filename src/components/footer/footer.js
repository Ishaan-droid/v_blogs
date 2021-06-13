import React, { useState } from 'react';
import './footer.css';
import './responsiveFooter.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Footer = () => {
  let now = new Date();

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    eMail: '',
    comment: '',
  });

  const submitFirstName = event => {
    event.persist();
    setData(prevValue => {
      return {
        ...prevValue,
        firstName: event.target.value,
      };
    });
  };

  const submitLastName = event => {
    event.persist();
    setData(prevValue => {
      return {
        ...prevValue,
        lastName: event.target.value,
      };
    });
  };

  const submitMailHandler = event => {
    event.persist();
    setData(prevValue => {
      return {
        ...prevValue,
        eMail: event.target.value,
      };
    });
  };

  const submitCommentHandler = event => {
    event.persist();
    setData(prevValue => {
      return {
        ...prevValue,
        comment: event.target.value,
      };
    });
  };

  const formSubmitHandler = () => {
    axios
      .post('https://v-blogs.firebaseio.com/form.json', data)
      .then(res => {})
      .catch(err => {
        console.log(err);
      });
    setData({
      firstName: '',
      lastName: '',
      eMail: '',
      comment: '',
    });
  };

  return (
    <React.Fragment>
      <footer>
        <div className="container-fluid">
          <h1>Let me know what's on your mind</h1>
          <form>
            <div className="row firstRowStyle">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={submitFirstName}
                  name="firstName"
                  value={data.firstName}
                  autoComplete="off"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={submitLastName}
                  name="lastName"
                  value={data.lastName}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="row secondRowStyle">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <input
                  type="email"
                  placeholder="Email"
                  onChange={submitMailHandler}
                  name="eMail"
                  value={data.eMail}
                  autoComplete="off"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <input
                  type="text"
                  placeholder="Comment"
                  onChange={submitCommentHandler}
                  name="comment"
                  value={data.comment}
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="row thirdRowStyle">
              {data.firstName !== '' &&
              data.lastName !== '' &&
              data.eMail !== '' &&
              data.comment !== '' ? (
                <Link to="/success">
                  <button onClick={formSubmitHandler} type="submit">
                    Submit
                  </button>
                </Link>
              ) : (
                <button type="submit" onClick={formSubmitHandler}>
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </footer>
      <div className="owner_style" id="vaishantCopyright">
        <p> &copy; {now.getFullYear()} by Vaishant Thakur</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
