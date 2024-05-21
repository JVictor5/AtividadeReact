import Toolbar from "./cont/Toolbar";
import Gallery from "./cont/Gallery";
import Counter from "./cont/Counter";
import Form from "./cont/Form";
import MovingDot from "./cont/MovingDot";
import Form2 from "./cont/Form2";
import Form3 from "./cont/Form3";
import List from "./cont/List";
import List2 from "./cont/List2";
import ShapeEditor from "./cont/ShapeEditor";
import CounterList from "./cont/CounterList";
import List3 from "./cont/List3";
import List4 from "./cont/List4";
import BucketList from "./cont/BucketList";
import "./Atv04.scss";

// export default function button() {
//     function handleClick() {
//         alert('You clicked me!');
//     }

//     return (
//         <button onClick={handleClick}>
//             Click me
//         </button>
//     );
// }

// function AlertButton({ message, children }) {
//     return (
//         <button onClick={() => alert(message)}>
//             {children}
//         </button>
//     );
// }

// export default function Toolbar() {
//     return (
//         <div>
//             <AlertButton message="Playing!">
//                 Play Movie
//             </AlertButton>
//             <AlertButton message="Uploading!">
//                 Upload Image
//             </AlertButton>
//         </div>
//     )
// }

// function Button({ onClick, children }) {
//     return (
//         <button onClick={onClick}>
//             {children}
//         </button>
//     );
// }

// function PlayButton({ movieName }) {
//     function handlePlayClick() {
//         alert(`Playing ${movieName}!`);
//     }

//     return (
//         <Button onClick={handlePlayClick}>
//             Play "{movieName}"
//         </Button>
//     );
// }

// function UploadButton() {
//     return (
//         <Button onClick={() => alert('Uploading!')}>
//             Upload Image
//         </Button>
//     );
// }

// export default function Toobar() {
//     return (
//         <div>
//             <PlayButton movieName="Kiki's Delivery Service" />
//             <UploadButton />
//         </div>
//     );
// }

// function Button({ onSmash, children }) {
//     return (
//         <button onClick={onSmash}>
//             {children}
//         </button>
//     );
// }

// export default function Atv04() {
//     return (
//         <div>
//             <Button onSmash={() => alert('Playing!')}>
//                 Play Movie
//             </Button>
//             <Button onSmash={() => alert('Uploading')}>
//                 Upload Image
//             </Button>
//         </div>
//     );
// }

// export default function Atv04() {
//     return (
//         <Toolbar
//             onPlayMovie={() => alert('Playing!')}
//             onUploadImage={() => alert('Uploading!')}
//         />
//     );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//     return (
//         <div>
//             <Button onClick={onPlayMovie}>
//                 Play Movie
//             </Button>
//             <Button onClick={onUploadImage}>
//                 Upload Image
//             </Button>
//         </div>
//     );
// }

// function Button({ onClick, children }) {
//     return (
//         <button onClick={onClick}>
//             {children}
//         </button>
//     );
// }

// export default function Toolbar() {
//     return (
//         <div className="Toolbar" onClick={() => {
//             alert('You clicked on the toolbar!');
//         }}>
//             <button onClick={() => alert('Playing!')}>
//                 Play Movie
//             </button>
//             <button onClick={() => alert('Uploading!')}>
//                 Upload Image
//             </button>
//         </div>
//     );
// }

// export default function Signup() {
//     return (
//         <form onSubmit={e => {
//             e.preventDefault();
//             alert('Submitting!');
//         }}>
//             <input />
//             <button>Send</button>
//         </form>
//     );
// }

export default function Atv04() {
  return (
    <>
      <div className="componrnt">
        <h2>ShapeEditor component</h2>
        <ShapeEditor />
      </div>
      <div className="componrnt">
        <h2>Toolbar component</h2>
        <Toolbar />
      </div>
      <div className="componrnt">
        <h2>Gallery component</h2>
        <Gallery />
      </div>
      <div className="componrnt">
        <h2>Counter component</h2>
        <Counter />
      </div>
      <div className="componrnt">
        <h2>Form component</h2>
        <Form />
      </div>
      <div className="componrnt">
        <h2>MovingDot component</h2>
        <MovingDot />
      </div>
      <div className="componrnt">
        <h2>Form2 component</h2>
        <Form2 />
      </div>
      <div className="componrnt">
        <h2>Form3 component</h2>
        <Form3 />
      </div>
      <div className="componrnt">
        <h2>List component</h2>
        <List />
      </div>
      <div className="componrnt">
        <h2>List2 component</h2>
        <List2 />
      </div>
      <div className="componrnt">
        <h2>CounterList component</h2>
        <CounterList />
      </div>
      <div className="componrnt">
        <h2>List3 component</h2>
        <List3 />
      </div>
      <div className="componrnt">
        <h2>List4 component</h2>
        <List4 />
      </div>
      <div className="componrnt">
        <h2>BucketList component</h2>
        <BucketList />
      </div>
    </>
  );
}
