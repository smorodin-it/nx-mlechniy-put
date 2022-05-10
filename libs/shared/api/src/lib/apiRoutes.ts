export const apiRoutes = {
  auth: {
    login: () => '/auth/login',
    logout: () => '/auth/logout',
    refresh: () => '/auth/refresh',
  },
  users: {
    list: () => '/users',
    retrieve: (userId = ':userId') => `/users/${userId}`,
    create: () => '/users',
    update: (userId = ':userId') => `/users/${userId}`,
    delete: (userId = ':userId') => `/users/${userId}`,
  },
  contests: {
    list: () => '/contests',
    retrieve: (contestId = ':contestId') => `/contests/${contestId}`,
    create: () => '/contests',
    update: (contestId = ':contestId') => `/contests/${contestId}`,
    delete: (contestId = ':contestId') => `/contests/${contestId}`,
  },
  stories: {
    list: () => '/stories',
    retrieve: (storiesId = ':storiesId') => `/stories/${storiesId}`,
    create: () => '/stories',
    update: (storiesId = ':storiesId') => `/stories/${storiesId}`,
    delete: (storiesId = ':storiesId') => `/stories/${storiesId}`,
  },
};
