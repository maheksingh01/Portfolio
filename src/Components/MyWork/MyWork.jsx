import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          // return <img key={index} src={work.w_img} alt="" />;
          return (
            <AnchorLink key={index} href={work.w_url}>
              <img src={work.w_img} alt="" />
              <p className="img_desc">{work.w_name}</p>
            </AnchorLink>
          );
        })}
        {/* {mywork_data.map((work, index) => {
          return <p key={index}>{work.w_name}</p>;
        })} */}
      </div>
      <div className="mywork-showmore">
        <p>ShowMore</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default MyWork;
