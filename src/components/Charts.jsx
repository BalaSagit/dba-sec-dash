import React, { Component } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';
import '../styles/Charts.scss';

class Charts extends Component {
    data = [
        { name: "bala", value: [35] },
        { name: "karthi", value: [80] }

    ]
    render() {
        return (
            <BarChart width={730} height={250} data={this.data} layout='vertical'>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="value"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
                <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
        );
    }
}
export default Charts;