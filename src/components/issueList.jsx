import React, { Component } from "react";
import { ListGroup, ListGroupItem } from 'react-bootstrap';

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
            <ListGroup>
                {issue.length > 0 ? (
                    issue.map(issue => (
                        <ListGroupItem key={issue.id}>
                            <h2>{issue.title}</h2>
                            <a target="_blank" rel="noopener noreferrer" href={`/issues/${issue.number}`}>See Details</a>
                        </ListGroupItem>
                    ))
                ) : (
                    <ListGroupItem>No Issue Data</ListGroupItem>
                )}
            </ListGroup>
        )
    }
};

export default IssueList;
