import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
    </div>
  );
}

Header.defaultProps = {
    title: "Trask Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
