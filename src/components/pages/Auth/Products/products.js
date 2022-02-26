import React from 'react'
import Card from '../../../Card/card'
import { Grid, Box, Flex, Button } from '@chakra-ui/react';
import { fetchProductList } from '../../../../api';
import { useInfiniteQuery  } from 'react-query'
// useInfiniteQuery kullandığımız aman "status" üzerinden yürümemiz lazım!

function Products() {
  const {     
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    status,  
    isFetchingNextPage,
  } = useInfiniteQuery(
    'repoData', 
    fetchProductList,
    {
      getNextPageParam: (lastPage, pages) => 1
    })
    

  //     getNextPageParam: (lastGroup, allGroups) => {
  //     const morePagesExist = lastGroup?.length === 32;
  //     // son grup varsa ve bunun length'i 31 ise devamı olabilir 

  //     if (!morePagesExist) {
  //       return;
  //     }

  //     return allGroups.length + 1;
  //     }
  //   }
  // );

   if (status === "loading") return 'Loading...';
   if (status === error) return 'An error has occurred: ' + error.message
   
   console.log("data = ", data);

  return (
    <div>
      <Grid templateColumns='repeat(5, 1fr)' gap={4}>
          {data.pages.map((group, i) => (
            // burada istediğim sayfayı getirdim, api'den baktım, pages bölümünü getirdim daha sonra aşağıda ise yine api'den baktım ve pages'in altındaki result'u getirdim çünkü elemanlar onun içinde bu yüzden 2 adet map kullandık biri sayfaları gösteren pages için diğeri ise onun altındaki result yani elemanları getirmesi için
            <React.Fragment key={i}>
              {group.results.map((item) => (
                  <Box w="100%" key={item.id}>
                    <Card item={item} />
                  </Box>
                ))}
            </React.Fragment>
          ))}

      <Flex mt="10" justifyContent="center" alignSelf="flex-end">
         <Button
           onClick={() => fetchNextPage()}
           isLoading={isFetchingNextPage}
           disabled={!hasNextPage || isFetchingNextPage}
         >
           {isFetchingNextPage
             ? 'Loading more...'
             : hasNextPage
             ? 'Load More'
             : 'Nothing more to load'}
         </Button>
      </Flex> 



      </Grid>
    </div>
  )
}

export default Products;