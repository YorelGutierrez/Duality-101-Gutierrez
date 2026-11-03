// Aquí viven las recetas. Para agregar una nueva, copia uno de los objetos
// y cambia sus datos. Cambia "image" por la URL (o ruta local) de tu foto.

export const recipes = [
  {
    id: "lasana",
    name: "Lasaña de carne",
    emoji: "🍝",
    tagline: "Capas de pasta, salsa de carne, bechamel y mucho queso gratinado.",
    image:
      "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=1200&q=80",
    meta: [
      { label: "Tiempo total", value: "1 h 25 min" },
      { label: "Preparación", value: "45 min" },
      { label: "Horno", value: "40 min" },
      { label: "Porciones", value: "6" },
      { label: "Dificultad", value: "Media" },
    ],
    ingredients: [
      {
        group: "Salsa de carne",
        items: [
          "500 g de carne molida de res",
          "1 cebolla mediana",
          "1 zanahoria",
          "3 dientes de ajo",
          "700 g de tomate triturado",
          "2 cdas de aceite de oliva",
          "1 cdita de orégano seco",
          "Sal y pimienta al gusto",
        ],
      },
      {
        group: "Bechamel",
        items: [
          "50 g de mantequilla",
          "50 g de harina de trigo",
          "700 ml de leche",
          "Una pizca de nuez moscada",
        ],
      },
      {
        group: "Para armar",
        items: [
          "12 láminas de pasta para lasaña",
          "250 g de queso mozzarella rallado",
          "60 g de queso parmesano rallado",
        ],
      },
    ],
    steps: [
      {
        title: "Prepara el sofrito",
        text: "Pica finamente la cebolla, la zanahoria y el ajo. Sofríelos en una sartén grande con el aceite de oliva a fuego medio durante 8 minutos, hasta que estén suaves.",
      },
      {
        title: "Dora la carne",
        text: "Agrega la carne molida al sofrito y deshazla con una cuchara de madera. Cocina unos 8 minutos, hasta que pierda el color rosado.",
      },
      {
        title: "Cocina la salsa",
        text: "Añade el tomate triturado, el orégano, sal y pimienta. Baja el fuego y deja cocinar 25 minutos, moviendo de vez en cuando.",
      },
      {
        title: "Haz la bechamel",
        text: "En una olla derrite la mantequilla, agrega la harina y mezcla 1 minuto. Vierte la leche poco a poco sin dejar de batir. Cocina unos 8 minutos hasta que espese y sazona con nuez moscada y sal.",
      },
      {
        title: "Arma las capas",
        text: "Precalienta el horno a 180 °C. En un refractario pon una capa de salsa, luego pasta, bechamel y mozzarella. Repite hasta terminar con una capa de bechamel y los dos quesos encima.",
      },
      {
        title: "Hornea",
        text: "Cubre con papel aluminio y hornea 25 minutos. Retira el aluminio y hornea 15 minutos más, hasta que la superficie esté dorada.",
      },
      {
        title: "Deja reposar",
        text: "Espera 10 minutos antes de cortar. Así las capas se asientan y las porciones salen limpias.",
      },
    ],
  },
  {
    id: "pizza",
    name: "Pizza margarita casera",
    emoji: "🍕",
    tagline: "Masa suave con orilla dorada, salsa de tomate, mozzarella y albahaca fresca.",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    meta: [
      { label: "Tiempo total", value: "1 h 40 min" },
      { label: "Preparación", value: "25 min" },
      { label: "Reposo de masa", value: "1 h" },
      { label: "Horno", value: "12 min" },
      { label: "Porciones", value: "2 pizzas" },
      { label: "Dificultad", value: "Fácil" },
    ],
    ingredients: [
      {
        group: "Masa",
        items: [
          "500 g de harina de trigo",
          "325 ml de agua tibia",
          "7 g de levadura seca",
          "10 g de sal",
          "1 cdita de azúcar",
          "2 cdas de aceite de oliva",
        ],
      },
      {
        group: "Salsa",
        items: [
          "200 g de tomate triturado",
          "1 diente de ajo rallado",
          "1 cda de aceite de oliva",
          "Sal y orégano al gusto",
        ],
      },
      {
        group: "Cobertura",
        items: [
          "250 g de mozzarella",
          "Hojas de albahaca fresca",
          "1 cda de aceite de oliva para terminar",
        ],
      },
    ],
    steps: [
      {
        title: "Activa la levadura",
        text: "Mezcla el agua tibia con el azúcar y la levadura. Déjala reposar 10 minutos, hasta que se forme espuma en la superficie.",
      },
      {
        title: "Amasa",
        text: "En un tazón mezcla la harina con la sal. Agrega la levadura activada y el aceite. Amasa 10 minutos, hasta obtener una masa lisa y elástica que no se pegue en las manos.",
      },
      {
        title: "Deja reposar la masa",
        text: "Forma una bola, cúbrela con un paño húmedo y déjala en un lugar cálido durante 1 hora, o hasta que doble su tamaño.",
      },
      {
        title: "Prepara la salsa",
        text: "Mezcla el tomate triturado con el ajo, el aceite, la sal y el orégano. No necesitas cocinarla, se cocina en el horno.",
      },
      {
        title: "Calienta el horno",
        text: "Precalienta el horno a la temperatura máxima (230 a 250 °C) con una charola dentro para que se caliente también.",
      },
      {
        title: "Estira la masa",
        text: "Divide la masa en 2 porciones. Sobre una superficie con un poco de harina, estira cada una con las manos hasta formar un círculo de unos 30 cm, dejando la orilla más gruesa.",
      },
      {
        title: "Arma la pizza",
        text: "Extiende la salsa con una cuchara sin llegar a la orilla. Reparte la mozzarella en trozos sobre la salsa.",
      },
      {
        title: "Hornea",
        text: "Pasa la pizza a la charola caliente y hornea de 10 a 12 minutos, hasta que la orilla esté dorada y el queso burbujee.",
      },
      {
        title: "Termina y sirve",
        text: "Saca la pizza del horno, agrega las hojas de albahaca fresca y un hilo de aceite de oliva. Sirve de inmediato.",
      },
    ],
  },
];