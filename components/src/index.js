import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Sam"
                    timeAgo="Today at 6:13PM"
                    content="Nice blog post!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Cristiano"
                    timeAgo="Today at 5:11PM"
                    content="I like the post!"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()} 
                    author="Jane"
                    timeAgo="Today at 3:48AM"
                    content="I like the writing!"
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));