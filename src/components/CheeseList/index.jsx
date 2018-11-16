import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCheeses } from '../../actions/cheeses';

class CheeseList extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCheeses());
  }

  render() {
    const { cheeses } = this.props;
    const liOfCheeses = cheeses.map(cheese => <li>{cheese}</li>);
    return <ul>{liOfCheeses}</ul>;
  }
}

CheeseList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  cheeses: PropTypes.arrayOf(PropTypes.string),
};

CheeseList.defaultProps = {
  cheeses: ['Bath Blue', 'Barkham Blue', 'Buxton Blue'],
};

const mapStateToProps = state => ({
  cheeses: state.cheeses.cheeses,
});

export default connect(mapStateToProps)(CheeseList);
