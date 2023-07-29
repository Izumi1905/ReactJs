import './App.css';
import { Routes, Route, Link} from 'react-router-dom';
// import { Routes, Route, Link } from 'react-router-dom';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';

// const App = () => {
//   return (
//     <>
//       <Formik
//         initialValues={{
//           username: ""
//         }}
//         onSubmit={(values) => console.log(values)}
//       >
//         {({ handleChange, handleSubmit}) =>{
//           <>
//             <input type="text" name='username' onChange={handleChange} />
//             <button type='button' onClick={handleSubmit}>Submit</button>
//           </>
//         }}
//       </Formik>
//     </>
//   );
// }

// export default App;


const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;