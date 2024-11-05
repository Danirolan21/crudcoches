<template>
  <div>
    <h1>Home Component</h1>
    <table class="container" v-if="coches.length != 0">
        <thead>
            <tr>
                <th>IdCoche</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Conductor</th>
                <th>Imagen</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="coche in coches" :key="coche">
                <td>{{coche.idCoche}}</td>
                <td>{{coche.marca}}</td>
                <td>{{coche.modelo}}</td>
                <td>{{coche.conductor}}</td>
                <td><img :src="coche.imagen" alt="Imagen Coche" width="150px"></td>
                <td>
                    <router-link :to="'/details/' + coche.idCoche" class="btn btn-warning">
                        Details
                    </router-link>
                </td>
                <td>
                    <router-link :to="'/update/' + coche.idCoche" class="btn btn-primary">
                        Update
                    </router-link>
                </td>
                <td>
                    <router-link :to="'/delete/' + coche.idCoche" class="btn btn-danger">
                        Delete
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import ServiceCoches from './../services/ServiceCoches.js'

const service = new ServiceCoches();

    export default {
        name: "CochesComponent",
        data() {
            return {
                coches: []
            }
        },
        mounted() {
            service.getCoches().then(result => {
                this.coches = result
            })
            
        }
    }
</script>

<style>
    table, th, td {
        border: 1px solid white;
        padding: 5px;
        background-color: blanchedalmond;
        color: black;
    }
</style>