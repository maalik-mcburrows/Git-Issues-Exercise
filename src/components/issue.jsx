import React, { Component } from 'react';

class Issue extends Component {
    state = {
        issue: " "
    }

    loadIssue = async () => {
        const { issue_number } = this.props.match.params;
        const response = await fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`);
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
            <div>
                <h2>{issue.title}</h2>
                <div>
                    <p>{issue.body}</p>
                </div>
            </div>
        )
    }
};


export default Issue;
