<template>
    <div>
        <!-- ======== sidebar-nav start =========== -->
        <aside class="sidebar-nav-wrapper">
            <div class="navbar-logo">
                <router-link
                    :to="{ name: 'Dashboard' }"
                    class="notext-decoration"
                >
                    <img src="/assets/images/logo/logo.png" alt="logo" />
                </router-link>
            </div>
            <nav class="sidebar-nav">
                <ul>
                    <li class="nav-item">
                        <router-link
                            :to="{ name: 'Dashboard' }"
                            class="notext-decoration"
                        >
                            <span class="icon">
                                <svg width="22" height="22" viewBox="0 0 22 22">
                                    <path
                                        d="M17.4167 4.58333V6.41667H13.75V4.58333H17.4167ZM8.25 4.58333V10.0833H4.58333V4.58333H8.25ZM17.4167 11.9167V17.4167H13.75V11.9167H17.4167ZM8.25 15.5833V17.4167H4.58333V15.5833H8.25ZM19.25 2.75H11.9167V8.25H19.25V2.75ZM10.0833 2.75H2.75V11.9167H10.0833V2.75ZM19.25 10.0833H11.9167V19.25H19.25V10.0833ZM10.0833 13.75H2.75V19.25H10.0833V13.75Z"
                                    />
                                </svg>
                            </span>
                            <span class="text">Dashboard</span>
                        </router-link>
                    </li>
                       <li class="nav-item" v-if="is('Administrador')">
                        <router-link
                            :to="{ name: 'List-Supplier' }"
                            class="notext-decoration"
                        >
                            <span class="icon">
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4.58333 3.66675H17.4167C17.9029 3.66675 18.3692 3.8599 18.713 4.20372C19.0568 4.54754 19.25 5.01385 19.25 5.50008V16.5001C19.25 16.9863 19.0568 17.4526 18.713 17.7964C18.3692 18.1403 17.9029 18.3334 17.4167 18.3334H4.58333C4.0971 18.3334 3.63079 18.1403 3.28697 17.7964C2.94315 17.4526 2.75 16.9863 2.75 16.5001V5.50008C2.75 5.01385 2.94315 4.54754 3.28697 4.20372C3.63079 3.8599 4.0971 3.66675 4.58333 3.66675ZM4.58333 7.33341V11.0001H10.0833V7.33341H4.58333ZM11.9167 7.33341V11.0001H17.4167V7.33341H11.9167ZM4.58333 12.8334V16.5001H10.0833V12.8334H4.58333ZM11.9167 12.8334V16.5001H17.4167V12.8334H11.9167Z"
                                    />
                                </svg>
                            </span>
                            <span class="text">Importar Proveedores</span>
                        </router-link>
                    </li>

                    <span class="divider"><hr /></span>

                    <li class="nav-item">
                        <a
                            href="javascript:void(0)"
                            @click="logOut"
                            class="notext-decoration"
                        >
                            <span class="icon">
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12.9067 14.2908L15.2808 11.9167H6.41667V10.0833H15.2808L12.9067 7.70917L14.2083 6.41667L18.7917 11L14.2083 15.5833L12.9067 14.2908ZM17.4167 2.75C17.9029 2.75 18.3692 2.94315 18.713 3.28697C19.0568 3.63079 19.25 4.0971 19.25 4.58333V8.86417L17.4167 7.03083V4.58333H4.58333V17.4167H17.4167V14.9692L19.25 13.1358V17.4167C19.25 17.9029 19.0568 18.3692 18.713 18.713C18.3692 19.0568 17.9029 19.25 17.4167 19.25H4.58333C3.56583 19.25 2.75 18.425 2.75 17.4167V4.58333C2.75 3.56583 3.56583 2.75 4.58333 2.75H17.4167Z"
                                    />
                                </svg>
                            </span>
                            <span class="text">Cerrar Sesión</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
        <div class="overlay"></div>
        <!-- ======== sidebar-nav end =========== -->
    </div>
</template>

<script>
export default {
    methods: {
        logOut() {
            axios.post("/api/logout").then(() => {
                this.$router.push({ name: "Login" });
            });
        },
    },
};
</script>

<style></style>
