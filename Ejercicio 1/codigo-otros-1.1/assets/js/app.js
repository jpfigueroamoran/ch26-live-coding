const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Se cambia el selector 'name' por '.name' para seleccionar el elemento con la clase 'name'
const $b = document.querySelector('.blog'); // Se cambia el selector 'blog' por '.blog' para seleccionar el elemento con la clase 'blog'
const $l = document.querySelector('.location'); // Se agrega el selector para seleccionar el elemento con la clase 'location'

async function displayUser(username) {
  $n.textContent = 'cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    console.log(data);
    $n.textContent = data.name;
    $b.textContent = data.blog;
    $l.textContent = data.location;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err.message}`; // Se reemplaza 'n' por '$n' para referenciar correctamente al elemento con la clase 'name'
}

displayUser('stolinski').catch(handleError);