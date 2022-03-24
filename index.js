import express from 'express';

import {graphqlHTTP} from 'express-graphql';
import {schema} from './data/schema'
// import resolvers from './resolvers';

const app = express();

app.get('/', (req,res) => {
    res.send('Graphql is amazing!');
});

// const root = resolvers;

// mutation{
//     createFriend(input: {
      
//       firstName: "Radhey"
//       lastName:"Patel"
//       language:"gujju"
//       email:"abc@gmail.com"
//       contacts: [{firstName: "om", lastName:"patel"}, {firstName: "golu", lastName:"patel"}, {firstName: "yash", lastName:"patel"}]
      
//     }){
//       firstName
//       lastName
//       contacts {
//         firstName
//         lastName
//       }
//     }
//   }
// IsFriend: Boolean
// stock: [Stock]
// type Stock{
//     id: ID
//     price: Float
//     closingprice: Float
//     name: String
// }
// const friendDB ={};
// class Friend{
//     constructor(id, {firstname, lastname, gender, email}) {
//         this.id = id;
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.gender = gender;
//         this.email = email;
//     }

// }
// const root = { 
//     friend: () => {
//         return {
//             "id": 123456,
//             "firstname": "Om",
//             "lastname": "Patel",
//             "gender": "TBD",
//             "email": "patel@gmail.com"
//             // "email": [ 
//             //     // email: [Email]!
//             //     {email: "om@gmail.com"},
//             //     {email: "patel@gmail.com"}
//             // ]
//         }
//     }, 
//     createFriend: ({input}) => {
//         let id = require('crypto').randomBytes(10).toString('hex');
//         friendDB[id] = input;
//         return new Friend(id, input);
//     }
// };
app.use('/graphql', graphqlHTTP ({
    schema: schema,
    // rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));
