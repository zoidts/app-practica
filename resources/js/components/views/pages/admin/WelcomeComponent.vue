<template >
    <div class="container">
        <div class="col-auto p-5 text-center">
            <div class="row g-0 auth-row">
                <div class="col-lg-6">
                    <div class="auth-cover-wrapper bg-primary-100">
                        <div class="auth-cover">
                            <div class="cover-image">
                                <img
                                    src="/assets/images/welcome/welcome.png"
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
                                        <h1 class="text-primary">Bienvenid@</h1>
                                        <h3 class="text-primary">{{userName}}</h3>
                                        <p class="text-medium">Sistema HEXATECH</p>
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
    props: {
        userName: ''
    },
    methods: {
        inicio() {
                  this.$router.push({ name: "Dashboard" });
        },
    },
};
</script>

<style></style>
