import React, { Component } from 'react'
import CompanyCard from './CompanyCard';
import { NavLink } from 'react-router-dom'; 
import PropTypes from "prop-types";
import { Route, Switch } from 'react-router-dom';
// import {faListUl, faTag} from '@fortawesome/free-solid-svg-icons';

class CompanyList extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  render() {
    // const { location } = this.props;
    const companyId = '37BMJDH00092';
    return (
      <div>
        {/* <div>You are now at {location.pathname}</div> */}
        <Switch>
          <Route path={`/companies/:${companyId}`} component={CompanyCard} />
        </Switch>
        {this.props.location.pathname === '/companies' ? 
        <div><NavLink to={`/companies/:${companyId}`}><h2>Company Name</h2></NavLink>
        <ul>
          <li>Tag</li>
          <li>Tag</li>
          <li>Tag</li>
          <li>Tag</li>
          <li>Tag</li>
          <li>Tag</li>
          <li>Tag</li>
          <li>Tag</li>
        </ul><hr /></div> : null}
      </div>
    )
  }
}

export default CompanyList;