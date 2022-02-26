import React from 'react';
import "../../../index.css";
import { useQuery } from 'react-query';

import {useParams} from "react-router-dom";
// useParams bize gelen parametreleri veriyor

import { fetchProductList, fetchProduct } from '../../../api';

import { Box, Text, Button,  } from '@chakra-ui/react';
import ImageGallery from 'react-image-gallery';

import { useBasket } from '../../../context/BasketContext';

function ProductDetail() {
  const {product_id} = useParams();
// bu şekilde product_id'yi alabiliyorum

  const {addToBasket, items} = useBasket();


const { isLoading, error, data } = useQuery( ['repoData', product_id], () => 
fetchProduct(product_id)
);
// (Not: Normalde 'repoData' key'i için birden fazla istek yapacağız 
// ve reactQuery Developer aracımızda (ana ekrandaki logo) o keyler de gözükecek. 
// Ama 'repoData' key'i birden fazla olabileceği için onu ayrıştırmamız lazım. 
// Mesela id'si ile. O yüzden şu kodu <['repoData', product_id]> yazıyorum, 
// böylelikle key'leri birbirlerine karıştırmamış olacak reactQuery.)

if (isLoading){
   return <div> Loading. . . </div>
  };

if (error) return 'An error has occurred: ' + error.message

//  console.log(data)

  const findBasketItem = items.find((item) => item.id === data.id)
  // Daha önce aynı data eklenmiş mi, eklenmemiş mi bunu anlayacağım
  // item'in yani tıkladığımız data'nın id'si ile,
  // sepete atılan data'nın id'si aynı ise, aşağıda butonun ismini remove olarak değiştereceğüm



 const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

  return (
    <div>
    <Button my={5}
    colorScheme={findBasketItem ? "pink" : "blue"}
    onClick={() => addToBasket(data, findBasketItem)}
    //onClick butonuna basıldığı anda addToBasket çalışmalı ve datayı eklemeli
    // data biliyorsun api'den geliyor, backend yoh su an
    >
      {
        findBasketItem ? "Remove from Basket" : "Add to Basket"
      } 
    </Button>

    <Text fontSize="2xl">
      {data.title}
    </Text>

    <Box mt={3} >
    <strong>Authors:</strong> <br/>
    <Text>Name: {data.authors[0].name}</Text>
     <Text> Birth-Death: {data.authors[0].birth_year}-{data.authors[0].death_year}</Text>
    </Box>

    <br/>
    <Box  height="330px" w="500px" borderColor='gray.200'  boxSizing="content-box">
    <strong>Subjects:</strong> <br/>
    {data.subjects[0]}<br/>
    {data.subjects[1]}<br/>
    {data.subjects[2]}<br/>
    {data.subjects[3]}<br/>
    {data.subjects[4]}<br/>
    {data.subjects[5]}<br/>
    </Box>

    <Box > 
    <ImageGallery items={images} showPlayButton={false} />;
    </Box>

    </div>
  )
}

export default ProductDetail;