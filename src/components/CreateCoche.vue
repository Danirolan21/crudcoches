<template>
  <div>
    <h1>Create Coche</h1>
    <form v-on:submit.prevent="insertCoche()" class="container">
        <div class="form-group">
            <label class="form-label">IdCoche: </label>
            <input type="number" class="form-control" v-model="coche.idCoche"/>  
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
            Crear Coche
        </button>
    </form>
  </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches.js'

const service = new ServiceCoches();

    export default {
        name: "CreateCoche",
        data() {
            return {
                coche: {
                    idCoche: 0,
                    marca: "",
                    modelo: "",
                    conductor: "",
                    imagen: ""
                }
            }
        },
        methods: {
            insertCoche() {
                service.insertCoche(this.coche).then( result => {
                    console.log(result);
                    this.$router.push("/")
                })
            }
        }
    }
</script>

<style>

</style>