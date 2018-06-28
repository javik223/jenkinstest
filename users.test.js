const Users = require('./users');

describe('Tests user function', () => {
  it('should return the correct user', () => {
    const users = {
      0: {
        name: 'Victory Ugwudike',
        position: 'Director',
      },
      1: {
        name: 'Emeka Ogey',
        position: 'Director',
      },
    };

    const myUsers = new Users(users);

    expect(myUsers.getUsers()).toEqual(users);
    // expect(myUsers.getUsers()).toContain('emekus');
  });
});
