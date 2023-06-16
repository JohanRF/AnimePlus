/* *********************DIRECTORIO************************* */



/* *********************SERIE: DEMON SLAYER************************* */
const tab = document.querySelectorAll(".tab")
const bloque 	= document.querySelectorAll(".bloque")

//Click en opcion_dm
	//TODOS .opcion_dm quitar la clase activo
	//TODOS .bloque quitar la clase activo
	//.opcion_dm con la posicion se añadimos la clase activo
	//.bloque con la posicion se añadimos la clase activo

tab.forEach( (cadaTab, i)=>{
	tab[i].addEventListener("click",()=>{

		tab.forEach( (cadaTab, i)=>{
			tab[i].classList.remove("activo")
			bloque[i].classList.remove("activo")
		})

		tab[i].classList.add("activo")
		bloque[i].classList.add("activo")
	})
})

/* ---------------------------------------------------------- */
const fila6 = document.getElementById("container-carrousel6");

const flechaIzquierda6 = document.getElementById("arrow-left6")
const flechaDerecha6 = document.getElementById("arrow-right6")
/* El offsetwidht te muestra el total de espacio que esta teniendo el contenido. Con el total podemos sumarle(osea sumar con el total e ir a la sgte parte del carrousel) o restarle(restarle con el total para hacer lo opuesto)  */

/* ----FLECHA DERECHA----- */
flechaDerecha6.addEventListener("click", ()=>{
	fila6.scrollLeft += fila6.offsetWidth;
})
/* ----FLECHA IZQUIERDA----- */
flechaIzquierda6.addEventListener("click", ()=>{
	fila6.scrollLeft -= fila6.offsetWidth; 
})


/* ************************HOME************************* */
/* ------------------SLIDER PRINCIPAL------------------------ */
const swiper1 = new Swiper('.swiper-hero1', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,/* para que regresa al principio del slader, false para desactivarlo*/
	allowTouchMove:true,/* Para moverlo al tocarlo, como en el celular */
	effect:"fade",/* Por defecto esta en slide, normal. Entre tantas opciones como fade, cube, coverflow, flip, creative, cards */
	// If we need pagination
	autoplay:{/* Un modo automatico */
		delay:5000,/* Se puede modificar el tiempo de las imagenes.  */
		pauseOnMouseEnter:true, /* Darle un reinicio cuando cambies de imagen. Pero tienes que interectuar con el slider para que se mueva con el timepo establecido*/
		disableOnInteraction:false,/* Esto es importante, ya que en falso, lo que hace es establecer el tiempo fuera de todo la pagina. Osea se muve automaticamente  */
	},
	pagination: {
		el: '.swiper-pagination',
		/*type:"bullets", mostrar la paginacion osea la cantidad en formas diferentes, ejm: bullets(mostrar los puntos), custom(como barra), fraction, progressbar*/
		clickable:true, /* para que los puntos respondan */
		dynamicBullets:true,/* darle efecto a los puntos */
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	/* scrollbar: {
		el: '.swiper-scrollbar',
	}, */
});

/* ---------------CARROUSELES------------------ */

const fila = document.getElementById("container-carrousel");

const flechaIzquierda = document.getElementById("arrow-left")
const flechaDerecha = document.getElementById("arrow-right")
/* El offsetwidht te muestra el total de espacio que esta teniendo el contenido. Con el total podemos sumarle(osea sumar con el total e ir a la sgte parte del carrousel) o restarle(restarle con el total para hacer lo opuesto)  */

/* ----FLECHA DERECHA----- */
flechaDerecha.addEventListener("click", ()=>{
	fila.scrollLeft += fila.offsetWidth;
})
/* ----FLECHA IZQUIERDA----- */
flechaIzquierda.addEventListener("click", ()=>{
	fila.scrollLeft -= fila.offsetWidth; 
})

const fila2 = document.getElementById("container-carrousel2");

const flechaIzquierda2 = document.getElementById("arrow-left2")
const flechaDerecha2 = document.getElementById("arrow-right2")
/* El offsetwidht te muestra el total de espacio que esta teniendo el contenido. Con el total podemos sumarle(osea sumar con el total e ir a la sgte parte del carrousel) o restarle(restarle con el total para hacer lo opuesto)  */

/* ----FLECHA DERECHA----- */
flechaDerecha2.addEventListener("click", ()=>{
	fila2.scrollLeft += fila2.offsetWidth;
})
/* ----FLECHA IZQUIERDA----- */
flechaIzquierda2.addEventListener("click", ()=>{
	fila2.scrollLeft -= fila2.offsetWidth; 
})

/* ---------------------------------------------------------- */
const fila3 = document.getElementById("container-carrousel3");

const flechaIzquierda3 = document.getElementById("arrow-left3")
const flechaDerecha3 = document.getElementById("arrow-right3")
/* El offsetwidht te muestra el total de espacio que esta teniendo el contenido. Con el total podemos sumarle(osea sumar con el total e ir a la sgte parte del carrousel) o restarle(restarle con el total para hacer lo opuesto)  */

/* ----FLECHA DERECHA----- */
flechaDerecha3.addEventListener("click", ()=>{
	fila3.scrollLeft += fila3.offsetWidth;
})
/* ----FLECHA IZQUIERDA----- */
flechaIzquierda3.addEventListener("click", ()=>{
	fila3.scrollLeft -= fila3.offsetWidth; 
})

/* ---------------------------------------------------------- */
const fila4 = document.getElementById("container-carrousel4");

const flechaIzquierda4 = document.getElementById("arrow-left4")
const flechaDerecha4 = document.getElementById("arrow-right4")
/* El offsetwidht te muestra el total de espacio que esta teniendo el contenido. Con el total podemos sumarle(osea sumar con el total e ir a la sgte parte del carrousel) o restarle(restarle con el total para hacer lo opuesto)  */

/* ----FLECHA DERECHA----- */
flechaDerecha4.addEventListener("click", ()=>{
	fila4.scrollLeft += fila4.offsetWidth;
})
/* ----FLECHA IZQUIERDA----- */
flechaIzquierda4.addEventListener("click", ()=>{
	fila4.scrollLeft -= fila4.offsetWidth; 
})

/* ---------------------------------------------------------- */
const fila5 = document.getElementById("container-carrousel5");

const flechaIzquierda5 = document.getElementById("arrow-left5")
const flechaDerecha5 = document.getElementById("arrow-right5")
/* El offsetwidht te muestra el total de espacio que esta teniendo el contenido. Con el total podemos sumarle(osea sumar con el total e ir a la sgte parte del carrousel) o restarle(restarle con el total para hacer lo opuesto)  */

/* ----FLECHA DERECHA----- */
flechaDerecha5.addEventListener("click", ()=>{
	fila5.scrollLeft += fila5.offsetWidth;
})
/* ----FLECHA IZQUIERDA----- */
flechaIzquierda5.addEventListener("click", ()=>{
	fila5.scrollLeft -= fila5.offsetWidth; 
})



