// Fecha del cumpleaños (modificar según el cumpleaños deseado)
const birthday = new Date('2024-10-31T00:00:00');

// Función para actualizar la cuenta regresiva
function updateCountdown() {
    const now = new Date();
    const timeLeft = birthday - now;

    // Cálculos de días, horas, minutos y segundos restantes
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Actualización del DOM
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);