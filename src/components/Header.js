import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AsyncSelect from 'react-select/async'
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers, searchUsers } from '../graphql/queries';
import { AuthContext } from '../App';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

var colorStyles = {
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = 'darkgray';
    const backgroundColor = 'whitesmoke';

    return {
      ...styles,
      color,
      backgroundColor,
    };
  }
};

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;
  const { authUser } = useContext(AuthContext);
  const [showSearchBar, toggleSearchBar] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState(false);
  const history = useHistory();

  const handleSearchQuery = (query) => {
    const inputValue = query.replace(/\W/g, '');
    setSearchQuery(inputValue);
  };

  const loadOptions = async (inputValue, callback) => {
    console.log('searching: ', inputValue);

    const result = await API.graphql(graphqlOperation(searchUsers, {
      filter: { name: { matchPhrasePrefix: inputValue } },
      // filter: { name: { wildcard: `${inputValue}.*` } },
      // limit: 5,
      // nextToken: nextToken,
    }));
    console.log('result: ', result);
    const { data: { searchUsers: { items: users } } } = result;

    const userOptions = users.map(user => ({
      label: user.name,
      value: user.id
    }));
    console.log('users', users);

    callback(userOptions);
  };

  const handleSelectUser = (option, action) => {
    console.log('Redirecting:', option);
    history.push(`/profile/${option.value}`);
  }

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>

          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            // align="center"
            noWrap
            className={classes.toolbarTitle}
        >
          <Link component={RouterLink} to="/" style={{ textDecoration: 'none', color: '#fff' }}>
            {title}
          </Link>
        </Typography>

        {showSearchBar ? (
          <div style={{ width: '200px', marginRight: '16px' }}>
            <AsyncSelect
              placeholder="Search users..."
              cacheOptions
              defaultOptions
              autoFocus
              styles={colorStyles}
              loadOptions={loadOptions}
              onInputChange={handleSearchQuery}
              onMenuClose={toggleSearchBar}
              onChange={handleSelectUser}
            />
          </div>
        ) : (
            <IconButton onClick={toggleSearchBar}>
              <SearchIcon />
            </IconButton>  
          )}

        {!!authUser && (
          <>
            <Button style={{ marginRight: '10px' }} variant="outlined" color="inherit" component={RouterLink} to={`/profile/${authUser.id}`}>Profile ({authUser.name})</Button>
            <Button variant="outlined" color="inherit" component={RouterLink} to="/logout">Logout</Button>
          </>
        )}

        {!authUser && (
          <>
            <Button style={{ marginRight: '10px' }} variant="outlined" color="inherit" component={RouterLink} to="/signin">Sign In</Button>
            <Button variant="outlined" color="inherit" component={RouterLink} to="/signup">SignUp</Button>
          </>
        )}
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
