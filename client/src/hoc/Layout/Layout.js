import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Navbar from '../../components/Navbar/Navbar';

class Layout extends Component {
    render () {
        return (
            <Aux>
                <Navbar />
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;