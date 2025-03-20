import { ChevronDown } from 'lucide-react';
import { loginRoute, registerRoute } from '../Route';

export const AboutDropdown = [
    {title:"About Noohra",router:"/About"},
    {title:"Our Team", router:"/About"}
];

export const NavLinks =[
    {
        title:"Website",
        router:"/"
    },
    {
        title:"Sponser A Child",
        router:"/About",
    },
    {
        title:"Register",
        router:registerRoute,
    },
    {
        title:"Login",
        router:loginRoute,
    },
 
]

