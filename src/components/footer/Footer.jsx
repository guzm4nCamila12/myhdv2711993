import React from 'react'
import "./footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';




export default function Footer() {
  return (
    <div className='footer'>
        <ul className='ulFooter'>
           <li className='contactListItemFooter'><a href=""><p><GitHubIcon/></p></a></li>
            <li className='contactListItemFooter'><a href=""><p><LinkedInIcon/></p></a></li>
            <li className='contactListItemFooter'><a href=""><p><FacebookIcon/></p></a></li>
        </ul>

    </div>
  )
}
