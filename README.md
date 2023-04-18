La entrega consiste en 2 views. Uno que contiene los productos guardados en la base de datos, y donde se pueden guardar nuevos productos
y el otro view muestra el chat, y le da a uno la posibilidad de escribir un nuevo mensaje.

Los EndPoints son:

API:

/api/chat/ (POST)
-- Este endpoint se usa para hacer un POST de un nuevo mensaje para el chat.

/api/productos/ (POST)
-- Este endpoint se usa para hacer un POST de un nuevo producto.


VISTAS:

/productos/ (GET)
-- En este endpoint se hace un GET de todos los productos existentes en la base de datos, y se encuentra un Form para guardar un nuevo producto.

/chat/ (GET)
-- En este endpoint se hace un GET de todos los mensajes que contiene el chat en la base de datos, y se puede enviar un nuevo mensaje.