<template>
    <div class="container">
    <form @submit.prevent="submitCar">
        <div class="form-group">
            <label for="brand">Brand: </label>
            <input type="text" id="brand" class="form-control" v-model="newCar.brand" minlength=2 maxlenght=100 required/>
        </div>
        <div class="form-group">
            <label for="model">Model : </label>
            <input type="text" id="model" class="form-control" v-model="newCar.model" minlength=2 maxlenght=100 required/>
        </div>
        <div class="form-group">
            <select  id="" class="" v-model="newCar.year" required>
                <option value="0">Year:</option>
                <option v-for="year in years" :key="year" :value="year" >{{ year }}</option>
            </select>
        </div>
        <div class="form-group">
            <label for='maxSpeed'>Max Speed :</label>
            <input type="number" id="maxSpeed" class="form-control" v-model.number="newCar.maxSpeed">
        </div>
        <div class="form-group">
            <label for='numberOfDoors'>Number Of Doors :</label>
            <input type="number" id="numberOfDoors" class="form-control" v-model.number="newCar.numberOfDoors" required/>
        </div>
        <div class="form-group">
            <input type="checkbox" name="isAutomatic"  value=true v-model="newCar.isAutomatic"> isAutomatic 
            <input type="radio" name="engine" value='diesel' v-model="newCar.engine" required/> Diesel
            <input type="radio" name="engine" value='petrol' v-model="newCar.engine" > Petrol
            <input type="radio" name="engine" value='electric' v-model="newCar.engine" > Electric
            <input type="radio" name="engine" value='hybrid' v-model="newCar.engine" > Hybrid
        </div>

        <div class="form-group">
            <button type="submit" class="btn btn-primary" >Add Car</button>
            <button class="btn btn-primary edit" @click="editCar">Edit Car</button>
        </div>
         <p class="btn btn-secondary" @click="resetForm">Reset</p>
         <p class="btn btn-secondary" @click="previewInput">Preview</p>
   </form>
    </div>
</template>

<script>
import Axios from 'axios';
import CarService, { carService } from '../services/cars'

export default {
    data() {
        return {
            newCar: {
                "brand": "",
                "model": "",
                "year": '',
                "maxSpeed": "",
                "numberOfDoors": "",
                "isAutomatic": false,
                "engine": "",
            },
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
     editCar () {
        carService.editCar(this.$route.params.id, this.newCar)
        .then(this.$router.push('/cars'))
        .catch(e=> {
            this.errors.push(e)
        })
     },

    resetForm() {
      this.newCar.brand= ''
      this.newCar.model= ''
      this.newCar.year = ''
      this.newCar.maxSpeed = ''
      this.newCar.numberOfDoors= ''

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
 },
 created () {
     if (this.$route.params.id) {
        carService.getSingleCar(this.$route.params.id).then ( response => {
            this.newCar= response.data;
            //console.log(this.singleCar);
        });
     }
 }
}
</script>

<style scoped>
    form p {
        margin-right:3px;
    }

    .edit {
        float: right;
    }
</style>


// Prikazati formu gde se upisuju svi potrebni podaci o automobilu
// brand i model se unose pomoću text input-a
// year se unosi preko select box-a, u kome su prikazane godine 1990- 2018
// maxSpeed i numberOfDoors se unose pomoću number input-a
// isAutomatic se obeležava preko checkbox-a
// engine realizovati preko radio button-a. Opcije su `diesel`, `petrol`, `electric`, `hybrid`
