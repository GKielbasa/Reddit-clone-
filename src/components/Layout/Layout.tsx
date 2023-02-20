
// W toturialu było to zrobione całkiem inaczej ale z **** nie udało się uruchomic tamtej wersji jeżeli coś niedziała to możliwe że to 

import React, { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';

type Props = {
    children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
    return (
    <>
        <Navbar />
        <main>{children}</main>
    </>
    );
};

export default Layout;