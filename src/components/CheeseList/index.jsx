import React from 'react';
import PropTypes from 'prop-types';

export default function CheeseList({ cheeses }) {
  const liCheese = cheeses.map(cheese => <li>{cheese}</li>);
  return <ul>{liCheese}</ul>;
}

CheeseList.propTypes = {
  cheeses: PropTypes.arrayOf(PropTypes.string),
};

CheeseList.defaultProps = {
  cheeses: ['Bath Blue', 'Barkham Blue', 'Buxton Blue'],
};
