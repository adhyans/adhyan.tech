import { Link } from 'react-router-dom';
import React from 'react';

const Layout = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/main">All Posts</Link>
        </li>
        <li>
          <Link to="/another">Contact Me!</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Layout;
