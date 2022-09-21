import React from "react";
// export default function Table(props) {
//   return (
//     <div>
//       <table className="table table-striped">
//         <thead className="thead-dark">
//           <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>UserName</th>
//             <th>Contact</th>
//             <th>Email</th>
//             { <th>city</th>}
//           </tr>
//         </thead>
//         <tbody>
//           {props.dataPass.map((singleObj) => {
//             return (
//               // Whenever you render a list in react you need to add an unique ID to rendering element,
//               // So react will know which part of it needs to be updated. - key={singleObj.id}
//               <tr key={singleObj.id}>
//                 <td>{singleObj.id}</td>
//                 <td>{singleObj.name}</td>
//                 <td>{singleObj.username}</td>
//                 <td>{singleObj.phone}</td>
//                 <td>{singleObj.email}</td>
//                 {<td>{singleObj.address.city}</td> }
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       {/* <input type="text" className="userInput"/> */}
//     </div>
//   );
// }


// export default function Table(props) {
//   return (
//     <div>
//       <table className="table table-striped">
//         <thead className="thead-dark">
//           <tr>
//             <th>Id</th>
//             <th>course</th>
//             <th>email</th>
//             <th>fees</th>
//             <th>name</th>
            
//           </tr>
//         </thead>
//         <tbody>
//           {props.dataPass.map((singleObj) => {
//             return (
//               // Whenever you render a list in react you need to add an unique ID to rendering element,
//               // So react will know which part of it needs to be updated. - key={singleObj.id}
//               <tr key={singleObj.id}>
//                 <td>{singleObj.id}</td>
//                 <td>{singleObj.course}</td>
//                 <td>{singleObj.email}</td>
//                 <td>{singleObj.fees}</td>
//                 <td>{singleObj.name}</td>
             
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       {/* <input type="text" className="userInput"/> */}
//     </div>
//   );
// }