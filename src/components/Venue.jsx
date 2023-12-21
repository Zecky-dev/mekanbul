import { NavLink, useNavigate } from "react-router-dom";
import Rating from "./Rating";
import FoodAndDrinkList from "./FoodAndDrinkList";
import AdminButton from "./AdminButton";
import {formatDistance} from "../services/Utils";
import VenueDataService from "../services/VenueDataService";
const Venue = ({ venue, admin }) => {
  
  const navigate = useNavigate()

  const performClick= (type) => {
    if(type === "update") {
      navigate("./addupdate",{state: {type,...venue}})
    }
    else {
      VenueDataService.removeVenue(venue._id).then((val) => {
        navigate('/admin',{state: val.data})
      })
      
    }

  };
  return (
    <div className="list-group">
      <div className="col-xs-12 col-sm-12">
        <div className="col-xs-12 list-group-item">
          <h4>
            <NavLink to={`/venue/${venue._id}`} state={{ id: venue._id }}>
              {venue.name}{" "}
            </NavLink>
            <Rating rating={venue.rating} />
          </h4>
          <span className="span badge pull-right badge-default">
            {!admin ? formatDistance(venue.distance) : ""}
          </span>
          {admin ? (<AdminButton type="primary" name="Sil" onClick={() => performClick("delete")}/>):""}
          {admin ? (<AdminButton type="info" name="Güncelle" onClick={() => performClick("update")}/>):""}
          <p className="address"> {venue.address}</p>
          <p>
            <FoodAndDrinkList foodAndDrinkList={venue.foodanddrink} />
          </p>
         
        </div>
      </div>
    </div>
  );
};
export default Venue;
