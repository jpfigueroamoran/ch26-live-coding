const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');
const $button = document.querySelector('.button'); // Seleccionamos el botón

async function displayUser(username) {
  $n.textContent = 'Cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    console.log(data);
    $n.textContent = data.name || 'Nombre no disponible';
    $b.textContent = data.blog || 'Blog no disponible';
    $l.textContent = data.location || 'Ubicación no disponible';
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = 'Algo salió mal: ' + err.message;
}

$button.addEventListener('click', function () {
  displayUser('stolinski'); // Llamamos a la función displayUser al hacer clic en el botón
});

displayUser('stolinski').catch(handleError);
