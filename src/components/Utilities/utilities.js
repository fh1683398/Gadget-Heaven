// Get cart Items
export const getCartItems = () => {

    const storedItems = localStorage.getItem("cart")
    return storedItems? JSON.parse(storedItems) : []
}

//Get Wishlist Items
export const getWishlistItems = () => {

    const storedItems = localStorage.getItem("wishlist")
    return storedItems? JSON.parse(storedItems) : []
}

// set Item in the Cart
export const setItemInCartList = (id) => {

    const storedItems = getCartItems()
    
    if(storedItems.includes(id)){
        return;
    }
    else{
        storedItems.push(id)
        localStorage.setItem("cart", JSON.stringify(storedItems))
    }
}

//set Item in the Wishlist
export const setItemInWishlist = (id) => {

    const storedItems = getWishlistItems()
    
    if(storedItems.includes(id)){
        return;
    }
    else{
        storedItems.push(id)
        localStorage.setItem("wishlist", JSON.stringify(storedItems))
    }
}

//remove Items from the list
export const removeItemFromTheList = (name, id) => {
    const storedItems = JSON.parse(localStorage.getItem(name)) || []

    const filteredList = storedItems.filter(i=> i!==id)
    localStorage.setItem(name, JSON.stringify(filteredList))
}