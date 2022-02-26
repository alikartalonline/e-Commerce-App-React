import { Box, Image, Button } from '@chakra-ui/react';

import React from 'react'
import { Link } from "react-router-dom";

import {useBasket} from "../../context/BasketContext"


function Card({ item }) {

  const { addToBasket, items } = useBasket();
  const findBasketItem = items.find((basket_item) => basket_item.id === item.id)


  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3" >
        

      <Link to={`/product/${item.id}`}>
      {/* <Link to="/productdetail"> */}
        <Image src="https://picsum.photos/200/300 " alt="product" loading="lazy"/> 


        <Box p="6">
          <Box d="plex" alignItems="baseline">
            18/02/2022
          </Box>
 
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {item.title}
          </Box>

          <Box>
            {item.id} TL 
          </Box>

        </Box>
      </Link>

      <Button 
      colorScheme={findBasketItem ? "pink" : "green"}
      mt="3"
      variant="solid"
      onClick={() => addToBasket(item, findBasketItem)}
      >
            {
              findBasketItem ? "Remove from Basket" : "Add to Basket"
            }
      </Button>

    </Box>
  )
}

export default Card

