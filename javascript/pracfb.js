const facebookProfiles = [

    {

        firstName: "Akash",

        lastName: "Agarwal",

        location: "rampur",

    },

    {

        firstName: "Pritesh",

        lastName: "Kumar",

        location: "gurgaon",

    },

    {

        firstName: "Sabiha",

        lastName: "Khan",

        location: "gurgaon",

    },

    {

        firstName: "Suyash",

        lastName: "Kashyap",

        location: "alwar",

    },

    {

        firstName: "Jay",

        location: "gurgaon",

    },

];

// return the full names of the facebook users who belong to guragon

// HINT: use higher order functions and chain them
function filtername(person){
    if(person.location==="gurgaon"){
        return true
    }
    else{
        return false
    }
}
const people=facebookProfiles.filter(filtername)
console.log(people)

ouput
 //  { firstName: 'Pritesh', lastName: 'Kumar', location: 'gurgaon' },
//   { firstName: 'Sabiha', lastName: 'Khan', location: 'gurgaon' },
//   { firstName: 'Jay', location: 'gurgaon' }
// 



// ======================================================================== //
