import Header from './../components/Header';
import BGvideo from './../assets/videos/Hero/pexels-pavel-danilyuk-5495781 (720p).mp4'

function HeroSection() {
    return (
      <div className="heroSection">
        <video src={BGvideo} autoPlay loop muted />
        <div className="heroContent">
          <Header />
          <div className="heroTitle">
            <div className='titleBox'>
              <h1>
                Reign Westry
              </h1>
                <span>Web Developer</span>
            </div>
            <div className="heroButtonBox">
              <button onClick className="BTN BTN-HireMe">
                Hire Me
              </button>{" "}
              {/* //? Go to Project Hire Form */}
              <button onClick className="BTN BTN-SeeMore">
                See More
              </button>{" "}
              {/* //? GO to gallery Page */}
            </div>
          </div>
        </div>
      </div>
    );
}

export default HeroSection;