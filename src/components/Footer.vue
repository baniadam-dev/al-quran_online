<template>
    <footer class="footer bg-dark text-white p-3">
        <div class="container">
            <div class="row pt-5">
                <div class="col-md-2 text-center">
                    <img src="../../public/img/icons/favicon-32x32.png" class="justify-content-center logo" alt="">
                </div>
                <div class="col-md-6">
                    <h5>Al-Qur'an Online</h5>
                    <p class="text">
                        Baca Al-Qur'an secara Online dimana dan kapanpun saja dengan mudah, Al-Qur'an ini yang bersumber
                        dari
                        <a href="#" class="text-decoration-none text-warning">Kementrian Agama Republik Indonesia
                        </a> dengan murottal
                        <strong>Misyari Rasyid Al-'Afasi</strong>.
                    </p>
                </div>
                <div class="col-md-2">
                    <h5>Media Sosial</h5>
                    <ul class="list-unstyled">
                        <li><a href="https://www.instagram.com/baniadam_tech" class="text-decoration-none text-warning"
                                target="_blank">Instagram</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h5>Kontribusi Project</h5>
                    <ul class="list-unstyled">
                        <li><a href="https://github.com/baniadam-dev"
                                class="text-decoration-none text-warning" target="_blank">Github </a></li>
                    </ul>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-12 justify-content-center text-center">
                    <span class="">
                        2025 | <a href="https://github.com/baniadam-dev" target="_blank"
                            class="text-decoration-none text-warning">ADAM DEV.</a>
                    </span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterVue',
    components: {},
}
</script>

<style scoped>
.mt-9 {
    margin-top: 9rem;
}

img.logo {
    width: 75%;
}

@media only screen and (max-width: 768px) {
    img.logo {
        width: 50%;
    }

    .footer {
        text-align: center;
    }
}
</style>