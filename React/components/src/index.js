import './style/App.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { CommentDetail } from './CommentDetail';
import { ApprovalCard } from './ApprovalCard';

import { faker } from "@faker-js/faker";


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    imgUrl={faker.image.image()}
                    blogPost="Nice blog post 1"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    timeAgo="Today at 2:00AM"
                    imgUrl={faker.image.image()}
                    blogPost="I like the subject"
                />

            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 5:00PM"
                    imgUrl={faker.image.image()}
                    blogPost="I like writing"
                />
            </ApprovalCard>
        </div>
    );
};

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);


root.render(<App />);