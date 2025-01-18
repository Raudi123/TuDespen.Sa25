function ProductCard({ product, onAddToCart }) {
    try {
        const { name, price, image, description, category } = product;
        
        return (
            <div data-name="product-card" className="product-card bg-white rounded-lg shadow-md overflow-hidden relative">
                <div data-name="product-category" className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    {category}
                </div>
                <img data-name="product-image" src={image} alt={name} className="w-full h-48 object-cover"/>
                <div className="p-4">
                    <h3 data-name="product-name" className="text-lg font-semibold mb-2">{name}</h3>
                    <p data-name="product-description" className="text-gray-600 text-sm mb-4">{description}</p>
                    <div className="flex justify-between items-center">
                        <span data-name="product-price" className="text-green-600 font-bold">${price}</span>
                        <button
                            data-name="add-to-cart-button"
                            onClick={() => onAddToCart(product)}
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
