import React, { Component } from 'react'
// import CompanyCard from './CompanyCard';
// import { NavLink } from 'react-router-dom'; 
import PropTypes from "prop-types";
import { Route, Switch } from 'react-router-dom';
import { checkApiServer } from '../api';
// REDUX CONNECT
import { connect } from 'react-redux';
// REDUX ACTIONS
import { getCompanies } from '../actions/actionCreators';
import CompanyCard from './CompanyCard';
// import {faListUl, faTag} from '@fortawesome/free-solid-svg-icons';

class CompanyList extends Component {
  componentDidMount() {
		// checking that we're connected to the backend
		checkApiServer();
		this.props.getCompanies();
	}
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  render() {
    return (
      <div>
        {this.props.companies.map((company) => {
          return <Switch>
          {/* <Route path={`/companies/:${company.id}`} component={CompanyCard} /> */}
          <Route path={'/companies/:id'} component={CompanyCard} />
        </Switch>
        })}
        {!this.props.selectedCompany ? 
        <div>
          {this.props.companies.map((company, i) => {
            return <ul className="list-reset my-4 px-6 py-4" key={`${i}`}>
              <a href="/"><h2 className="text-lg text-bridge-dark-blue">{company.name}</h2></a>
              <ul className="list-reset my-4"><li className="inline-block mr-4">{company.keywords.industry}</li></ul>
              <ul className="list-reset my-4"><li className="inline-block mr-4">{company.keywords.technical}</li></ul>
            </ul>
          })}
        <hr /></div> : 
        <CompanyCard selectedCompany={this.state.selectedCompany} />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	return {
		// spread operator for our props object
		...state,
    companies: state.companies.companies,
    selectedCompany: state.companies.selectedCompany
	};
};

const mapDispatchToProps = {
	getCompanies
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);