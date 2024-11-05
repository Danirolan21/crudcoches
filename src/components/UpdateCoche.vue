<template>
  <div>
    <h1>Update Coche</h1>
    <form v-if="coche" v-on:submit.prevent="updateCoche()" class="container">
        <div class="form-group">
            <label class="form-label">IdCoche: </label>
            <input type="number" class="form-control" v-model="coche.idCoche" disabled/>  
        </div>
        <div class="form-group">
            <label class="form-label">Marca: </label>
            <input type="text" class="form-control" v-model="coche.marca"/>
        </div>
        <div class="form-group">
            <label class="form-label">Modelo: </label>
            <input type="text" class="form-control" v-model="coche.modelo"/>
        </div>
        <div class="form-group">
            <label class="form-label">Conductor: </label>
            <input type="text" class="form-control" v-model="coche.conductor"/>
        </div>
        <div class="form-group">
            <label class="form-label">Imagen: </label>
            <input type="text" class="form-control" v-model="coche.imagen"/>
        </div>
        <button class="btn btn-success mt-3">
            Modificar Coche
        </button>
    </form>
  </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches.js'

const service = new ServiceCoches();

    export default {
        name: "UpdateCoche",
        data() {
            return {
                coche: null
            }
        },
        methods: {
            updateCoche() {
                service.updateCoche(this.coche).then(result => {
                    console.log("Modificado " + result);
                    this.$router.push("/")
                })
            }
        }, mounted() {
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