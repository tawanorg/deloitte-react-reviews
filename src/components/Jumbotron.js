import React from 'react';
import PropTypes from 'prop-types';

const Jumbotron = ({data}) => {
	const { title, lead } = data;
	return (
		<div className="jumbotron">
			<h1>{title}</h1>
			<p className="lead">{lead}</p>
			<p><a className="btn btn-lg btn-success" role="button" onClick={()=> alert('My Email is : mrtawans@gmail.com')}>Contact Me Now!</a></p>
	    </div>
	)
}

Jumbotron.propTypes = {
  data: PropTypes.shape({  
    title: PropTypes.string,
    lead: PropTypes.string
  }).isRequired
}


export default Jumbotron;
