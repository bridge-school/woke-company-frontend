import React, { Component } from "react";
// COMPONENTS
import Navigation from "./Navigation";
// ACTIONS
import { handleNavHamburger } from "../actions/actionCreators";
// REDUX CONNECT
import { connect } from "react-redux";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: "hidden"
		}
		this.toggleNav = this.toggleNav.bind(this);
	}
	toggleNav() {
		if(this.state.display === "hidden") {
			this.setState({
				display: "block"
			});
		} else {
			this.setState({
				display: "hidden"
			});
		}
		
	}
	render() {
		return (
			<header className="mb-3">
			<nav className="flex items-center justify-between flex-wrap bg-white p-6">
				<div className="flex items-center flex-no-shrink mr-6 max-w-xs">
					<a href="/" className="flex items-center mx-auto no-underline text-center">
						<img src={this.props.logo} className="inline-block mr-4 w-16" alt="Bridge School" />
						<span className="font-semibold text-bridge-dark-blue">Company Certification</span>
					</a>
				</div>
				<div className="block md:hidden">
				{/* handleChangeDatePicker={this.props.handleChangeDatePicker} */}
					<button onClick={this.toggleNav} className="flex items-center px-3 py-2 border rounded">
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
				</button>
				</div>
				<div className="w-full block flex-grow md:flex md:items-center md:w-auto">
					<Navigation display={this.state.display} />
				</div>
			</nav>
		</header>
		)
	}
}

const mapStateToProps = state => {
    return {
      ...state,
      nav: state.navHamburger.display
    };
  };
  
  const mapDispatchToProps = {
	  handleNavHamburger
  };
  
  export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(Header);