import PropTypes from 'prop-types';

const rateShape = PropTypes.shape({
  ask: PropTypes.number,
  bid: PropTypes.number,
  code: PropTypes.string,
  currency: PropTypes.string,
  isFavourite: PropTypes.bool,
  onAddToFavClick: PropTypes.func,
  onRemoveFromFavClick: PropTypes.func,
});

export default rateShape;
