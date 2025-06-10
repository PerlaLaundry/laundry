import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FootNavigation = ({ title, links }) => {
  // TODO: change to rrd Link comp instead of a tag
  return (
    <div className="foot-navigation">
      <h4>{title}</h4>
      {links.map((link) =>
        link.path ? (
          <Link key={link.id} to={link.path} preventScrollReset>
            {link.text}
          </Link>
        ) : (
          <p key={link.id}>{link.text}</p>
        )
      )}
    </div>
  );
};

FootNavigation.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      path: PropTypes.string,
    })
  ).isRequired,
};

FootNavigation.defaultProps = {};

export default FootNavigation;
