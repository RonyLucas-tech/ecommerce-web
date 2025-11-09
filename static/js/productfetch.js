fetch("data/products.json")
  .then(res => res.json())
  .then(products => {
    
    const sortedProducts = products.sort((a, b) => a.id - b.id); 
    const allProducts = sortedProducts.filter("product-right-cards");
    const trending = sortedProducts
      .filter(p => p.section.includes("trending")) // Finds IDs 1, 3, 4
      .slice(0, 2); // Limits to the first 2 sorted: IDs 1, 3
      
    displayProducts(trending, ".trending-container");

    // --- Container 2: Featured Section (Limited to 3 cards) ---
    const featured = sortedProducts
      .filter(p => p.section.includes("featured")) // Finds IDs 2, 3
      .slice(0, 3); 

    displayProducts(featured, ".featured-container");
  });