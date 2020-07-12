import PostPage from '../pages/PostPage';
import Main from '../pages/PostPage/components/Main';
import Another from '../pages/PostPage/components/Another';

const routes = [
  {
    path: '/',
    name: 'PostPage',
    exact: true,
    component: PostPage,
  },
  {
    path: '/main',
    name: 'Main',
    exact: true,
    component: Main,
  },
  {
    path: '/another',
    name: 'another',
    component: Another,
  },
];

export default routes;
