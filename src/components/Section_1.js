import kategories from "../img/kategories.png";
import chair1 from "../img/chair1.png";
import chair2 from "../img/chair2.png";
import chair3 from "../img/chair3.png";
import sec1_img1 from "../img/sec1_img1.png";
import sec1_img2 from "../img/sec1_img2.png";
import sec1_img3 from "../img/sec1_img3.png";
import sec1_img4 from "../img/sec1_img4.png";

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
                <div className="sec1_3_2">
                    <div className="sec1_3_mini">
                        <img src={chair1} alt="chair1" />
                    </div>
                    <div className="sec1_3_mini">
                        <img src={chair2} alt="chair2" />
                    </div>
                    <div className="sec1_3_mini">
                        <img src={chair3} alt="chair3" />
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sec1_box3">
            <div className="sec1_box3_1">
              <div className="sec1_box3_img">
                <img src={sec1_img1} alt="sec1_img1" />
              </div>
              <div className="sec1_box3_par">
                <p>Free Shipping</p>
                <span>Orders over $100</span>
              </div>
            </div>
            <div className="sec1_box3_1">
              <div className="sec1_box3_img">
                <img src={sec1_img2} alt="sec1_img1" />
              </div>
              <div className="sec1_box3_par">
                <p>Smart Gift Card</p>
                <span>Buy $1000 to get card</span>
              </div>
            </div>
            <div className="sec1_box3_1">
              <div className="sec1_box3_img">
                <img src={sec1_img3} alt="sec1_img1" />
              </div>
              <div className="sec1_box3_par">
                <p>Quick Payment</p>
                <span>100% secure payment</span>
              </div>
            </div>
            <div className="sec1_box3_1">
              <div className="sec1_box3_img">
                <img src={sec1_img4} alt="sec1_img1" />
              </div>
              <div className="sec1_box3_par">
                <p>24/7 Support</p>
                <span>Quick support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section_1;
