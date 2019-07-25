import { Users } from '../models/user.entity';

export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: Users,
  },
];
