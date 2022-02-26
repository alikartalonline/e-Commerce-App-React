import React from 'react'
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button, useColorMode  } from '@chakra-ui/react';

import { useAuth } from '../context/AuthContext';
import { useBasket } from '../context/BasketContext';

function Navbar() {

    const { loggedIn } = useAuth();
    // console.log("loggedIn =",loggedIn)

    const { items } = useBasket();

    const { colorMode, toggleColorMode } = useColorMode()

  return (
      <nav className={styles.nav}>
        <div className={styles.left}>
            <ul className={styles.menu}>

                <li>
                    <Link  to="/products">eCommerce</Link>
                </li>

                <li>
                    <Link to="/products">Products</Link>
                </li>
                
            </ul>
        </div>

        <div>
      <Button border='50%'  borderColor="yellow" onClick={toggleColorMode}>
      {/* 🌙 {colorMode === 'light' ? 'Dark' : 'Light'} */}
       {colorMode === 'light' ? '🌙' : '☀️'}
      </Button>
        </div>
    
    <div className={styles.right}>
        {
        !loggedIn && 
            (<>
            <Link to="/signup">
                <Button colorScheme='green'>Register</Button>
            </Link>
            
            <Link to="/signin">
                <Button colorScheme='green'>Login</Button>
            </Link>
            </>)
        }

        { 
        // logged oldu isek bizi Profile Login ve Register butonlarını sil,
        // Profil butonu gelsin ve bizi profil ekranına götürsün
            loggedIn &&
            (<>
            { // Sepete birden fazla ürün atmışsak eğer...
                items.length > 0 && (
                    <Link to="/basket">
                        <Button 
                        colorScheme="green"
                        variant="outline">
                            Basket ({items.length})
                        </Button>
                    </Link>
                )
            }


            <Link to="/profile">
                <Button colorScheme='blue'>Profile</Button>
            </Link>
            </>)
        }
        
        </div>
    </nav>
  )
}
export default Navbar