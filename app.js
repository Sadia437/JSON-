
// JSON = javascript object notation

// const manush = {
//     name: 'ahmmad',
//     age: 15,
//     job: 'student',
//     skin: 'white'
// }
// console.log(manush);
// const convert = JSON.stringify(manush);
// console.log(convert);
// const convertToObject = JSON.parse(convert)
// console.log(convertToObject);

// ***** amader dataguloke jokhon database a pthabo tokhon seta object theke string a conver hoe jabe..
// object k string a convert korte hole JSON k call kore (JSON.stringify) korle object gulo string a convert hobe abong string theke abar object a convert korte hole (JSON.parse) use korte hobe..........



// API  = Aplication Programming Interface
// API holo link,, jekhane osongkho  information  deoa ache,,,
// API এর পূর্ণরূপ হলো Application Programming Interface।

// সাধারণভাবে বললে:
// API হলো একটি মাধ্যম যার মাধ্যমে দুইটি সফটওয়্যার অ্যাপ্লিকেশন একে অপরের সাথে যোগাযোগ করতে পারে।

// উদাহরণ দিয়ে বোঝানো যাক:
// ধরো, তুমি একটি ওয়েদার অ্যাপ বানালে। কিন্তু তোমার কাছে সঠিক আবহাওয়ার ডেটা নেই। তখন তুমি একটি ওয়েদার API ব্যবহার করতে পারো (যেমন: OpenWeather API)। এই API-এর মাধ্যমে তুমি সেই সার্ভার থেকে আবহাওয়ার তথ্য নিয়ে আসতে পারবে এবং তোমার অ্যাপে দেখাতে পারবে।

// API কীভাবে কাজ করে?
// ১. Client (তুমি) — কোনো অনুরোধ পাঠাও API-এর মাধ্যমে।
// ২. Server (API Provider) — অনুরোধ গ্রহণ করে প্রয়োজনীয় ডেটা পাঠিয়ে দেয়।
// ৩. Client — সেই ডেটা ব্যবহার করে কিছু দেখায় বা করে।



function loadApi() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => displayInfo(json))
}

loadApi()

// API theke jokhon kono data amader website a dekhabo tokhon ( fatch a sei datar link (ctrl+l press kore location select kore and ctrl+c coppy kore fatch bosie dite hobe))
// .then(response=> response.json) ekhane ekta name niechi response jeta variable hisebe, arrow function call korechi abong setake.json call korechi jate json kaj kore.. (ekhane .json k call koray json giye sei link a data k dekhbe se ki obosthay ache, jodi string a thake tahole jason automatic object a convert korbe......)

// *******nice akti function niechi. jehetu function sobkhanei call kora jay sehetu function k amra(displayInfo function k console.log er jaygay call korechi abong parameter hisebe json k call korechi)

function displayInfo(users) {

    const usersDiv = document.getElementById('users');
    // console.log(usersDiv);
    for (const user of users) {
        // console.log(user);

        const div = document.createElement('div');
        div.classList.add('user')
        div.innerHTML = `
         <h1>${user.name}</h1>
         <p>${user.email}</p>
         <span>${user.phone}}</span>
         <p>${user.username}</p>`
        console.log(div);
        usersDiv.appendChild(div)
    }
}








