import React, { Component } from "react";
import Issue from './issue';

class IssueList extends Component {
    state = {
        issue = []
    }

    loadIssue = async () => {
        const response = await fetch("https://api.github.com/repos/facebook/create-react-app/issues");
        const data = await response.json();
        return data;
    };
    
    componentDidMount = async () => {
        const issueData = await this.loadIssue();
        this.setState({
            issue: issueData
        })
    };
    
    render() {
        const { issue } = this.state;
        return(
            <ul>
                {issue.length > 0 ? (
                    issue.map(issue => (
                        <li>
                            <Issue key={issue.id} title = {issue.title} url = {issue.url} body = {issue.body} />
                        </li>
                    ))
                ) : (
                    <li>No Issue Data</li>
                )}
            </ul>
        )
    }
    
    
};

export default IssueList;
