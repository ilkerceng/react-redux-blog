import React from 'react';
import { Component } from 'react';
import AppContainer from '../containers/AppContainer';


export default class App extends Component {
    render() {
        return (
            <AppContainer>
                {"I am in Page App"}
                {this.props.children}
            </AppContainer>
        );
    }
}
