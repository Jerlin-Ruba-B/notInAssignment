import {BsFillPersonFill, BsTelephoneFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'
import {AiFillCopyrightCircle} from 'react-icons/ai'
import './index.css'
import Header from '../Header'

const HomePage = () => (
  <div className="outerContainer">
    <Header />
    <div className="formAndImgContainer">
      <div className="formHolder">
        <form className="formContainer">
          <h1 className="formHeading">Fill in the details to get a call</h1>
          <div className="iconAndInputContainer">
            <BsFillPersonFill className="iconsImg" />
            <input type="text" placeholder="Full name" className="inputEl" />
          </div>
          <div className="iconAndInputContainer">
            <BsTelephoneFill className="iconsImg" />
            <input type="text" placeholder="Phone number" className="inputEl" />
          </div>
          <div className="iconAndInputContainer">
            <MdLocationOn className="iconsImg" />
            <input type="text" placeholder="Location" className="inputEl" />
          </div>
          <div className="iconAndInputContainer">
            <input type="checkbox" id="newBox" className="newCheck" />
            <label htmlFor="newBox" className="checkBoxLabel">
              By continuing, you agree to our{' '}
              <span className="spanMsg">T&C</span> and{' '}
              <span className="spanMsg">private policy</span>
            </label>
          </div>
          <div className="proceedBtnContainer">
            <button type="submit" className="proceedBtn">
              Proceed
            </button>
          </div>
        </form>
        <img
          src="https://res.cloudinary.com/ruba/image/upload/v1695183695/Offer_line_dczyu2.svg"
          alt="offers"
          className="offerImg"
        />
      </div>
      <div className="imgsContainer">
        <img
          src="https://res.cloudinary.com/ruba/image/upload/v1695183171/Best_in_class_lab_tests_ztf0kz.svg"
          alt="book"
          className="bookName"
        />
        <img
          src="https://res.cloudinary.com/ruba/image/upload/v1695183383/Component_1_owetd5.svg"
          alt="Labimage"
          className="labImg"
        />
      </div>
    </div>
    <div className="accrediationContainer">
      <div className="accreLogosAndLabel">
        <img
          src="https://res.cloudinary.com/ruba/image/upload/v1695184813/Rectangle_80_p8nwgm.svg"
          alt="accLogo"
          className="accLogo"
        />
        <p className="accName">NABL Accredited Labs</p>
      </div>
      <div className="accreLogosAndLabel">
        <img
          src="https://res.cloudinary.com/ruba/image/upload/v1695184992/Rectangle_81_lmkwec.svg"
          alt="accLogo"
          className="accLogo"
        />
        <p className="accName">Free sample collection</p>
      </div>
    </div>
    <div className="keepExpandingContainer">
      <h1 className="keepExpandingTitle">
        We keep <span className="spanKeepExpanding">expanding</span>!
      </h1>
      <img
        src="https://res.cloudinary.com/ruba/image/upload/v1695185524/Vector_2_hvg7lg.svg"
        alt="vector"
        className="vector1"
      />
    </div>
    <div className="groupContainer">
      <div className="cards">
        <p className="counts">5+</p>
        <p className="counts names">Labs</p>
      </div>
      <div className="cards">
        <p className="counts">100+</p>
        <p className="counts names">Collection centers</p>
      </div>
      <div className="cards">
        <p className="counts">1000+</p>
        <p className="counts names">Monthly tests</p>
      </div>
      <div className="cards">
        <p className="counts">2200+</p>
        <p className="counts names">Test menu</p>
      </div>
      <div className="cards">
        <p className="counts">5+</p>
        <p className="counts names">Cities present in</p>
      </div>
    </div>
    <div className="topPackagesContainer">
      <h1 className="topPackageTitle">
        Top <span className="spanTopPackage">Packages</span>
      </h1>
      <p className="paraExplore">
        Explore our wide range of tests! To ensure that you dont miss out on any
        chance to keep your self healthy.
      </p>
      <div className="cardPackages">
        <div className="packageCards">
          <h2 className="cardTitle">Basic Full Body CheckUp</h2>
          <div className="ratingStarContainer">
            <p className="rating">4.3</p>
            <img
              src="https://res.cloudinary.com/ruba/image/upload/v1695187690/grade_twuua8.svg"
              alt="stars"
              className="star"
            />
            <p className="reviews">(75 Reviews)</p>
          </div>
          <p className="tests">Number of tests - 70</p>
          <p className="mrp">
            MRP <span className="rejectedAmt">10,000 </span> 8506
          </p>
          <button type="button" className="bookNowBtn">
            Book Now
          </button>
        </div>
        <div className="packageCards">
          <h2 className="cardTitle">Basic Full Body CheckUp</h2>
          <div className="ratingStarContainer">
            <p className="rating">4.3</p>
            <img
              src="https://res.cloudinary.com/ruba/image/upload/v1695187690/grade_twuua8.svg"
              alt="stars"
              className="star"
            />
            <p className="reviews">(75 Reviews)</p>
          </div>
          <p className="tests">Number of tests - 70</p>
          <p className="mrp">
            MRP <span className="rejectedAmt">10,000 </span> 8506
          </p>
          <button type="button" className="bookNowBtn">
            Book Now
          </button>
        </div>
        <div className="packageCards">
          <h2 className="cardTitle">Basic Full Body CheckUp</h2>
          <div className="ratingStarContainer">
            <p className="rating">4.3</p>
            <img
              src="https://res.cloudinary.com/ruba/image/upload/v1695187690/grade_twuua8.svg"
              alt="stars"
              className="star"
            />
            <p className="reviews">(75 Reviews)</p>
          </div>
          <p className="tests">Number of tests - 70</p>
          <p className="mrp">
            MRP <span className="rejectedAmt">10,000 </span> 8506
          </p>
          <button type="button" className="bookNowBtn">
            Book Now
          </button>
        </div>
      </div>
    </div>
    <div className="keepExpandingContainer">
      <h1 className="keepExpandingTitle">
        Why <span className="spanKeepExpanding">choose</span> us!
      </h1>
      <img
        src="https://res.cloudinary.com/ruba/image/upload/v1695185524/Vector_2_hvg7lg.svg"
        alt="vector"
        className="vector1"
      />
      <p className="paraExplore">
        We want you and your heart to be healthy so you can live a happy life!
      </p>
      <div className="chooseUsCardContainer">
        <div className="cardContainer1">
          <div className="chooseUsdiv">
            <div className="logoPosition">
              <img
                src="https://res.cloudinary.com/ruba/image/upload/v1695184813/Rectangle_80_p8nwgm.svg"
                alt="accLogo"
                className="cardsLogonew"
              />
            </div>
            <p className="accName">NABL Accredited Labs</p>
            <p className="accName new">
              Get accurate and safe results from our NABL-certified lab
              partners.
            </p>
          </div>
          <div className="chooseUsdiv">
            <div className="logoPosition">
              <img
                src="https://res.cloudinary.com/ruba/image/upload/v1695190937/Ellipse_13_drkzql.svg"
                alt="accLogo"
                className="cardsLogonew"
              />
            </div>
            <p className="accName">Timely collections</p>
            <p className="accName new">
              We collect samples timely to prevent treatment delays and ensure
              your continued well-being.
            </p>
          </div>
        </div>
        <div className="cardContainer2">
          <div className="chooseUsdiv">
            <div className="logoPosition">
              <img
                src="https://res.cloudinary.com/ruba/image/upload/v1695191420/Ellipse_14_lfjnxq.svg"
                alt="accLogo"
                className="cardsLogonew"
              />
            </div>
            <p className="accName">Value experience</p>
            <p className="accName new">
              Experience seamless care without the hassle of waiting in long
              lines for an appointment. Book with us for a healthier lifestyle.
            </p>
          </div>
          <div className="chooseUsdiv">
            <div className="logoPosition">
              <img
                src="https://res.cloudinary.com/ruba/image/upload/v1695191494/Ellipse_15_ex4mpo.svg"
                alt="accLogo"
                className="cardsLogonew"
              />
            </div>
            <p className="accName">Transparency</p>
            <p className="accName new">
              Enjoy hassle free medical assistance with our transparent
              approach. We prioritize transparency for your smooth medical
              journey.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="footerContainer">
        <div className="footerContainer1">
          <img
            src="https://res.cloudinary.com/ruba/image/upload/v1695145961/NIL_logo_Transparent_1_1_legfiu.svg"
            alt="logo"
            className="footerlogoSize"
          />
          <p className="footerDesc">
            Book doctor appointments online and get your ailments treated in no
            time with our expert medical support systems. Get rid of all your
            medical problem with our expert panel of doctors who guide you
            towards a healthier life.
          </p>

          <div className="mobileContainer">
            <p className="std">+91 | </p>
            <input type="text" className="noValue" />
            <button type="button" className="mobilepic">
              <BsTelephoneFill color="white" />
            </button>
          </div>
        </div>
        <div className="footerContainer2">
          <h1 className="footerTitle">Services</h1>
          <ul>
            <li className="listItemsFooter">Appointments</li>
            <li className="listItemsFooter">Lab tests</li>
            <li className="listItemsFooter">A-Z medicine</li>
            <li className="listItemsFooter">Doctor support</li>
          </ul>
        </div>
        <div className="footerContainer2">
          <h1 className="footerTitle">Legal</h1>
          <ul>
            <li className="listItemsFooter">General info</li>
            <li className="listItemsFooter">Privacy policy</li>
            <li className="listItemsFooter">Terms of services</li>
            <li className="listItemsFooter">Consultation</li>
            <li className="listItemsFooter">How it works</li>
          </ul>
        </div>
        <div className="footerContainer2">
          <h1 className="footerTitle">Talk to us</h1>
          <ul>
            <li className="listItemsFooter">support@notinline.com</li>
            <li className="listItemsFooter">appointment@notinline.com</li>
            <li className="listItemsFooter">+91 12345 67899</li>
            <li className="listItemsFooter">+91 97642 09752</li>
          </ul>
        </div>
      </div>
      <hr className="horizontalLine" />
      <div className="copyRights">
        <AiFillCopyrightCircle color="white" />
        <p className="copy">2021-2023 All Rights Reserved</p>
      </div>
    </div>
  </div>
)

export default HomePage
