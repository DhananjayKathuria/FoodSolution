import { CDN_LINK } from "../utils/contents";

const ResCard = (props) => {
  const { resData } = props;
  return (
    <div className="res_card m-4 p-4 w-[200px] bg-slate-100 rounded-lg">
      <img
        className="res_logo rounded-lg"
        src={CDN_LINK + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4">{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.sla.slaString}</h4>
      <h4>{resData.info.avgRating} stars</h4>
      <h4>{resData.info.costForTwo}</h4>
    </div>
  );
};

export const topRatedLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label>Top Rated</label>
        <ResCard {...props} />
      </div>
    );
  };
};
export default ResCard;
