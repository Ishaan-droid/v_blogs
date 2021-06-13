import React from 'react';
import Alert from 'react-bootstrap/Alert';

const Pop = props => {
  return (
    <React.Fragment>
      <Alert variant="success" onClose={props.closePop} dismissible>
        <Alert.Heading>Subscirbed!</Alert.Heading>
        <p>Thanks for subscribing to our news letter.</p>
      </Alert>
    </React.Fragment>
  );
};

export default Pop;
