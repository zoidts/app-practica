<template>
<div>
  <BreadCrumbComponent :title="title" />
   <div class="row">

 </div>
</div>
</template>

<script>
import BreadCrumbComponent from './../../../back/components/BreadCrumbComponent'
export default {
    components: {
               BreadCrumbComponent,
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
