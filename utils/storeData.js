const stores = [
    {
        id: 1,
        name: "Productos Alimenticios",
        description: "Productos frescos y de calidad",
        products: [
            // Cárnicos
            {
                id: 1,
                name: "Pierna de Cerdo",
                price: 3.80,
                image: "pierna.jpg",
                description: "x lb ",
                category: "Cárnicos"
            },
            {
                id: 2,
                name: "Caja de Pollo",
                price: 48,
                image: "pollocaja.jpg",
                description: "caja de 33 lb",
                category: "Cárnicos"
            },
            {
                id: 3,
                name: "Caja de Pollo",
                price: 58,
                image: "pollocaja.jpg",
                description: "caja de 40 lb",
                category: "Cárnicos"
            },
            {
                id: 4,
                name: "Lomo de cerdo deshuesado ",
                price: 5.20,
                image: "lomo.jpg",
                description: "x Lb Importado",
                category: "Cárnicos"
            },
            {
                id: 5,
                name: "Masas de Cerdo ",
                price: 19,
                image: "masas.jpg",
                description: "bolsa sellada al vacio de 4lb ",
                category: "Cárnicos"
            },
            {
                id: 6,
                name: "Bistec de cerdo",
                price: 10.5,
                image: "bistec.jpg",
                description: "bandeja de bistec sellada al vacio 2.2 lb",
                category: "Cárnicos"
            },
            {
                id: 7,
                name: "Pollo x Lb ",
                price: 1.6,
                image: "pollo.jpg",
                description: "Bolsa sellada segun pedido",
                category: "Cárnicos"
            },
            {
                id: 8,
                name: "Jamon vicky",
                price: 3.50,
                image: "vicky.jpg",
                description: "tubo sellado segun pedido ",
                category: "Cárnicos"
            },
            {
                id: 9,
                name: "Lomo ahumado",
                price: 6.5,
                image: "ahumado.jpg",
                description: "porcionado y sellado x lb según pedido",
                category: "Cárnicos"
            },
            {
                id: 10,
                name: "Lomo Ahumado ",
                price: 48,
                image: "ahumado.jpg",
                description: "bandeja sellada al vacio de 1.2 lb lasqueado ",
                category: "Cárnicos"
            },
            {
                id: 10,
                name: "Lomo Ahumado ",
                price: 48,
                image: "",
                description: "bandeja sellada al vacio de 1.2 lb lasqueado ",
                category: "Cárnicos"
            },
            {
                id: 10,
                name: "Lomo Ahumado ",
                price: 48,
                image: "",
                description: "bandeja sellada al vacio de 1.2 lb lasqueado ",
                category: "Cárnicos"
            },
            {
                id: 10,
                name: "Lomo Ahumado ",
                price: 48,
                image: "",
                description: "bandeja sellada al vacio de 1.2 lb lasqueado ",
                category: "Cárnicos"
            },
            {
                id: 10,
                name: "Lomo Ahumado ",
                price: 48,
                image: "",
                description: "bandeja sellada al vacio de 1.2 lb lasqueado ",
                category: "Cárnicos"
            },
            {
                id: 10,
                name: "Lomo Ahumado ",
                price: 48,
                image: "",
                description: "bandeja sellada al vacio de 1.2 lb lasqueado ",
                category: "Cárnicos"
            },
            // Lácteos
            {
                id: 3,
                name: "Queso Fresco",
                price: 15.99,
                image: "",
                description: "Queso artesanal premium",
                category: "Lácteos"
            },
            {
                id: 4,
                name: "Yogurt Natural",
                price: 8.99,
                image: "",
                description: "Yogurt natural sin azúcar añadido",
                category: "Lácteos"
            },
            // Frutas
            {
                id: 5,
                name: "Mix de Frutas",
                price: 9.99,
                image: "",
                description: "Selección de frutas frescas de temporada",
                category: "Frutas"
            },
            {
                id: 6,
                name: "Plátanos Orgánicos",
                price: 4.99,
                image: "",
                description: "Plátanos orgánicos maduros",
                category: "Frutas"
            },
            // Del Agro:
            {
                id: 7,
                name: "Verduras Mixtas",
                price: 12.99,
                image: "",
                description: "Verduras orgánicas cultivadas localmente",
                category: "Del Agro"
            },
            {
                id: 8,
                name: "Tomates Frescos",
                price: 5.99,
                image: "",
                description: "Tomates frescos de huerta",
                category: "Del Agro"
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
