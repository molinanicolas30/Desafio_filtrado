const URL = "https://fakestoreapi.com/products";

document.addEventListener("DOMContentLoaded", async () => {
    const traido = await fetchData(URL);
    const boton = document.getElementById("rangeFilterCount");
    const limpiar = document.getElementById("clearRangeFilter");
    const div = document.getElementById("info");
    limpiar.addEventListener("click", () => {
        div.innerHTML="";
    });
    boton.addEventListener("click", () => {
        const min = document.getElementById("rangeFilterCountMin").value;
        const max = document.getElementById("rangeFilterCountMax").value;
        if(min === "" || max === ""){
            alert("Complete los campos");
        }else{
            
            const filtrado  =  traido.filter((elemento) => elemento.price >= min && elemento.price <= max);
            for (let producto of filtrado) {
                div.innerHTML += `
                    <div>
                        <p> ${producto.title}</p>
                        <p>${producto.price}</p>
                    </div>
                  `;
            }
        }
    });
});







async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Error al obtener los datos");
      }
    } catch (error) {
      console.error("Error al cargar el archivo JSON:", error);
    }
  }