<template>
  <div>
    <h1>Details Coche</h1>
    <ul v-if="coche" class="list-group">
        <li class="list-group-item active" aria-current="true">{{coche.idCoche}}</li>
        <li class="list-group-item">{{coche.marca}}</li>
        <li class="list-group-item">{{coche.modelo}}</li>
        <li class="list-group-item">{{coche.conductor}}</li>
        <li class="list-group-item"><img :src="coche.imagen" alt="Imagen Coche"/></li>
    </ul>
  </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches.js'

const service = new ServiceCoches();

    export default {
        name: "DetailsCoche",
        data() {
            return {
                coche: null
            }
        },
        mounted() {
            var idCoche = this.$route.params.id;
                console.log(idCoche);
            service.findCoche(idCoche).then(result => {
                console.log(result);
                this.coche = result
            })
        }
    }
</script>

<style>

</style>