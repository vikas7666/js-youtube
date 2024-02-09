/* --------- singleton  -----------
1) If we declare literal then singleton nahi banata 
2) if constructor se banegaa then haa Hamesha singleton banega

Object.create
create se hi constructor method banata hai 
*/

// Object literals

const jsUser  = {
    name : 'vikas',
    age : 27,
    location: 'mumbai',
    email : "vikas.shukla966@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Tuesday"],
    "full Name"  : "Vikas Shukla "
}

// Behind the seen object key treat as string 

// we can access object in two ways

console.log(jsUser["name"]);  // vikas but here we don't have dot notation

// why above method is useful

console.log(jsUser["full Name"]);   // Vikas Shukla 

const mySymbol = new Symbol('key1')