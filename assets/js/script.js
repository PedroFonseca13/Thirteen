var services = document.querySelector('.services-title')

function handleIntersection(entries, observer) {
	entries.forEach(function (entry) {
		if (entry.isIntersecting) {
			// O elemento está visível na tela
			console.log('O elemento está sendo exibido')
			services.classList.add('animate__animated', 'animate__fadeInLeft')
		} else {
			// O elemento não está visível na tela
			console.log('O elemento não está sendo exibido')
		}
	})
}

// Seleciona o elemento que deseja observar
var meuElemento = document.querySelector('.services-title')

// Cria uma nova instância do Intersection Observer
var observer = new IntersectionObserver(handleIntersection)

// Inicia a observação do elemento
observer.observe(meuElemento)

// função AOS
AOS.init({
	duration: 900,
	easing: 'easeOut',
	once: true,
})
