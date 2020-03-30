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
    
    render(){
        const { issueData } = this.state;
        return(
            <ul>
                {issueData.length > 0 ? (
                    issueData.map(issue => (
                        <Issue key={issue.id} title = {issue.title} body = {issue.body} url = {issue.url} />
                    ))
                ) : (
                    <li>No Issue Data</li>
                )}
            </ul>
        )
    }
    
    
};

export default IssueList;
