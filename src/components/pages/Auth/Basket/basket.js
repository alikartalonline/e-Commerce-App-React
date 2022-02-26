import React from 'react'
import { useBasket } from '../../../../context/BasketContext'
import { Alert, Button, Box, Text } from '@chakra-ui/react';
import { Link } from "react-router-dom";

function Basket() {
    const {items, removeFromBasket } = useBasket();
    // console.log(items)

    const total = items.reduce((acc, obj) => acc + obj.id, 0);
    // acc = o ana kadar ki toplanmış değer
    // acc'ye obj'nin price'ını ekliyorum ve bunun 0'dan başlaması gerektiğini söylüyorum


  return (
      
    <Box p="5">
        { // sepette ürün yok ise hata mesajı versin
            items.length < 1 && <Alert status="warning">
                You have not any items in your basket...
            </Alert>
        }

        {
            items.length > 0 &&
            <>
            <ul style={ { listStyleType: "decimal"} }>
                {
                    items.map((item) => (

                        <li key={item.id} style={{marginBottom: 20}}>

                            <Link to={`/product/${item.id}`}>
                               <Text fontSize={18}>{item.title} - ({item.id})</Text>
                            </Link>

                            <Button 
                            mt="5" 
                            mb="5"  
                            size="sm"
                            colorScheme="pink"
                            onClick={() => removeFromBasket(item.id)}>
                                Remove from Basket
                            </Button>

                        </li>
                    ))
                }
            </ul>
            </>
        }

    <hr />
        <Box mt="5" >
            <Text fontSize="22" >
                Total: {total} TL
            </Text>
        </Box>

    </Box>
  )
}

export default Basket