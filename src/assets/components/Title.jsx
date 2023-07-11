

function Title(props) {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4" id="all">{props.title}</h1>
        </div>
    </div>
    </>
  );
}

export default Title;