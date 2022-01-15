import "./App.css";
import { Carousel } from "./component/Carousel";
// import Details from "./component/Details";
// import { Modal } from "./component/Modal";

function App() {
  // let abc = [
  //   { first_name: "kartik", last_name: "gupta" },
  //   { first_name: "nitin", last_name: "kumar" },
  //   { first_name: "shaurya", last_name: "kumar" },
  // ];

  // When the user clicks the button, open the modal
  // const open = () => {
  //   document.getElementById("myModal").style.display = "block";
  // };

  return (
    <>
      {/* <Details data={abc} />

      <h2>Modal Example</h2>

      <button id="myBtn" onClick={open}>
        Open Modal
      </button>
      <Modal /> */}
      <Carousel />
    </>
  );
}

export default App;
