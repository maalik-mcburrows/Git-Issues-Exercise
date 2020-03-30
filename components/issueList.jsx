import React, { Component } from "react";
import Issue from './issue';

class IssueList extends Component {
    state = {
        issue = [],
    }

    loadIssue = async () => {
        const response = await fetch("https://api.github.com/repos/facebook/create-react-app/issues");
        const data = await response.json();
        return data;
    };
    
    componentDidMount = async () => {
        const issue = await this.loadIssue();
        this.setState({
            issue: issue
        })
    };

    render() {
        const { issue } = this.state;
        return(
            <Issue issue = { issue } />
        )
    }
};

export default IssueList;
