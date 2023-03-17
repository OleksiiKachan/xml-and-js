const gettingTheArrayOfFriends = (data) => {
    return data.reduce((allTheFriends, accounts) => {
        return allTheFriends.concat(accounts.friends.map(aFriend => aFriend.name));
    }, []);
}   
//Here using reduce() method for going through each account and getting the names of the friend, storing in an array.
//Names of the friends will be concatenated for each account to the array 'allTheFriends'.

const data = require('./data.json');

const arrayOfFriends = gettingTheArrayOfFriends(data);

console.log(arrayOfFriends);