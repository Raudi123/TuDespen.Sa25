function ProductList({ products, onAddToCart }) {
    try {
        // Group products by category
        const groupedProducts = products.reduce((groups, product) => {
            const category = product.category;
            if (!groups[category]) {
                groups[category] = [];
            }
            groups[category].push(product);
            return groups;
        }, {});

        // Category display order and icons
        const categoryConfig = {
            'Cárnicos': { icon: 'fa-drumstick-bite', color: 'text-red-500' },
            'Lácteos': {icon: 'fa-cheese', color: 'text-blue-500' },
            'Del Confi': {icon: 'fa-candy-cane', color: 'text-blue-500' },
            'Líquidos': { icon: 'fa-wine-bottle', color: 'text-orange-500' },
            'Del Hogar': { icon: 'fa-soap', color: 'text--500' },
            'De Electrodomésticos': {icon: 'fa-blender',  color: 'text--500' },
            'Pastas, Aderezos y Aceites': { icon: 'fa-utensils', color: 'text-yellow-500' },
            'Del Agro': { icon: 'fa-seedling', color: 'text-green-500' }
        };

        return (
            <div data-name="product-list" className="container mx-auto px-4 py-8">
                {Object.keys(categoryConfig).map(category => {
                    if (!groupedProducts[category]) return null;
                    
                    return (
                        <div key={category} className="mb-12">
                            <div className="flex items-center mb-6">
                                <i className={`fas ${categoryConfig[category].icon} text-3xl ${categoryConfig[category].color} mr-3`}></i>
                                <h2 data-name={`category-${category}`} className={`text-2xl font-bold ${categoryConfig[category].color}`}>
                                    {category}
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {groupedProducts[category].map(product => (
                                    <ProductCard 
                                        key={product.id} 
                                        product={product} 
                                        onAddToCart={onAddToCart}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
