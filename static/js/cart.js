document.addEventListener('DOMContentLoaded', () => {
    const addToCart = document.querySelectorAll('.add-cart');
    addToCart.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.trending-product-card');
            const id = productCard.getAttribute('data-product-id');
            const name = productCard.getAttribute('data-product-name');
            
        })
    })
})