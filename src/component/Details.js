import ComOne from "./ComOne";
function Details(props) {
  console.log(props);
  return (
    <>
      <div className="par">
        <ComOne
          first={props.data[0].first_name}
          second={props.data[0].last_name}
        />
      </div>
      <div className="par">
        <ComOne
          first={props.data[1].first_name}
          second={props.data[1].last_name}
        />
      </div>
      <div className="par">
        <ComOne
          first={props.data[2].first_name}
          second={props.data[2].last_name}
        />
      </div>
    </>
  );
}
export default Details;
