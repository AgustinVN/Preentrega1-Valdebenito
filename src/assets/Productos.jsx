const map = () => {

const productos = [
    {id:1, nombre:"Telescopio 1", precio:250.000 },
    {id:2, nombre:"Telescopio 2", precio:650.000 },
    {id:3, nombre:"Telescopio 3", precio:150.000 },
    {id:4, nombre:"Telescopio 4", precio:350.000 },
    {id:5, nombre:"Telescopio 5", precio:550.000 },
]
    const stock = productos.map(item => ({nombreProducto:item.nombre, precioProducto}));


    }