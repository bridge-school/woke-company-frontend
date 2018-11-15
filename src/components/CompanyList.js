import React, { Component } from 'react'
// import CompanyCard from './CompanyCard';
// import { NavLink } from 'react-router-dom'; 
import PropTypes from "prop-types";
import { Route, Switch } from 'react-router-dom';
import { checkApiServer } from '../api';
// REDUX CONNECT
import { connect } from 'react-redux';
// REDUX ACTIONS
import { getCompanies, showCertifiedCompanies, showAllCompanies } from '../actions/actionCreators';
import CompanyCard from './CompanyCard';
import CertifiedButton from './CertifiedButton';

// import {faListUl, faTag} from '@fortawesome/free-solid-svg-icons';

class CompanyList extends Component {
  componentDidMount() {
		// checking that we're connected to the backend
		checkApiServer();
		this.props.getCompanies();
  };
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  createKeywordTypeList = keywordTypes => {
    let keywordTypeList = [];
    for (let i in keywordTypes) {
      if (!keywordTypes.hasOwnProperty(i)) continue;
      let keywordType = keywordTypes[i];
      keywordTypeList.push(
        <div className="text-grey-darker text-base mb-2">
          <span className="uppercase text-sm font-bold">{i}:</span> {keywordType.join(', ')}
        </div>
      )
    }
    return keywordTypeList;
  };
  createCompanyList = companies => {
    // you can't do a for loop in the render function
    // so we're doing it up here
    let companyList = [];
    for (let i in companies) {
      if (!companies.hasOwnProperty(i)) continue;
      let company = companies[i];
      companyList.push(
        <a href="/" className="no-underline">
        <div className="mx-auto max-w-sm rounded overflow-hidden shadow-md px-6 py-4 mb-5" key={`company-${i}`}>
          <h2 className="font-bold text-xl mb-2 no-underline text-bridge-dark-blue">{company.name}</h2>
          {this.createKeywordTypeList(company.keywords)}
        </div>
        </a>
      )
    }
    return companyList;
  }
  render() {
    return (
      <div className="container mx-auto">
        <Switch>
          <Route path={'/companies/:id'} component={CompanyCard} />
        </Switch>

        <div>
          {' '}
          <CertifiedButton handleClick={this.props.showCertifiedCompanies}>
            Certified Companies
          </CertifiedButton>
          {' '}
          <CertifiedButton handleClick={this.props.showAllCompanies}>
            All Companies
          </CertifiedButton>
        </div>

        {!this.props.selectedCompany ? 
          <React.Fragment>
            {this.createCompanyList(this.props.companies)}
          </React.Fragment> : 
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
  getCompanies,
  showCertifiedCompanies,
  showAllCompanies,
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);