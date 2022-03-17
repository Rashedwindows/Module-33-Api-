// JSON => javaScript Object Notation

const user = {

    id : 1,
    name : 'Gorib Amir',
    job : 'Actor',
};

// convert string to object
const convertStringified = JSON.stringify(user);

console.log(convertStringified);


// convert object to string

const convertObjectToString = JSON.parse(convertStringified);

console.log(convertObjectToString)