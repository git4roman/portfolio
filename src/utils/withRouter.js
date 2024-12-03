import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(OriginalComponent) {
  function NewComponent(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    // console.log("Yaa cha hai", props.name);
    return (
      <OriginalComponent
        {...props}
        location={location}
        params={params}
        navigate={navigate}
      />
    );
  }

  return NewComponent;
}

export default withRouter;
