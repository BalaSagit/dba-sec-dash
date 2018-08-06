import React, { Component } from 'react';
import { Grid, Cell } from 'react-md';
import Cards from './Cards.jsx';
import Charts from "./Charts.jsx";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.tempProp1,
        };
    }
    render() {
        return (
            <div>
                <Grid className=".md-grid">
                    <Cell className="md-cell md-cell--4" ><Cards tempProp1='Total Access to Servers' /></Cell>
                    <Cell className="md-cell md-cell--4" ><Cards tempProp1='Total Access to DBs' /></Cell>
                    <Cell className="md-cell md-cell--4" ><Cards tempProp1='User Level Access' /></Cell>
                </Grid>
                <Grid className=".md-grid">
                    <Cell className="md-cell md-cell--3" />
                    <Cell className="md-cell md-cell--6" ><Charts /></Cell>
                    <Cell className="md-cell md-cell--3" />
                </Grid>

            </div>
        );
    }
}
export default Dashboard;