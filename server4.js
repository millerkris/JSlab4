const _ = require("lodash");
const users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 34 }
];

const sortedUsers = _.sortBy(users, 'age');
console.log(sortedUsers);

