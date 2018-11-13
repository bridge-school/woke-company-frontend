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
			<header className="">
			<nav className="flex items-center justify-between flex-wrap p-6">
				<div className="flex items-center flex-no-shrink text-white mr-6">
					<a href="/" className="inline-block mx-auto">
						<img src={this.props.logo} className="block w-16" alt="Bridge School" />
					</a>
				</div>
				<div className="block lg:hidden">
				{/* handleChangeDatePicker={this.props.handleChangeDatePicker} */}
					<button onClick={this.toggleNav} className="flex items-center px-3 py-2 border rounded">
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
				</button>
				</div>
				<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
					<div className="text-sm lg:flex-grow">
						<Navigation display={this.state.display} />
					</div>
				</div>
				<h1 className="text-xl text-bridge-dark-blue">Bridge Company Certification</h1>
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