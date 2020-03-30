import React from 'react';
import IssueList from './issueList';

const Issue = props => {
    const { issueData } = props;
    return(
        <ul>
            {issueData.length > 0 ? (
                issueData.map(issue => (
                    <li key = {issue.id}>
                        <IssueList issue = {issue} />
                    </li>
                ))
            ) : (
                <li>No Issue Data</li>
            )}
        </ul>
    )
};

export default Issue;
