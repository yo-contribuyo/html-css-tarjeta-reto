fetch("./assets/js/datos.json") // fetching the data.json file
  .then((response) => response.json())
  .then((data) => {
    let perfiles = data.perfiles;

    let tarjetasNodo = document.getElementById("tarjetas");
    for (let index = 0; index < perfiles.length; index += 1) {
      let tarjeta = document.createElement("div");
      tarjeta.classList.add("col");

      let perfil = perfiles[index];
      tarjeta.innerHTML = `<div class="tarjeta">
                          <img
                            class="imagen-perfil"
                            src="${perfil.link_imagen}"
                            alt="Imagen de perfil"
                          />
                          <div class="descripcion">
                            <h3>${perfil.nombre}</h3>
                            <p>${perfil.mensaje}</p>
                          </div>
                          <div class="tarjeta-oscura">
                            <p>Conectemos!</p>
                            <a
                              class="icono"
                              href="https://github.com/${perfil.nick_github}"
                              target="_blank"
                              ><i class="fa fa-3x fa-github"></i
                            ></a>
                          </div>
                        </div>`;
      tarjetasNodo.appendChild(tarjeta);
    }
    if (!perfiles.length) {
      let mensaje = document.createElement("div");
      mensaje.classList.add("vacio");
      mensaje.innerHTML =
        "<h1>Aun no existen perfiles.</h1>";
        tarjetasNodo.append(mensaje);
    }
  })
  .catch(function (error) {
    console.error("Algo va mal."+ error);
  });
