import React, { Component } from 'react'
// import CompanyCard from './CompanyCard';
// import { NavLink } from 'react-router-dom'; 
import PropTypes from "prop-types";
import { Route, Switch } from 'react-router-dom';
import { checkApiServer } from '../api';
// REDUX CONNECT
import { connect } from 'react-redux';
// REDUX ACTIONS
import { getCompanies, showCertified, showAll } from '../actions/actionCreators';
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
        <ul key={i}>
          {keywordType.map(((keyword, i) => {
            return <li className="inline-block mr-4" key={`${keyword}-${i}`}>{keyword}</li>;
          }))}
        </ul>
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
        <div className="my-4 px-6 py-4" key={`company-${i}`}>
          <a href="/"><h2 className="text-lg text-bridge-dark-blue">{company.name}</h2></a>
          {this.createKeywordTypeList(company.keywords)}
        </div>
      )
    }
    return companyList;
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path={'/companies/:id'} component={CompanyCard} />
        </Switch>

        <div>
          {' '}
          <CertifiedButton handleClick={this.props.showCertified}>
            Certified Companies
          </CertifiedButton>
          {' '}
          <CertifiedButton handleClick={this.props.showAll}>
            All Companies
          </CertifiedButton>
        </div>

        {!this.props.selectedCompany ? 
          <div>
            {this.createCompanyList(this.props.companies)}
            <hr />
          </div> : 
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
  showCertified,
  showAll,
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);