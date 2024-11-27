// import { doc, getDoc } from "firebase/firestore";
// import React, { useEffect, useState } from "react";
// import { db } from "../../firebase.config";

// export default function ResultsHistory() {
// //   const [userData, setUserData] = useState([]);

// //   const docRef = doc(db, "esa44", "Lillamb@fun");

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const docSnap = await getDoc(docRef);

// //       if (docSnap.exists()) {
// //         console.log("Document data:", docSnap.data());
// //         setUserData(docSnap.data());
// //       } else {
// //         console.log("No such document!");
// //       }
// //     };

// //     fetchData(); // Call the async function
// //   }, []);

//   return (
//     <div
//       className="history-container"
//       style={{
//         display: "flex",
//         width: "80%",
//         margin: "auto",
//         marginTop: "5%",
//         flexWrap: "wrap",
//         gap: "16px",
//       }}
//     >
//       {userData.results &&
//         userData.results.map((result, index) => (
//           <div key={index} className="card-container">
//             <div
//               className="card"
//               style={{
//                 textAlign: "center",
//                 backgroundColor: "#f1f1f1",
//                 borderRadius: "10px",
//                 width: "100%",
//                 padding: "2%"
//               }}
//             >
//               <div className="card-title" style={{ fontSize: "15px" }}>
//                 {result.date}
//               </div>
//               <div className="card-body">esa44 awereness: {result.result}%</div>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// }
