<template>
    <div>
        <SideBarComponent />
        <main class="main-wrapper">
            <HeaderComponent :userName="user.name" />
            <section class="section">
                <div class="container-fluid">
                    <div class="row">
                        <WelcomeComponent  v-if="($route.name === 'Dashboard')"
                              :userName="user.name"
                        />
                        <router-view></router-view>
                    </div>
                </div>
            </section>
            <FooterComponent />
        </main>
    </div>
</template>

<script>
import SideBarComponent from "./SideBarComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import WelcomeComponent from "../../views/pages/admin/WelcomeComponent";
export default {
    components: {
        SideBarComponent,
        HeaderComponent,
        FooterComponent,
        WelcomeComponent,
    },
    data() {
        return {
            user: {},
        };
    },
    mounted(){
       axios.get("/api/user").then((res) => {
            this.user = res.data;
        }) .catch((error) => {
                    this.errors = error.response.data.errors;
                    console.log("errores", this.errors);
                });
    },
};
</script>
