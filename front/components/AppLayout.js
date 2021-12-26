import PropTypes from "prop-types";

const AppLayout = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>Trello</li>
          <li>login</li>
          <li>Profile</li>
          <li>SignUp</li>
        </ul>
      </nav>
      {children}
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
