import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./style/style.scss"

function Header({Datause}:any) {
    console.log(Datause)
    const {country_name,country_logo,league_name}=Datause;
  return (
    <ul className='header-container-section'>
        <li>
            <img src={country_logo} alt="" />
            <div>
                <p style={{fontWeight:"bold"}}>{country_name}</p>
                <p>{league_name}</p>
            </div>
        </li>
        <li>
            <StarBorderIcon/>
        </li>
    </ul>
  )
}

export default Header