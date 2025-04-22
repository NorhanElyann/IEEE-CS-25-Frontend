/*
    Destructuring
    - Challenge
*/

let chosen = 1;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];


if(chosen==1){
    let{title:t , age:a , available: av , skills: [,two]}= myFriends[0];
    console.log(t);
    console.log(a);
    console.log(av ? "Available" : "Not Available")
    console.log(two)
}else if(chosen==2){
    let{title:t , age:a , available: av , skills: [,two]}= myFriends[1];
    console.log(t);
    console.log(a);
    console.log(av ? "Available" : "Not Available")
    console.log(two)
}else if(chosen==3){
    let{title:t , age:a , available: av , skills: [,two]}= myFriends[2];
    console.log(t);
    console.log(a);
    console.log(av ? "Available" : "Not Available")
    console.log(two)
}
