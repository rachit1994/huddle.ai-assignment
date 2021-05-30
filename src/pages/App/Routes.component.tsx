import React, { FC, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Lazy from 'components/Lazy/Lazy.component';
import NotFound from 'pages/NotFoundPage/NotFoundPage.component';

const Posts = lazy(() => import('pages/Posts/Posts.component'));
const PostDetails = lazy(() => import('pages/PostDetails/PostDetails.component'));
const User = lazy(() => import('pages/User/User.component'));

const Routes: FC<{}> = () => (
    <Lazy>
        <Switch>
            <Route exact path='/' component={Posts} />
            <Route exact path='/post/:id' component={PostDetails} />
            <Route exact path='/user/:id' component={User} />
            <Route component={NotFound} />
        </Switch>
    </Lazy>
);

export default Routes;
