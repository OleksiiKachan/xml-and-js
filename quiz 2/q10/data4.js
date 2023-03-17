const gettingTheAccountHolderNames = (data) => {

  const names = data.map(account => account.name);
  const lastIndex = names.length - 1;
  return names.reduce((allNames, name, index) => {
    if (index === 0) {
      return name;
    } else if (index === lastIndex) {
      return `${allNames}, and ${name}`;
    } else {
      return `${allNames}, ${name}`;
    }
  }, '');

}   


const data = require('./data.json');

const arrayOfAccountHolders = gettingTheAccountHolderNames(data);

console.log(arrayOfAccountHolders);