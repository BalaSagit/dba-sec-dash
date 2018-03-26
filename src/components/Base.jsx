import React, { Component } from 'react';
import { Grid, Cell } from 'react-md';
import '../styles/Base.scss';
import Cards from '../components/Cards.jsx';
import Drawers from './Drawers.jsx';

class Base extends Component {
    render() {
        return (
            <div>
                <Drawers/>                
                <Grid>
                    <Cell size={3}>
                        <Cards tempProp1='Total Access to Servers' />                        
                    </Cell>

                    <Cell size={3}>
                        <Cards tempProp1='Total Access to DBs' />
                    </Cell>

                    <Cell size={3}>
                        <Cards tempProp1='User Level Access' />
                    </Cell>
                </Grid>

            </div>

        );
    }
}

export default Base;