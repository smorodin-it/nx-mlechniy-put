import { apiRoutes } from '../apiRoutes';

type UsersServiceMethods = Record<keyof typeof apiRoutes.users, () => unknown>;

export default class UsersService implements UsersServiceMethods {
 list = () => {
    console.log('hi!');
  };

  retrieve = () => {
    return;
  };

  create = () => {
    return;
  };

  update = () => {
    return;
  };

  delete = () => {
    return;
  };
}