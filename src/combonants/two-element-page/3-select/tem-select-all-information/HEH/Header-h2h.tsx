import React from 'react'

function Header_h2h({DataUsige}:any) {
    const {country_name,league_name,event_date}=DataUsige[0]
  return (
    <div className='header-h2h-container'>
        <div className='text-h2h'>
            <p className='name-leage'>
                {league_name} {event_date}
            </p>
            <p className='country-h2h'> 
                {country_name}
            </p>
        </div>
    </div>
  )
}

export default Header_h2h
