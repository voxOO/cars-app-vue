<template>
    <div>
        <table class="table table-striped">
            <tr>
                 <th>Brand</th>
                 <th>Model</th>
                 <th>Year</th>
                 <th>maxSpeed</th>
                 <th>isAutomatic</th>
                 <th>engine</th>
                 <th>numberOfDoors</th>
            </tr>
            <tr v-for='car in cars' :key="car.id">    
                <td>
                    {{ car.brand }}
                </td>
                <td>
                    {{ car.model }}
                </td>
                <td>
                    {{ car.year }}
                </td>
                <td>
                    {{ car.maxSpeed }}
                </td>
                <td>
                    {{ car.isAutomatic }}
                </td>
                <td>
                    {{ car.engine }}
                </td>
                <td>
                    {{ car.numberOfDoors}}
                </td>
                <td>
                    <router-link v-bind:to="'/edit/' + car.id" class="btn btn-secondary">Edit</router-link>
                    <button class="btn btn-secondary" @click="deleteCar(car.id)">Delete</button>
                </td>
            </tr>
        </table>
    </div>
</template>


<script>
import { carService } from '../services/cars'

export default {
    data () {
        return {
            cars :[]
        }
    },
    
    created () {
            carService.getAll()
                .then(response => {
                    this.cars = response.data;
                    //console.log(response)
                })
            //Thnis will call service
        },
    methods: {
        deleteCar(id) {
            carService.deleteCar(id)
            .then(response => {
                this.$router.go();
            }).catch(e=> {
                this.errors.push(e)
            })
        }
    }
}
</script>

<style scoped>
   .btn {
        margin-right: 3px
    }
</style>
