import React, { Component } from "react";
import PropTypes from 'prop-types';
import TableHeader from "utility/table/TableHeader";
import TableBody from "utility/table/TableBody";

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lock: false
		};
		this.handleOnScroll = this.handleOnScroll.bind(this);
	}
	componentDidMount() {
		document.addEventListener("scroll", this.handleOnScroll, false);
	}
	componentWillUnmount() {
		document.removeEventListener("scroll", this.handleOnScroll, false);
	}
	handleOnScroll(e) {
		let windowTop = window.pageYOffset;
		const tabsHeight = document.getElementsByClassName("tools-header")[0].offsetHeight;
		let scrollFlag = windowTop > tabsHeight;
		if (scrollFlag !== this.state.lock) {
			this.setState({
				lock: scrollFlag
			});
		}
	}
	render() {
		const stickyStyle = {
			top: "0px"
		};
		return (
			<div className={"tools-table " + (this.props.className || "")}>
				<div className={this.state.lock ? "tools-table-header-stick" : ""} style={stickyStyle}>
					<TableHeader>
						{this.props.children[0]}
					</TableHeader>
				</div>
				<TableBody>
					{this.props.children[1]}
				</TableBody>
			</div>
		);
	}
}
Table.propTypes = {
    children: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element
    ])),
    className: PropTypes.string
}
export default Table;