import BGimg from "./../../assets/imgs/Backgrounds/passion.png";

function PassionAndFocusSection() {
  return (
    <section
      style={{ backgroundImage: `url(${BGimg})` }}
      className="pNfSection"
    >
      <div className="statementHolder">
        <div className="pStatement">
          <p>
            I design and develop websites and apps to solve or everyday
            problems.
          </p>
        </div>
      </div>

      <div className="quoteBox">
        <h3 className="PowerQuote">
          <span className="quoteOne">ENVISION, </span>
          <span className="quoteTwo">Design, </span>
          <span className="quoteThree">Develop, </span>
          <span className="quoteFour">Innovate</span>
        </h3>
        <div className="queryBox">
          <p>Do you have an app or website idea that you want to create?</p>
          <p>Does your project have a problem?</p>
                  <p>Let's discuss it and see how I can help...</p>
                  <button className='BTN BTN-contactMe' onClick>Contact Me</button> 
                  {/* //# CONNECT TO THE CONTACT FORM OR JUMP TO THE FORM */}
        </div>
      </div>
    </section>
  );
}

export default PassionAndFocusSection;
