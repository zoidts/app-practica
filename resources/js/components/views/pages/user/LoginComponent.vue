<template>
    <div class="container">
        <div class="col-auto p-5 text-center">
            <div class="row g-0 auth-row">
                <div class="col-lg-6">
                    <div class="auth-cover-wrapper bg-primary-100">
                        <div class="auth-cover">
                            <div class="cover-image">
                                <img
                                    src="assets/images/auth/login-pana.png"
                                    alt=""
                                />
                            </div>
                            <div class="shape-image">
                                <img
                                    src="assets/images/auth/shape.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end col -->
                <div class="col-lg-6">
                    <div class="title text-center mt-5">
                        <h1 class="text-primary">Bienvenido</h1>
                        <p class="text-medium">Ingrese sus datos de acceso</p>
                    </div>
                    <div class="signin-wrapper">
                        <div class="form-wrapper">
                            <form action="#">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="input-style-1">
                                            <label>Correo electrónico</label>
                                            <input
                                                v-model="form.email"
                                                type="email"
                                                name="email"
                                                placeholder="nombre@ejemplo.com"
                                            />

                                                 <span v-if="errors.email"
                                            class="text-sm text-danger m"
                                        >
                                            {{errors.email[0]}}
                                        </span>

                                        </div>
                                    </div>
                                    <!-- end col -->
                                    <div class="col-12">
                                        <div class="input-style-1">
                                            <label>Contraseña</label>
                                            <input
                                                v-model="form.password"
                                                type="password"
                                                name="password"
                                                placeholder="Contraseña"
                                            />
                                           <span v-if="errors.password"
                                            class="text-sm text-danger m"
                                        >
                                            {{errors.password[0]}}
                                        </span>
                                        </div>
                                    </div>
                                    <!-- end col -->
                                    <div class="col-xxl-6 col-lg-12 col-md-6">
                                        <div
                                            class="form-check checkbox-style mb-30"
                                        >
                                            <input
                                                class="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="checkbox-remember"
                                            />
                                            <label
                                                class="form-check-label"
                                                for="checkbox-remember"
                                            >
                                                Recuerdame la proxima vez</label
                                            >
                                        </div>
                                    </div>
                                    <!-- end col -->
                                    <div class="col-xxl-6 col-lg-12 col-md-6">
                                        <div
                                            class="text-start text-md-end text-lg-start text-xxl-end mb-30"
                                        >
                                            <a href="#0" class="hover-underline"
                                                >¿Has olvidado tu contraseña?</a
                                            >
                                        </div>
                                    </div>
                                    <!-- end col -->
                                    <div class="col-12">
                                        <div
                                            class="button-group d-flex justify-content-center flex-wrap"
                                        >
                                            <button
                                                @click.prevent="loginForm"
                                                type="submit"
                                                class="main-btn primary-btn btn-hover w-100 text-center"
                                            >
                                                Iniciar Sesión
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <!-- end row -->
                            </form>
                        </div>
                    </div>
                </div>
                <!-- end col -->
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
            errors: [],
        };
    },
    methods: {
         loginForm() {
            axios.post("/api/login", this.form).then(() =>
            {
                window.location.href = '/'

            }).catch((error) => {
                    this.errors = error.response.data.errors
                    console.log("errores", this.errors);
            })

        },

    },
};
</script>

<style></style>
