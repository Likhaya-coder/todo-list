import { Fragment } from "react";
import classes from './Header.module.css';

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.navigation}>
          <a href="#">Todo List</a>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
