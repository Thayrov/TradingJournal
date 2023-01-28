const Header = () => {
	document.querySelector(
		'header',
	).innerHTML = `<div class="d-flex justify-content-center">
    <a href="../index.html" class="text-decoration-none"
        ><p class="fs-1 fw-bold title text-white">Trading TX</p></a
    >
</div>
<div class="d-flex align-items-center divider"></div>
<div class="d-flex justify-content-evenly">
    <ul
        class="nav nav-pills nav-fill me-auto mb-2 mb-md-0 ms-auto flex-md-row flex-sm-column fs-md-1 fs-sm-5">
        <li class="px-5 nav-item">
            <a
                class="nav-link text-decoration-none text-white title fw-light cabecera__nav__a"
                href="calculadora.html"
                >Calculadora</a
            >
        </li>
        <li class="px-5 nav-item">
            <a
                class="nav-link text-decoration-none text-white title fw-light cabecera__nav__a"
                aria-current="page"
                href="journal.html"
                >Journal</a
            >
        </li>
        <li class="px-5 nav-item">
            <a
                class="nav-link text-decoration-none text-white title fw-light cabecera__nav__a"
                href="mercados.html"
                >Mercados</a
            >
        </li>
        <li class="px-5 nav-item">
            <a
                class="nav-link text-decoration-none text-white title fw-light cabecera__nav__a"
                href="contacto.html"
                >Contacto</a
            >
        </li>
    </ul>
</div>`;
};
Header();
