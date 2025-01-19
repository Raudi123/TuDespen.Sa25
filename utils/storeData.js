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
                price: 8,
                image: "ahumado.jpg",
                description: "bandeja sellada al vacio de 1.2 lb lasqueado ",
                category: "Cárnicos"
            },
            {
                id: 11,
                name: "Pechuga de pollo ",
                price: 5.20,
                image: "pechuga.jpg",
                description: "x Lb de bistec de pechuga sellada ",
                category: "Cárnicos"
            },
            {
                id: 12,
                name: "Jamón Embuchado ",
                price: 4.00,
                image: "embuchado.jpg",
                description: "Porción sellada según peso requerido x el cliente ",
                category: "Cárnicos"
            },
            {
                id: 13,
                name: "Picadillo Mixto ",
                price: 2.50,
                image: "picadillo.jpg",
                description: "unidad de 400 gr",
                category: "Cárnicos"
            },
            {
                id: 14,
                name: "Salchichas  ",
                price: 2.80,
                image: "perritos.jpg",
                description: "paquete de 12 unidades ",
                category: "Cárnicos"
            },
            {
                id: 15,
                name: "Chorizo Tipo vela ",
                price: 3.60,
                image: "vela.jpg",
                description: "x lb porcion sellada segun pedido del cliente",
                category: "Cárnicos"
            },
            {
                id: 16,
                name: "Atún",
                price: 13,
                image: "atun.jpg",
                description: "Lata de 1 Kg en aceite ",
                category: "Cárnicos"
            },
            // Líquidos
            {
                id: 17,
                name: "Cerveza Cristal",
                price: 22,
                image: "cristal.jpg",
                description: "Caja de 24 uds ",
                category: "Líquidos"
            },
            {
                id: 18,
                name: "Cerveza Bucanero",
                price: 22,
                image: "bucanero.jpg",
                description: "Caja de 24 uds ",
                category: "Líquidos"
            },
            {
                id: 19,
                name: "Cerveza Economica",
                price: 18,
                image: "timber.jpg",
                description: "Caja de 24 uds ",
                category: "Líquidos"
            },
            {
                id: 20,
                name: "Vino Acantus",
                price: 5,
                image: "acantus.jpg",
                description: "Rosado, tinto , Blanco",
                category: "Líquidos"
            },
            {
                id: 21,
                name: "Vino Espumoso",
                price: 10,
                image: "espumoso.jpg",
                description: "Varons d Valls 750 ml",
                category: "Líquidos"
            },
            {
                id: 22,
                name: "Ron Habana Club",
                price: 7.70,
                image: "3años.jpg",
                description: "Añejo 3 años 750 ml ",
                category: "Líquidos"
            },
            {
                id: 23,
                name: "Malta Guajira ",
                price: 6.50,
                image: "guajira.jpg",
                description: "Blister de 6 uds de 500 ml ",
                category: "Líquidos"
            },
            {
                id: 24,
                name: "Jugo",
                price: 14.40,
                image: "200ml.jfif",
                description: "Caja de 24 uds de 200 ml ",
                category: "Líquidos"
            },
            {
                id: 25,
                name: "Jugo",
                price: 1.60,
                image: "naranja.jpg",
                description: "Jugo La estancia Sabor Naranja 1 L ",
                category: "Líquidos"
            },
            {
                id: 26,
                name: "Jugo ",
                price: 6.50,
                image: "multifrutas.jpg",
                description: "Blister de 6 uds 330 ml Multifrutas de lata  ",
                category: "Líquidos"
            },
            {
                id: 27,
                name: "Malta Morena ",
                price: 18,
                image: "morena.jpg",
                description: "Caja de 24 uds ",
                category: "Líquidos"
            },
            {
                id: 28,
                name: "Refresco ",
                price: 1,
                image: "refrescolata.jpg",
                description: "Lata 330 ml ",
                category: "Líquidos"
            },
            {
                id: 29,
                name: "Refresco ",
                price: 1,
                image: "1.5lt.jpg",
                description: "Pomo de 1.5 Lt ",
                category: "Líquidos"
            },
            {
                id: 30,
                name: "Café ",
                price: 6.90,
                image: "aroma.jpg",
                description: "Paquete de 250 gr ",
                category: "Líquidos"
            },
            //Pastas, Aderezos y Aceites
            {
                id: 31,
                name: "pasta de tomate Sabrosísimo",
                price: 3.20,
                image: "800gr.jpg",
                description: "Pasta doble concentrado 800 gr",
                category: "Pastas, Aderezos y Aceites"
            },
            {
                id: 32,
                name: "Pasta de tomate Vima",
                price: 5.99,
                image: "vima.jpg",
                description: "Tomates frescos de huerta",
                category: "Pastas, Aderezos y Aceites"
            },
            {
                id: 33,
                name: "Mayonesa Celorio ",
                price: 6.50,
                image: "mayonesa.jpg",
                description: "Pomo de 450 gr" , 
                category: "Pastas, Aderezos y Aceites"
            },
            {
                id: 34,
                name: "Pasta de Bocadito Aldaketa",
                price: 5.8,
                image: "bocadito.jpg",
                description: "Pomo de 450 gr ",
                category: "Pastas, Aderezos y Aceites"
            },
            {
                id: 35,
                name: "Spaguetis",
                price: 1.55,
                image: "spaguetis.jpg",
                description: "Bolsa de 500 gr",
                category: "Pastas, Aderezos y Aceites"
            },
            {
                id: 36,
                name: "Codito",
                price: 1.55,
                image: "coditos.jpg",
                description: "Bolsa de 500 gr",
                category: "Pastas, Aderezos y Aceites"
            },
            {
                id: 37,
                name: "Fideos ",
                price: 1.90,
                image: "fideos.jpg",
                description: "bolsa de 500 gr",
                category: "Pastas, Aderezos y Aceites"
            },
            {
                id: 38,
                name: "Sopa Intantanea ",
                price: 1.50,
                image: "sopa.jpg",
                description: "Sabor pollo sobre 75 gr",
                category: "Pastas, Aderezos y Aceites"
            },
            {
                id: 39,
                name: "Aceite de girasol",
                price: 2.80,
                image: "aceite.jpg",
                description: "Botella de 900 ml",
                category: "Pastas, Aderezos y Aceites"
            },
            {
                id: 40,
                name: "Cartón de huevos",
                price: 12,
                image: "huevo.jpg",
                description: "30 uds frescos",
                category: "Pastas, Aderezos y Aceites"
            },
            //Lácteos
            {
                id: 41,
                name: "Queso Gouda ",
                price: 13.5,
                image: "queso.jpg",
                description: "Porción de 1 kg sellado",
                category: "Lácteos"
            },
            {
                id: 42,
                name: "Yogurt Probiótico",
                price: 15,
                image: "yogurt.jpg",
                description: "Cubeta de 4L ",
                category: "Lácteos"
            },
            {
                id: 43,
                name: "Queso Crema ",
                price: 4.20,
                image: "crema.jpg",
                description: "Pote de 300 gr  ",
                category: "Lácteos"
            },
            {
                id: 44,
                name: "Helado ",
                price: 12,
                image: "helado.jpg",
                description: "Caja de 4L  ",
                category: "Lácteos"
            },
            {
                id: 45,
                name: "Leche en Polvo",
                price: 10,
                image: "lechepolvo.jpg",
                description: "Bolsa de 1 kg  ",
                category: "Lácteos"
            },
            {
                id: 46,
                name: "Leche Condensada",
                price: 1.90,
                image: "condensada.jpg",
                description: "Lata con abre fácil ",
                category: "Lácteos"
            },
            //Del Agro
            {
                id: 47,
                name: "Ajo",
                price: 4.7,
                image: "ajo.jpg",
                description: "Bolsa de 10 cabezas",
                category: "Del Agro"
            },
            {
                id: 48,
                name: "Malanga ",
                price: 4.20,
                image: "malanga.jpg",
                description: "bolsa de 5 lb",
                category: "Del Agro"
            },
            {
                id: 49,
                name: "cebolla ",
                price: 4.20,
                image: "cebolla.jpg",
                description: "bolsa de 20 uds",
                category: "Del Agro"
            },
            {
                id: 48,
                name: "Tomate",
                price: 7.40,
                image: "tomate.jpg",
                description: "bolsa de 5 lb",
                category: "Del Agro"
            },
            {
                id: 49,
                name: "Col ",
                price: 1.70,
                image: "col.jpg",
                description: "bolsa con 1 unidad sellada",
                category: "Del Agro"
            },
            {
                id: 50,
                name: "Boniato ",
                price: 2.40,
                image: "boniato",
                description: "bolsa de 5 lb",
                category: "Del Agro"
            },
            //Del Hogar
            {
                id: 51,
                name: "Frazada de limpiar suelo",
                price: 4.7,
                image: "frazada.jpg",
                description: "1 unidad",
                category: "Del Del Hogar"
            },
            {
                id: 52,
                name: "Detergente para ropa",
                price: 4.20,
                image: "4en1.jpg",
                description: "bolsa de 5 lb",
                category: "Del Hogar"
            },
            {
                id: 53,
                name: "Detergente polvo Multiuso ",
                price: 4.20,
                image: "detergente.jpg",
                description: "bolsa de 500 gr",
                category: "Del Hogar"
            },
            {
                id: 54,
                name: "Jabon De Olor",
                price: 7.40,
                image: "Jabon.jpg",
                description: "por unidades",
                category: "Del Hogar"
            },
            {
                id: 55,
                name: "Papel Higienico ",
                price: 1.70,
                image: "papel.jpg",
                description: "bolsa con 4 unidad sellada",
                category: "Del Hogar"
            },
            {
                id: 56,
                name: "Perlas de olor para ropa ",
                price: 1.70,
                image: "papel.jpg",
                description: "frasco de 200 gr",
                category: "Del Hogar"
            },
            {
                id: 57,
                name: " Suavizante para ropa ",
                price: 1.70,
                image: "suavizante.jpg",
                description: "Pomo de 1 lt",
                category: "Del Hogar"
            },
            {
                id: 58,
                name: " Toallitas humedas multiuso premiun ",
                price: 1.70,
                image: "toallas.jpg",
                description: "Paquete de 120 udst",
                category: "Del Hogar"
            },
            {
                id: 59,
                name: "Pastillas de inodoro ",
                price: 2.40,
                image: "pastillas.jpg",
                description: "bolsa de 5 lb",
                category: "Del Hogar"
            },
            //De Electrodomésticos
            {
                id: 60,
                name: "Ventilador de pedestal",
                price: 4.7,
                image: "ventilador.jpg",
                description: "Ventilador tipo ciclón Milexus",
                category: "Del Del Hogar"
            },
            {
                id: 61,
                name: "Split milexus ",
                price: 4.20,
                image: "split.jpg",
                description: "Milexus 1200 btu",
                category: "Del Hogar"
            },
            {
                id: 62,
                name: "Frezeer  ",
                price: 4.20,
                image: "nevera.jpg",
                description: "Milexus 5pies ",
                category: "Del Hogar"
            },
            {
                id:63,
                name: "Jabon De Olor",
                price: 7.40,
                image: "Jabon.jpg",
                description: "por unidades",
                category: "Del Hogar"
            },
            {
                id: 55,
                name: "Papel Higienico ",
                price: 1.70,
                image: "papel.jpg",
                description: "bolsa con 4 unidad sellada",
                category: "Del Hogar"
            },
            {
                id: 56,
                name: "Perlas de olor para ropa ",
                price: 1.70,
                image: "papel.jpg",
                description: "frasco de 200 gr",
                category: "Del Hogar"
            },
            {
                id: 57,
                name: " Suavizante para ropa ",
                price: 1.70,
                image: "suavizante.jpg",
                description: "Pomo de 1 lt",
                category: "Del Hogar"
            },
            {
                id: 58,
                name: " Toallitas humedas multiuso premiun ",
                price: 1.70,
                image: "toallas.jpg",
                description: "Paquete de 120 udst",
                category: "Del Hogar"
            },
            {
                id: 59,
                name: "Pastillas de inodoro ",
                price: 2.40,
                image: "pastillas.jpg",
                description: "bolsa de 5 lb",
                category: "Del Hogar"
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
