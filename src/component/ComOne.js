import "../Assets/css/ComOne.css";
function ComOne(props) {
  console.log(props);

  return (
    <>
      <div className="parent">
        <h1>
          {props.first} {props.second}
        </h1>
      </div>
    </>
  );
}
export default ComOne;
