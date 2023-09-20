import Popup from 'reactjs-popup'
import {IoReorderThreeSharp} from 'react-icons/io5'

import './index.css'

const Header = () => (
  <div className="headerContainer">
    <div className="logoContainer">
      <img
        src="https://res.cloudinary.com/ruba/image/upload/v1695145961/NIL_logo_Transparent_1_1_legfiu.svg"
        alt="logo"
        className="logoSize"
      />
      <img
        src="https://res.cloudinary.com/ruba/image/upload/v1695146401/Screenshot_2023-07-25_165513-removebg-preview_1_hgie0d.svg"
        alt="companyLogo"
        className="nameLogo"
      />
    </div>
    <ul className="linksContainer">
      <li className="listItems">Home</li>
      <li className="listItems">Health Conditions</li>
      <li className="listItems Labs">Lab Tests</li>
      <li className="listItems">Medicines</li>
    </ul>
    <div className="btnsContainer">
      <div>
        <button className="headerBtn" type="button">
          For Patients
        </button>
        <button className="headerBtn" type="button">
          For hospitals
        </button>
      </div>
      <button className="playstroeBtn" type="button">
        <img
          src="https://res.cloudinary.com/ruba/image/upload/v1695148573/Component_11_umfgjg.svg"
          alt="logos"
          className="playStoreImg"
        />
      </button>
    </div>
    <Popup
      trigger={
        <button className="hiddenIcons" type="button">
          <IoReorderThreeSharp />
        </button>
      }
      position="bottom left"
    >
      <ul className="mobileViewTabsContainer">
        <li className="listItems newItems">Home</li>
        <li className="listItems newItems">Health Conditions</li>
        <li className="listItems Labs newItems">Lab Tests</li>
        <li className="listItems newItems">Medicines</li>
        <li className="listItems newItems">
          <button className="headerBtn" type="button">
            For Patients
          </button>
        </li>
        <li className="listItems">
          <button className="headerBtn" type="button">
            For hospitals
          </button>
        </li>
      </ul>
    </Popup>
  </div>
)

export default Header
