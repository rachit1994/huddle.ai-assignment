import { FC } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import Container from '../../components/Container/Container.component';

const UserDetails: FC<{}> = () => {
    const history = useHistory();
    const { id }: { id: any } = useParams();
    return (
        <div>
            <button onClick={() => history.goBack()}>Back</button>
            <Container url={`users/${id}`} method='get'>
                {
                    (user: any) => (
                        <div className='cards-list'>
                            <div className='card'>
                                <div>username: {user?.username}</div>
                                <div>full name: {user?.name}</div>
                                <div>email: {user?.email} </div>
                                <div>website: {user?.website}</div>
                            </div>
                        </div>
                    )
                }
            </Container>
        </div>
    )
}

export default UserDetails;
