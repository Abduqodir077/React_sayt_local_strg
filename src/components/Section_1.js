import kategories from "../img/kategories.png";

function Section_1() {
  return (
    <>
      <div className="Section_1">
        <div className="sec1_box1">
          <div className="sec1_1">
            <div className="sec_1_button">
              <button>
                <img src={kategories} alt="img1" />
              </button>
              <p>ALL COLLECTIONS</p>
            </div>
            <div className="sec1_links">
              <a href="#">HOME</a>
              <a href="#">SHOP</a>
              <a href="#">BLOG</a>
              <a href="#">ABOUT</a>
              <a href="#">CONTACT US</a>
            </div>
          </div>
          <div className="sec1_box2">
            <div className="sec1_2">
              <div className="sec_1_2">
                <p>All</p>
              </div>
              <div className="sec_1_2">
                <p>New Arrivals</p>
              </div>
              <div className="sec_1_2">
                <p>Hot Sale</p>
              </div>
              <div className="sec_1_2">
                <p>Furniture</p>
              </div>
              <div className="sec_1_2">
                <p>Amrature</p>
              </div>
              <div className="sec_1_2">
                <p>Tabble</p>
              </div>
              <div className="sec_1_2">
                <p>Chair</p>
              </div>
              <div className="sec_1_2">
                <p>Sofa</p>
              </div>
              <div className="sec_1_2">
                <p>Mirrors</p>
              </div>
              <div className="sec_1_2">
                <p>Stools</p>
              </div>
              <div className="sec_1_2">
                <p>Benches</p>
              </div>
            </div>
            <div className="sec1_3_box">
              <div className="sec1_3">
                <div className="sec1_3_1">
                <p>TOP COLLECTIONS 2022</p>
                <b>
                  We Serve Your <br />
                  Dream Furniture
                </b>
                <span>Get 50% off all products</span>
                <button>SHOP NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section_1;
