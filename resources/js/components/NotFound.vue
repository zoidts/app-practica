<template>
    <div class="container">
        <div class="col-auto p-5 text-center">
            <div class="row g-0 auth-row">
                <div class="col-lg-6">
                    <div class="auth-cover-wrapper bg-primary-100">
                        <div class="auth-cover">
                            <div class="cover-image">
                                <img
                                    src="/assets/images/404/404.png"
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
                    <div class="signin-wrapper">
                               <div class="row">
                                    <div class="title text-center mt-5">
                                        <h1 class="text-primary">Lo sentimos</h1>
                                        <p class="text-medium">Página no encontrada</p>
                                    </div>
                                    <div class="col-12">
                                        <div
                                            class="button-group d-flex justify-content-center flex-wrap"
                                        >
                                            <button
                                                @click.prevent="inicio"
                                                type="submit"
                                                class="main-btn primary-btn btn-hover w-100 text-center"
                                            >
                                                Regresar
                                            </button>
                                        </div>
                                    </div>
                                 </div>
                        </div>
                    </div>
                </div>
                <!-- end col -->
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
        inicio() {
                  this.$router.push({ name: "Dashboard" });
        },
    },
};
</script>

<style></style>
