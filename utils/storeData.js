const stores = [
    {
        id: 1,
        name: "Productos Alimenticios",
        description: "Productos frescos y de calidad",
        products: [
            // Cárnicos
            {
                id: 1,
                name: "Pollo Entero",
                price: 24.99,
                image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781",
                description: "Pollo fresco de granja",
                category: "Cárnicos"
            },
            {
                id: 2,
                name: "Carne de Res",
                price: 29.99,
                image: "https://images.unsplash.com/photo-1603048297172-c85976ea7bed",
                description: "Corte premium de res",
                category: "Cárnicos"
            },
            // Lácteos
            {
                id: 3,
                name: "Queso Fresco",
                price: 15.99,
                image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d",
                description: "Queso artesanal premium",
                category: "Lácteos"
            },
            {
                id: 4,
                name: "Yogurt Natural",
                price: 8.99,
                image: "https://images.unsplash.com/photo-1488477181946-6428a0291777",
                description: "Yogurt natural sin azúcar añadido",
                category: "Lácteos"
            },
            // Frutas
            {
                id: 5,
                name: "Mix de Frutas",
                price: 9.99,
                image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b",
                description: "Selección de frutas frescas de temporada",
                category: "Frutas"
            },
            {
                id: 6,
                name: "Plátanos Orgánicos",
                price: 4.99,
                image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e",
                description: "Plátanos orgánicos maduros",
                category: "Frutas"
            },
            // Verduras
            {
                id: 7,
                name: "Verduras Mixtas",
                price: 12.99,
                image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7",
                description: "Verduras orgánicas cultivadas localmente",
                category: "Verduras"
            },
            {
                id: 8,
                name: "Tomates Frescos",
                price: 5.99,
                image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337",
                description: "Tomates frescos de huerta",
                category: "Verduras"
            }
        ]
    }
];

const paymentMethods = {
    zelle: {
        name: "Zelle",
        currency: "USD",
        rate: 1
    },
    cup: {
        name: "Transferencia CUP",
        currency: "CUP",
        rate: 340
    },
    mlc: {
        name: "Transferencia MLC",
        currency: "MLC",
        rate: 1.25
    },
    cash: {
        name: "Efectivo",
        currency: "USD",
        rate: 1
    }
};
