import { FC, useState } from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import Container from 'components/Container/Container.component';
import debounce from 'utils/debounce';

const PostRender: FC<{ posts: Array<any> }> = ({ posts }) => {
    const [result, changeResult] = useState(posts);
    const handleSearch = debounce((e: any) => {
        const search = e?.target?.value;
        if (!search || search?.length === 0) {
            changeResult(posts);
        } else {
            const newPosts = posts.filter((post: any) => post?.userId == search);
            changeResult(newPosts)
        }
    });
    return (
        <div className='cards-list'>
            <input
                type="text"
                placeholder="Search"
                onChange={handleSearch}
            />
            {
                result?.length > 0 && result?.map((post: any) => (
                    <div className='card'>
                        <LazyLoad key={post?.id} scroll resize unmountIfInvisible once>
                            <Link to={`/post/${post?.id}`}>
                                <div>title: {post?.title}</div>
                                <div>body: {post?.body}</div>
                                <Link to={`user/${post?.userId}`}>
                                    <Container url={`users/${post?.userId}`} method='get'>
                                        {
                                            (user: any) => (
                                                <div className='card' style={{ background: '#3700B3', color: '#fff' }}>
                                                    User:
                                                    <div>
                                                        <div>
                                                            Name: {user?.name}
                                                        </div>
                                                        <div>
                                                            email: {user?.email}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </Container>
                                </Link>
                            </Link>
                        </LazyLoad>
                    </div>
                ))
            }
        </div>
    )
}
const Posts: FC<{}> = () => (
    <Container url='posts' method='get'>
        {
            (posts: any) => <PostRender posts={posts} />
        }
    </Container>
)


export default Posts;
