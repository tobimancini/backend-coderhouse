La entrega consiste en 2 views. Uno que contiene los productos guardados en la base de datos, y donde se pueden guardar nuevos productos
y el otro view muestra el chat, y le da a uno la posibilidad de escribir un nuevo mensaje.

Los EndPoints son:

API:

/api/chat/ (POST)
-- Este endpoint se usa para hacer un POST de un nuevo mensaje para el chat.

/api/productos/ (POST)
-- Este endpoint se usa para hacer un POST de un nuevo producto.


VISTAS:

/productos (GET)
-- En este endpoint se hace un GET de todos los productos existentes en la base de datos, donde tambien se puede filtrar por CATEGORIA de los productos
 y también se encuentra un Form para guardar un nuevo producto.

 Modificando el query a mano se puede cambiar la configuracion de la paginacion de la siguiente manera:
 
 1-/productos?page={número de pagina que se desea elegir}

 2-/productos?limit={limite de productos que desea obtener por página}

 3- /productos?categoria={categoria por la cual se desea filtrar los productos} (elegir una categoria existente, visibles en el select de filtro)

//------------

/chat (GET)
-- En este endpoint se hace un GET de todos los mensajes que contiene el chat en la base de datos, y se puede enviar un nuevo mensaje.