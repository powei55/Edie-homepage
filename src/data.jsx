import { 
    HiCode,
    HiPencil,
    HiOutlineViewList
 } from "react-icons/hi";

 import SmartHome from '../src/assets/images/smarthome.jpg'
 import OnBoard from '../src/assets/images/onboard.png'
 import Booking from '../src/assets/images/booking.png'
 import JuiceProduct from '../src/assets/images/juice-product.png'

export const data = [
    {
        id:1,
         job:'UI/UX Design', 
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.',    
        Icon: HiPencil,
        color: `#27AE60`
    },

  {
    id:2,
     job:'Front End', 
    Icon: HiCode, 
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.',
    color: `#27AE60`
},

{
    id:3, job:'Back End', 
    Icon: HiOutlineViewList ,
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.',
    color: `#27AE60`
},
]

export const gallery = [
    {
        id:1,
        img: SmartHome,
        title: 'Smart home dashboard',
        about: 'Full stack application'
    },
    {
        id:2,
        img: OnBoard,
        title: 'Onboard application',
        about: 'UX/UI design'
    },
    {
        id:3,
        img: Booking,
        title: 'Booking system',
        about: 'Mobile application'
    },
    {
        id:4,
        img: JuiceProduct,
        title: 'Juice product homepage',
        about: 'Front End applicati on'
    },
]

