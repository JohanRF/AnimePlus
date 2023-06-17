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

const fila6 = document.getElementById("container-carrousel6");

const flechaIzquierda6 = document.getElementById("arrow-left6")
const flechaDerecha6 = document.getElementById("arrow-right6")
/* El offsetwidht te muestra el total de espacio que esta teniendo el contenido. Con el total podemos sumarle(osea sumar con el total e ir a la sgte parte del carrousel) o restarle(restarle con el total para hacer lo opuesto)  */

/* ----FLECHA DERECHA----- */
flechaDerecha6.addEventListener("click", ()=>{
	fila6.scrollLeft += fila6.offsetWidth;
})
/* ----FLECHA IZQUIERDA----- */
flechaIzquierda4.addEventListener("click", ()=>{
	fila6.scrollLeft -= fila6.offsetWidth; 
})

