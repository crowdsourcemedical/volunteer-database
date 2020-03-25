import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core/"

import PersonResult from "./PersonResult";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: theme.spacing(2),
    paddingRight: theme.spacing(4),
    width: '100%',
    height: 'auto',
    backgroundAttachment: 'local',
  },
  divider: {
    margin: 'auto',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: '100%',
    maxWidth: '316px',
  }
}));

const SearchResults = ({ data }) => {
  const classes = useStyles();

  // TODO: Add message for when no results are retrieved from search

  return (
      <div className={classes.root}>
        {data.people.map((person, index) => {
          const { name, jobTitle, description, location, imgSrc } = person;
          return (
            <div>
              {index !== 0 && <Divider className={classes.divider} />}
              <PersonResult
                key={index}
                name={name}
                jobTitle={jobTitle}
                description={description}
                location={location}
                imgSrc={imgSrc}
              />
            </div>
          );
        })}
      </div>
    )
}

SearchResults.propTypes = {
  data: PropTypes.object.isRequired,
}


export default SearchResults;