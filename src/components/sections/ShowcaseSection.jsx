import ProjectDetails from './../ProjectDetails';


import ThumbOne from "./../../assets/imgs/Project-Thumbs/thumbOne.jpg";
import ThumbTwo from "./../../assets/imgs/Project-Thumbs/thumbTwo.jpg";
import ThumbThree from "./../../assets/imgs/Project-Thumbs/thumbThree.jpg";
import ThumbFour from "./../../assets/imgs/Project-Thumbs/thumbFour.jpg";



function ShowcaseSection() {
  return (
    <section className="showcaseSection">
      <div className="row">
        <div
          className="projectThumb"
          style={{ backgroundImage: `url(${ThumbOne})` }}
        >
            <ProjectDetails />
        </div>
        <div
          className="projectThumb"
          style={{ backgroundImage: `url(${ThumbTwo})` }}
        >
          img
        </div>
        <div
          className="projectThumb"
          style={{ backgroundImage: `url(${ThumbThree})` }}
        >
          img
        </div>
      </div>
      <div className="row">
        <div
          className="projectThumb"
          style={{ backgroundImage: `url(${ThumbFour})` }}
        >
          img
        </div>
        <div
          className="projectThumb"
          style={{ backgroundImage: `url(${ThumbOne})` }}
        >
          img
        </div>
        <div
          className="projectThumb"
          style={{ backgroundImage: `url(${ThumbThree})` }}
        >
          img
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;
