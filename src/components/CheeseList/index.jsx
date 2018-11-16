import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCheeses } from '../../actions/cheeses';
import { getCheeses } from '../../reducers';

class CheeseList extends React.Component {
  componentDidMount() {
    const { onMount } = this.props;
    onMount();
  }

  render() {
    const { cheeses } = this.props;
    const liOfCheeses = cheeses.map(cheese => <li>{cheese}</li>);
    return <ul>{liOfCheeses}</ul>;
  }
}

CheeseList.propTypes = {
  onMount: PropTypes.func.isRequired,
  cheeses: PropTypes.arrayOf(PropTypes.string),
};

CheeseList.defaultProps = {
  cheeses: ['Bath Blue', 'Barkham Blue', 'Buxton Blue'],
};

const mapStateToProps = state => ({
  cheeses: getCheeses(state),
});

const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch(fetchCheeses()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheeseList);
