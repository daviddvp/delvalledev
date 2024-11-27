---
layout: '@/templates/BasePost.astro'
title: Arco Linux
description: Arch Linux pero con una instalación amigable, ¿es posible? Si, por suerte para muchos de nostros.
pubDate: 2023-06-18T00:00:00Z
imgSrc: '/assets/images/image-post-arco.jpg'
imgAlt: 'Image post arco'
---

# Resumen de la distribución  
Si, Arco, no Arch. La distribución más complicada de Linux (con el permiso de Gentoo) en modo fácil. Modo fácil, ¿por qué? Bueno, la respuesta es simple, la instalación. Se tarda, como mucho y si todo va bien, quince minutos en dejarlo configurado para que empiece a instalar el sistema operativo.

En el siguiente enlace puedes consultar su [página ofical](https://www.arcolinux.info/)

# Tipos de descargas disponibles
Hay cuatro archivos de instalación en la página de descarga:

- Arco Linux XL: es la edición mas completa, con todos los entornos de escritorio para instalar y mucho software disponible también durante el proceso de instalación. Tiene un peso de 2.4 GB la ISO. Con esta edición podemos dejar un equipo listo para usarse sin la necesidad de instalar o configurar nada. Por ejemplo, podemos tener un entorno de programación listo para usar si hemos elegido los paquetes y programas requeridos.

- Arco Linux XS: casi igual que la edición XL pero sin software preinstalado. Pesa un poco menos, 1.7 GB. Esta edición nos permite personalizar fácilmente las aplicaciones esenciales que necesitaremos para nuestro uso de Arco Linux.

- Arco Linux B: personalización al máximo, elige mediante un entorno gráfico todo lo que se va a instalar. Entre 1.6 GB y 1.9 GB de peso.

- Arco Linux D: arch casi en estado puro. Sin entorno de escritorio, sin programas preisntalados y sin drivers, tu te lo guisas y tu te lo comes, pero con la ayuda de un instalador. Quizás la opción mas difícil pero muy recomendable si quieres tener todo bajo control. 1.4 GB de descarga.

En la siguiente foto podemos ver un infograma sacado de la página de descargas, donde podemos ver con mas claridad los detalles de cada archivo de descarga.

![alt text](/src/images/fifth-post/arcolinux_editions.png 'Arco Linux Editions')


# ¿Que hacer después de la instalación?
Arco Linux, después de terminar de instalar, esta listo para usar. Personalmente me gusta comprobarlo en todas las distribuciones, aquí usaremos el siguiente comando:
```bash
sudo pacman -Syu
```
Realmente no seria necesario hacer nada más, excluyendo las comprobaciones actuales, dado que hemos hecho todo durante el proceso de instalación del sistema operativo. Muchas de las aplicaciones en mi uso diario de Linux están dentro de las ISOs de Arco Linux.
En caso contrario podemos usar:

```bash
sudo pacman -S "aplicación"
```

Si no encontramos la aplicación, la manera mas fácil de buscarlo es en la wiki de Arch Linux: [wiki de Arch Linux](https://archlinux.org/ )
En la barra de búsqueda, ponemos el nombre de la aplicación y la wiki nos arrojara las opciones que tenemos.

# Arco VS Arch Puro

Bien, vamos a lo principal, ¿por que íbamos a usar esta distribución frente al Arco puro? En mi caso, la instalación a través de un GUI me evita quebraderos de cabeza y me ahorra tiempo en configuraciones básicas que se te pueden llegar a complicar si no eres un usuario avanzado.
Puedes probar combinaciones de escritorio y programas sin necesidad de realizar todo a través de la linea de comando, pulsando un botón y siguiendo la instalación clásica.
He de decir, a favor de Arch Puro, que con el comando “archinstall”, se facilitan muchas de las instalaciones que usualmente nos echaban para atrás a la hora de empezar a usar Arch puro.

Mi conclusion seria la siguiente: ¿quieres usar Arch sin complicaciones? Usa Arco Linux. ¿Quieres usar Arch y a la vez aprender a instalar Linux, programas, drivers y repositorios de manera manual? Vete hacia Arch puro.


