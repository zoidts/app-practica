<template >
<div>
<div v-if="is('Administrador')">
  <BreadCrumbComponent :title="title" />
   <div class="row">
       <TableComponent />
 </div>
</div>
<div v-else> <NotFound /> </div>
</div>
</template>

<script>
import BreadCrumbComponent from './../../../back/components/BreadCrumbComponent'
import TableComponent from './TableComponent'
import NotFound from '../../../NotFound'
export default {
    components: {
               BreadCrumbComponent,
               TableComponent,
               NotFound
    },
      props: {
    title: {
        type: String,
        default: 'Pagina'
    }
  }

}
</script>

<style>

</style>
