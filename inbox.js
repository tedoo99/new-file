function solve(input) {
  let obj = {};

  for (const element of input) {
    let [command, user, text] = element.split("->");
    if (command === "Statistics") {
      break;
    } else if (command === "Add") {
      if (!obj.hasOwnProperty(user)) {
        obj[user] = [];
      } else {
        console.log(`${user} is already registered`);
      }
    } else if (command === "Send") {
      obj[user].push(text);
    } else if (command === "Delete") {
      if (obj.hasOwnProperty(user)) {
        delete obj[user];
      } else {
        console.log(`${user} not found!`);
      }
    }
  }
  let usersArray = Object.entries(obj);
  let objArray = usersArray.sort(sortingTheUsers);

  function sortingTheUsers(userA, userB) {
    let emailCountA = userA[1].length;
    let emailCountB = userB[1].length;

    if (emailCountB === emailCountA) {
      return userA[0].localeCompare(userB[0]);
    } else {
      return emailCountB - emailCountA;
    }
  }
  console.log(`Users count: ${objArray.length}`);

  objArray.forEach(element => {
    console.log(element[0]);
    element[1].forEach(el => {
      console.log(`- ${el}`);
    });
  });

  //   let result = Object.fromEntries(objArray);

  //   for (const key in result) {
  //     console.log(key);
  //     for (const el of result[key]) {
  //       console.log(`- ${el}`);
  //     }
  //   }
}
solve([
  "Add->Mike",
  "Add->George",
  "Send->George->Hello World",
  "Send->George->Your loan is overdue",
  "Add->Mike",
  "Send->Mike->Hello, do you want to meet up tomorrow?",
  "Delete->Peter",
  "Send->George->I'm busy",
  "Send->Mike->Another random test mail",
  "Delete->George",
  "Statistics"
]);
