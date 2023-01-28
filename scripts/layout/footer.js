const Footer = () => {
	document.querySelector(
		'footer',
	).innerHTML = `<nav class="navbar navbar-expand-md navbar-dark fixed-bottom pie">
    <div class="container-fluid">
        <div class="navbar-collapse pie__info">
            <a
                class="navbar-brand pie__info__disclaimer pb-2 px-3"
                href="./pages/contacto.html"
                >Proyecto académico sin fines de lucro y no representa
                recomendación o asesoría financiera alguna, para aclaraciones
                contáctame por mis redes:</a
            >
            <a
                class="navbar-brand pie__info__disclaimer_sm pb-2 px-3 me-auto ms-auto"
                href="./pages/contacto.html"
                >Contáctame:</a
            >
            <ul class="navbar-nav me-auto mb-2 mb-md-0 ms-auto pie__links">
                <li class="nav-item mx-1">
                    <a href="https://www.linkedin.com/in/thayrovg/" target="_blank"
                        ><img
                            class="pie__links_img"
                            src="../images/linkedin_icon.png"
                            alt="Logo de LinkedIn"
                    /></a>
                </li>
                <li class="nav-item mx-1">
                    <a href="https://github.com/Thayrov" target="_blank"
                        ><img
                            class="pie__links_img"
                            src="../images/github_icon.png"
                            alt="Logo de Github"
                    /></a>
                </li>
                <li class="nav-item mx-1">
                    <a href="https://www.facebook.com/thayrovg" target="_blank"
                        ><img
                            class="pie__links_img"
                            src="../images/facebook_icon.png"
                            alt="Logo de Facebook"
                    /></a>
                </li>
                <li class="nav-item mx-1">
                    <a href="https://twitter.com/ThayrovG" target="_blank"
                        ><img
                            class="pie__links_img"
                            src="../images/twitter_icon.png"
                            alt="Logo de Twitter"
                    /></a>
                </li>
            </ul>
        </div>
    </div>
</nav>`;
};
Footer();
