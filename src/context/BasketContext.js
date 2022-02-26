import { useState, createContext, useEffect, useContext} from "react";

const BasketContext = createContext();

const defaultBasket = JSON.parse(localStorage.getItem("basket")) || [];
//localStorage'de o an bir tanım varsa onu kullansın eğer yoksa boş olarak [] tanımlansın
// unutmayalım localStorage'e stringfy şeklinde gideceği için bizim bunu JSON.parse etmemiz gerekir.

const BasketProvider = ({children}) => {
    
    // const [items, setItems] = useState([]);
    const [items, setItems] = useState(defaultBasket);

    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(items))
    }, [items]);
    // basket (items yani) her değiştiğinde git localStorage.setItem basket key'ine, JSON.stringfy ederek item'sı yaz

    const addToBasket = (data, findBasketItem) => { 
    // parametre olarak sepete atacağımız api datamız

    if (!findBasketItem) { // findBasketItem bize false geliyor ise
        return setItems((items) => [data, ...items]);
    } // Eğer ilk defa ekleniyorsa sepete burası çalışacak

    const filtered = items.filter((item) => item.id !== findBasketItem.id);
    // Eğer eklenmişse ve tekrar bir butona kaldırılması için basılıyorsa burası çalışacak
    //Burada eklenmiş olan id'li haricindekiler bulunup tekrardan Set ediliyor.
    setItems(filtered); 
    };

    const removeFromBasket = (item_id) => {
        const filtered = items.filter((item) => item.id !== item_id)
        setItems(filtered)
    }
// bize parametre olarak veirlen (item_id) haricinde olanları setItems(filtered) ile sepetimize güncellemiş olacak bu işlem.
// bu bölüm (removeFromBasket); sepete eklenen ürünleri, sepet(basket) içerisinde "remove from basket" butonu ile silmek için

    const values = {
        items,
        setItems,
        addToBasket,
        removeFromBasket,
    };

    return (
    <BasketContext.Provider value={values}>
        {children}
    </BasketContext.Provider>
    )
};

const useBasket = () => useContext(BasketContext);
// Bu her zaman yaptığımız syntax,
// yani bunu her component'te kullanırken useContext ifadesini kullanmamak için,
// bunu tek bir yerde yazıyoruz 

export { BasketProvider, useBasket };
// ve sonra bunları dışarı aktaralum


