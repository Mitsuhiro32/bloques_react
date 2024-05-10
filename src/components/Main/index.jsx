import { Component } from "react";
import PropTypes from "prop-types";

class Main extends Component {
    render() {
        return (
            <main>
                {this.props.children}
            </main>
        )
    }
}

Main.propTypes = {
    children: PropTypes.node.isRequired
};

export default Main