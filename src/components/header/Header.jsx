import React from 'react'
import "./header.css"
import fotopersonal from "./fotopersonal.jpg"
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';



export default function Header() {
  return (
    <div className='header'>
        <div className="headerPhoto">
          <img src={fotopersonal} alt="foto-personal" className={"headerPhotoImg"}/>
        </div>
        <div className="headerNombres">
          <h1>María Camila Guzmán Ramos</h1>
          <p>Estudiante de analisis y desarrollo de software</p>
        </div>
        <div className="headerContacto">
          <ul className='contactList'>
              <li className='contactListItem'><p><SmartphoneIcon/></p>    <p>(+57) 3106326454</p></li>           
              <li className='contactListItem'><p><LocationOnIcon/></p>    <p>Pereira / Risaralda - Colombia</p></li>
              <li className='contactListItem'><p><EmailIcon/></p> <p>maria.guzman6@misena.edu.co</p></li>  
              <li className='contactListItem'><p><AlternateEmailIcon/></p> <p>mariaguramos12@gmail.com</p></li>            
          </ul>
        </div>       
    </div>
  )
}
