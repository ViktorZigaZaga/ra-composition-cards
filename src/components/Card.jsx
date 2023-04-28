import React from "react";
import PropTypes from 'prop-types'

function Card(props) {
    return (
        <div class="card" style={{width: "18rem"}}>
            {props.children}
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

Card.propTypes = {
    props: PropTypes.objectOf({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(PropTypes.object),
    }),
  };

export default Card
