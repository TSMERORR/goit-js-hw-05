// *------------Вариант 1------------//

const sortByDescendingFriendCount = (users) => {
  return users.sort((a, b) => b.friends.length - a.friends.length);
};

// *------------Вариант 2------------//

// const sortByDescendingFriendCount = (users) => {
//   return users.sort(function(a, b) {
//     if (a.friends.length < b.friends.length) {
//       return 1;
//     }
//     if (a.friends.length > b.friends.length) {
//       return -1;
//     }
//     return 0;
//   });
// };

console.log(
  sortByDescendingFriendCount([
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"],
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      gender: "male"
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"],
      gender: "female"
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"],
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"],
      gender: "female"
    }
  ])
);
// [
// {
// name: "Ross Vazquez",
// friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// gender: "male"
// },
// {
// name: "Sharlene Bush",
// friends: ["Briana Decker", "Sharron Pace"],
// gender: "female"
// },
// {
// name: "Elma Head",
// friends: ["Goldie Gentry", "Aisha Tran"],
// gender: "female"
// },
// {
// name: "Carey Barr",
// friends: ["Jordan Sampson", "Eddie Strong"],
// gender: "male"
// },
// {
// name: "Blackburn Dotson",
// friends: ["Jacklyn Lucas", "Linda Chapman"],
// gender: "male"
// },
// {
// name: "Sheree Anthony",
// friends: ["Goldie Gentry", "Briana Decker"],
// gender: "female"
// },
// {
// name: "Moore Hensley",
// friends: ["Sharron Pace"],
// gender: "male"
// }
// ]
