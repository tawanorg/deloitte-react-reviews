import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Headline = ({data}) => {
	const { title, lead, styles} = data;
	return (
		<div className={cx([...styles])}>
			<h1>{title}</h1>
			{ lead && <p>{lead}</p>}
      	</div>
	)
}

Headline.propTypes = {
  data: PropTypes.shape({  
    title: PropTypes.string,
    lead: PropTypes.string
  }).isRequired
}

export default Headline;
