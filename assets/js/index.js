const propiedadesJSON = [
    {
      nombre: "Casa de campo",
      descripcion: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      cuartos: 2,
      metros: 170
    },
    {
      nombre: "Casa de playa",
      descripcion: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      cuartos: 2,
      metros: 130
    },
    {
      nombre: "Casa en el centro",
      descripcion: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      cuartos: 1,
      metros: 80
    },
    {
      nombre: "Casa rodante",
      descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      cuartos: 1,
      metros: 6
    },
    {
      nombre: "Departamento",
      descripcion: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      cuartos: 3,
      metros: 200
    },
    {
      nombre: "Mansión",
      descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      cuartos: 5,
      metros: 500
    }
  ];

function templateDepartamento(departamento){
  return `
  <div class="propiedad">
      <div class="img" style="background-image: url('${departamento.src}')"></div>
        <section>
          <h5>${departamento.nombre}</h5>
          <div class="d-flex justify-content-between">
            <p>Cuartos: ${departamento.cuartos}</p>
            <p>Metros: ${departamento.metros}</p>
          </div>
            <p class="my-3">${departamento.descripcion}</p>
            <button class="btn btn-info ">Ver más</button>
        </section>
      </div>
  `;
}

  function cargaInicial(contenedorPropiedades){
  let html = "";
  let contador = 0;
  for (const departamento of propiedadesJSON){
    html += templateDepartamento(departamento);
    contador += 1;
  
  }

  contenedorPropiedades.innerHTML = html;
  contadorTotal.innerHTML = contador;
}

function buscar(){
  let inputCuartos = Number(document.querySelector('#inputCuartos').value);
  let inputDesdeMetros = Number(document.querySelector('#inputDesdeMetros').value);
  let inputHastaMetros = Number(document.querySelector('#inputHastaMetros').value);
  
  if (inputCuartos <= 0){
    alert('Por favor completa todos los campos antes de presionar el botón de búsqueda')
    return;
  } else if (inputDesdeMetros <= 0){
    alert('Por favor completa todos los campos antes de presionar el botón de búsqueda')
    return;
  } else if (inputHastaMetros <= 0){
    alert('Por favor completa todos los campos antes de presionar el botón de búsqueda')
    return;
  }
  let html = "";
  let contador = 0;
    for (const departamento of propiedadesJSON){
      if(departamento.cuartos >= inputCuartos && (departamento.metros >= inputDesdeMetros && departamento.metros <= inputHastaMetros)){
      html += templateDepartamento(departamento);
      contador += 1;
      }
    }
    const contenedorPropiedades = document.querySelector('.propiedades');
    contenedorPropiedades.innerHTML = html;
    contadorTotal.innerHTML = contador;
  }

document.addEventListener('DOMContentLoaded', (event) => {
  const contenedorPropiedades = document.querySelector('.propiedades');
  cargaInicial(contenedorPropiedades);
  const contadorTotal = document.querySelector('#contadorTotal');
  const botonBuscar = document.querySelector('#buscarPropiedad');
  botonBuscar.addEventListener('click', buscar);
});