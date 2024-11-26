// Utility function to get the wishlist state from localStorage
export const getWishlistState = (id) => {
    const savedState = localStorage.getItem(`wishlist_${id}`);
    return savedState ? JSON.parse(savedState) : false;
};

// Utility function to set the wishlist state in localStorage
export const setWishlistState = (id, state) => {
    localStorage.setItem(`wishlist_${id}`, JSON.stringify(state));
};