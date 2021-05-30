import { FC } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import Container from 'components/Container/Container.component';

const PostDetails: FC<{}> = () => {
    const history = useHistory();
    const { id }: { id: any } = useParams();
    return (
        <div>
            <button onClick={() => history.goBack()}>Back</button>
            <Container url={`posts/${id}`} method='get'>
                {
                    (post: any) => (
                        <div className='cards-list' id={post?.id}>
                            <div className='card'>
                                <div>{post?.title}</div>
                                <div>{post?.body}</div>
                                <Link to={`user/${post?.userId}`}>
                                    <button>User</button>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </Container>
            Comments:
            <Container url={`comments?postId=${id}`} method='get'>
                {
                    (comments: any) => comments?.length > 0 && comments?.map((comment: any) => (
                        <div className='cards-list' key={comment?.id}>
                            <div className='card'>
                                <div>Name: {comment?.name}</div>
                                <div>Email: {comment?.email}</div>
                                <div>Body: {comment?.body}</div>
                            </div>
                        </div>
                    ))
                }
            </Container>
        </div>
    )
}

export default PostDetails;
