import PropTypes from 'prop-types';
// import { BiPlusMedical } from 'react-icons/bi';
import css from './Button.module.css';

export const Button = ({ loadMore }) => {
  return (
    <button type="button" className={css.button} onClick={loadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;