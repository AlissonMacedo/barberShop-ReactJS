import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/login/logo-barbershop-header.png'
import { Container, Content, Profile } from './styles';

import Notifications from '../Notifications';

export default function Header() {
  return (
   <Container>
     <Content>
       <nav>
         <img src={logo} alt="barbershop" />
         <Link to="/dashboard">DASHBOARD</Link>
       </nav>

       <aside>
         <Notifications />
         <Profile>
           <div>
             <strong>Alisson Macedo</strong>
             <Link to="/profile">Meu Perfil</Link>
           </div>
           <img src="https://api.adorable.io/avatars/50/abott@adorable.png"
           alt="Alisson Macedo"
           />
         </Profile>
       </aside>
     </Content>
   </Container>
  );
}
