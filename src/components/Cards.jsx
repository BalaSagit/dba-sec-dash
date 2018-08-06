import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'react-md';
import '../styles/Cards.scss';

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.tempProp1,
        };
    }
    render() {
        return (
            <Card className="md-block-centered">
                <CardTitle title="">
                    <h2 className="cardTitle">{this.state.value}</h2>
                </CardTitle>                                
                <CardText >
                    <p className="cardContent">
                        The <code>CardText</code> component is really just useful for displaying any
                        content with some additional padding.
                    </p>
                </CardText>
            </Card>
        );
    }
}
export default Cards;