<template>
    <div class="container">
    <form @submit.prevent="submitCar">
        <div class="form-group">
            <label for="brand">Brand: </label>
            <input type="text" id="brand" class="form-control" v-model="newCar.brand" required/>
        </div>
        <div class="form-group">
            <label for="model">Model : </label>
            <input type="text" id="model" class="form-control" v-model="newCar.model" required/>
        </div>
        <div class="form-group">
            <select  id="" class="" v-model="newCar.year">
                <option value="0">Year:</option>
                <option v-for="year in years" :key="year" :value="year" >{{ year }}</option>
            </select>
        </div>
        <div class="form-group">
            <label for='maxSpeed'>Max Speed :</label>
            <input type="number" id="maxSpeed" class="form-control" v-model.number="newCar.maxSpeed" required>
        </div>
        <div class="form-group">
            <label for='numberOfDoors'>Number Of Doors :</label>
            <input type="number" id="numberOfDoors" class="form-control" v-model.number="newCar.numberOfDoors" required>
        </div>
        <div class="form-group">
            <input type="checkbox" name="isAutomatic"  value=true v-model="newCar.isAutomatic"> isAutomatic 
            <input type="radio" name="engine1" value='diesel' v-model="newCar.engine"> Diesel
            <input type="radio" name="engine2" value='petrol' v-model="newCar.engine"> Petrol
            <input type="radio" name="engine3" value='electric' v-model="newCar.engine"> Electric
            <input type="radio" name="engine4" value='hybrid' v-model="newCar.engine"> Hybrid
        </div>

        <div class="form-group">
            <button type="submit" class="btn btn-primary" >Add Car</button>
        </div>
         <p class="btn btn-secondary" @click="resetForm">Reset</p>
         <p class="btn btn-secondary" @click="previewInput">Preview</p>
   </form>
    </div>
</template>

<script>
import Axios from 'axios';
import { carService } from '../services/cars'

export default {
    data() {
        return {
            newCar: {
                "brand": "",
                "model": "",
                "year": 0,
                "maxSpeed": 0,
                "numberOfDoors": 0,
                "isAutomatic": false,
                "engine": "",
            }
        }
    },
    computed : {
    years () {
      const year = new Date().getFullYear()
      return Array.from({length: year - 1990}, (value, index) => 1991 + index)
    }
  }, 
  methods : {
     submitCar () {
       carService.submitCar(this.newCar)
       .then( this.$router.push('/cars'))
       .catch(e=> {
           this.errors.push(e)
       })
    },
    resetForm() {
      this.newCar.brand= ''
      this.newCar.model= ''
      this.newCar.year = 0
      this.newCar.maxSpeed = 0
      this.newCar.numberOfDoors= 0;
      this.newCar.isAutomatic= false
      this.newCar.engine= ''
  },
  previewInput() {
      alert(
          "Brand:" + this.newCar.brand +
          "\nModel:" + this.newCar.model +
          "\nYear:" + this.newCar.year +
          "\nMax Speed:" + this.newCar.maxSpeed +
          "\nNumber of doors:" + this.newCar.numberOfDoors +
          "\nAutomatic:" + this.newCar.isAutomatic +
          "\nEngine type:" + this.newCar.engine
      );
  }
}
}
</script>

<style scoped>
    form p {
        margin-right:3px;
    }
</style>


// Prikazati formu gde se upisuju svi potrebni podaci o automobilu
// brand i model se unose pomoću text input-a
// year se unosi preko select box-a, u kome su prikazane godine 1990- 2018
// maxSpeed i numberOfDoors se unose pomoću number input-a
// isAutomatic se obeležava preko checkbox-a
// engine realizovati preko radio button-a. Opcije su `diesel`, `petrol`, `electric`, `hybrid`
