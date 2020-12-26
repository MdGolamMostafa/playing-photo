import React from 'react';
import CommentsDetails from './CommentsDetails';

const Comment = (props) => {
    const {comments} = props;
    
    return (
            <div className = 'text-left'>
                
                {   
                    comments.map((commentsDetails) =>
                                    (<CommentsDetails  
                                    commentsDetails={commentsDetails} >
                                    </CommentsDetails>)            
                                )
                }
            </div>
    );
};
export default Comment;