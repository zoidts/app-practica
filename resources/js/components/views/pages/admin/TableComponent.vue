<template>
    <div class="col-lg-12" v-loading.fullscreen.lock="loading">
        <div class="card-style mb-30">
            <div class="d-flex justify-content-end mb-3">
                <!--    <el-button class="main-btn primary-btn btn-hover notext-decoration"
                     >Importar proveedore</el-button> -->
                <button
                    @click="uploadDialog"
                    class="main-btn primary-btn btn-hover notext-decoration"
                >
                    Importar proveedores
                </button>
            </div>
            <div class="table-wrapper table-responsive">
                <table class="table" :v-loading="loading">
                    <thead>
                        <tr>
                            <th><h6>Nombre</h6></th>
                            <th><h6>Correo Electrónico</h6></th>
                            <th><h6>R.F.C.</h6></th>
                            <th><h6>Estatus</h6></th>
                            <th><h6>Acciones</h6></th>
                        </tr>
                        <!-- end table row-->
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in providers" :key="index">
                            <td class="min-width">
                                <p>{{ item.name }}</p>
                            </td>
                            <td class="min-width">
                                <p>{{ item.email }}</p>
                            </td>
                            <td class="min-width">
                                <p>{{ item.rfc }}</p>
                            </td>
                            <td class="min-width">
                                <span
                                    class="status-btn"
                                    :class="computedClass(index)"
                                >
                                    {{ item.status }}</span
                                >
                            </td>
                            <td>
                                <div
                                    class="form-check form-switch toggle-switch"
                                >
                                    <input
                                        v-model="item.checked"
                                        class="form-check-input"
                                        type="checkbox"
                                        id="index"
                                        @click="checkedToggle(index)"
                                    />
                                </div>
                            </td>
                        </tr>
                        <!-- end table row -->
                    </tbody>
                </table>
                <!-- end table -->
            </div>
        </div>
        <!-- end card -->
        <el-dialog
            title="Subir Archivo"
            :visible.sync="dialogFormVisible"
            width="30%"
            center
        >
            <el-upload
                class="upload-demo text-center"
                drag
                ref="upload"
                action="/api/upload"
                :headers="{ 'x-csrf-token': token }"
                :auto-upload="false"
                :on-success="cargadosProviders"
                show-file-list
                accept=".csv"
                multiple
                :limit="1"
                :on-exceed="archivosCargados"
            >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                    Suelta tu archivo aquí o <em>haz clic para cargar</em>
                </div>
                <div slot="tip" class="el-upload__tip">
                    Solo archivos con extensión csv
                </div>
            </el-upload>
            <span slot="footer" class="dialog-footer">
                <button
                    class="main-btn deactive-btn-outline btn-hover"
                    @click="dialogFormClose"
                >
                    Cancelar
                </button>
                <button
                    class="main-btn primary-btn btn-hover"
                    @click="submitUpload"
                >
                    Cargar archivo
                </button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            providers: {},
            dialogFormVisible: false,
            token: "",
            loading: false,
            errors:[]
        };
    },

    mounted() {
        this.token = window.Laravel.csrfToken;
    },

    methods: {
        uploadDialog() {
            this.dialogFormVisible = true;
        },

        submitUpload() {
            this.dialogFormVisible = false;
            this.loading = true;
            if (this.$refs.upload.uploadFiles.length !== 0) {
                this.$refs.upload.submit();
            } else {
                this.$notify({
                    title: "Error",
                    message:
                        "No se encuentró ningún archivo seleccionado para importar, Favor de verificar",
                    type: "error",
                    duration: 5000,
                });
                this.loading = false;
            }
        },

        checkedToggle(index) {
            this.providers[index].checked = !this.providers[index].checked;
            if (this.providers[index].checked) {
                this.registerProvider(index);
            } else {
                this.deleteProvider(index);
            }
        },
        archivosCargados() {
            this.$notify({
                title: "Aviso importante",
                message: "Solo se permite la carga de 1 archivo",
                type: "warning",
                duration: 5000,
            });
        },
        registerProvider(index) {
            axios
                .post("/api/store", this.providers[index])
                .then((response) => {
                    console.log(response);
                    this.$notify({
                        title: "Proveedor Aceptado",
                        message: response.data,
                        type: "success",
                        duration: 5000,
                    });
                     this.providers[index].status = "Aceptado";
                })
                .catch((error) => {
                    this.errors = Object.values(error.response.data.errors)
                        .flat()
                        .join();

                    this.$notify({
                        title: "Proveedor ya se encuentra aceptado",
                        message: this.errors,
                        type: "info",
                        duration: 5000,
                    });
                     this.providers[index].checked = true;
                     this.providers[index].status = "Aceptado";

                });
        },
        deleteProvider(index) {
            this.$confirm(
                "Al rechazar al proveedor se eliminará permanentemente del sistema ¿Continuar?",
                "Advertencia",
                {
                    confirmButtonText: "Si, Eliminar",
                    cancelButtonText: "No, Cancelar",
                    type: "warning",
                }
                ).then(() => {
                    this.removeProvider(index);
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "Acción canceleda",
                    });
                    this.providers[index].checked =  !this.providers[index].checked;

                });
        },
        removeProvider(index) {
            axios.delete(`/api/delete/${this.providers[index].email}`)
                .then((response) => {
                    this.$notify({
                        title: "Proveedor Eliminado",
                        message: response.data,
                        type: "success",
                        duration: 5000,
                    });

                     this.providers[index].status = "Rechazado";
                     this.providers[index].checked = false;

                }).catch((error) => {
                    this.errors = Object.values(error.response.data.errors)
                        .flat()
                        .join();

                    this.$notify({
                        title: "Error",
                        message: this.errors,
                        type: "error",
                        duration: 5000,
                    });

                });
        },
        cargadosProviders(response) {
            setTimeout(() => {
                this.providers = response;
                this.loading = false;
            }, 2000);
            this.$refs.upload.clearFiles();
        },
        dialogFormClose() {
            this.$refs.upload.clearFiles();
            this.dialogFormVisible = false;
        },
        computedClass(index) {
            let className = "";
            switch (this.providers[index].status) {
                case "Aceptado":
                    className = "active-btn";
                    break;
                case "Rechazado":
                    className = "close-btn";
                    break;

                default:
                    className = "info-btn";
            }
            return className;
        },
    },
};
</script>

