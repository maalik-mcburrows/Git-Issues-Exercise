import React, { Component } from "react";

class IssueList extends Component {
    state = {
        issue: []
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
        console.log(this.props);
        const { issue } = this.state;
        return(
            <ul>
                {issue.length > 0 ? (
                    issue.map(issue => (
                        <div key={issue.id}>
                            <h2>{issue.title}</h2>
                            <a target="_blank" href={`/issues/${issue.number}`}>See Details</a>
                        </div>
                    ))
                ) : (
                    <p>No Issue Data</p>
                )}
            </ul>
        )
    }
};

export default IssueList;
