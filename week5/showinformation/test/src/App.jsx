
import './App.css';
import React from 'react';
import Profile from './profile/Profile';















// const number = 6;

function App() {
  return (
    <>
      {/* b: a: {number % 2 === 0 ? 'So chan' : 'so le'}
      {number % 2 === 0 ? <h1 style={{
        backgroundColor: 'red'
      }}>so chan</h1> : <h1>so le</h1>} */}

      <Profile />
    </>
  );
}

export default App;




// export default function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/lICfvbD.jpg"
//       alt="Aklilu Lemma"
//     />
//   );
// }





// export default function Profile() {
//   return (
//     <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />
//   );

// }



// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/QIrZWGIs.jpg"
//       alt="Alan L. Hart"
//     />
//   );
// }

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Amazing scientists</h1>
//       <Profile />
//       <Profile />
//       <Profile />
//     </section>
//   );
// }


// export default function Congratulations() {
//   return (
//     <h1>Good jod</h1>
//   );
// }








// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {name} {isPacked ? '✔' : '❌'}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item
//           isPacked={true}
//           name="Space suit"
//         />
//         <Item
//           isPacked={true}
//           name="Helmet with a golden leaf"
//         />
//         <Item
//           isPacked={false}
//           name="Photo of Tam"
//         />
//       </ul>
//     </section>
//   );
// }


// function Item({ name, importance }) {
//   return (
//     <li className="item">
//       {name} {importance > 0 ? <i>(importance: {importance})</i> : <i></i>}
//     </li>
//   );
// }

// export default function PackingList() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item
//           importance={9}
//           name="Space suit"
//         />
//         <Item
//           importance={0}
//           name="Helmet with a golden leaf"
//         />
//         <Item
//           importance={6}
//           name="Photo of Tam"
//         />
//       </ul>
//     </section>
//   );
// }
