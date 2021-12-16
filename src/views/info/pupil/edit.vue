<template>
  <div>
    <v-card class="ClassCard" style="padding: 2%">
      <v-row>
        <v-col class="text-center">
          <h3>{{ $t('Fanlar') }}</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select :items="items" label="Hujjat turi" dense outlined></v-select>
        </v-col>
        <v-col>
          <v-text-field dense label="Seriya" outlined></v-text-field>
        </v-col>
        <v-col>
          <v-text-field dense label="Raqam" outlined></v-text-field>
        </v-col>
        <v-col>
          <date-picker
            style="width: 100%"
            size="sm"
            lang="ru"
            placeholder="Tug'ilgan sana"
            value-type="format"
            format="DD.MM.YYYY"
          ></date-picker>
        </v-col>
        <v-col>
          <v-btn color="primary">Qidirish</v-btn>
        </v-col>
      </v-row>
     <v-row>
         <v-col>
              <v-row>
        <v-col>
          <v-text-field dense label="Sharfi" disabled value="asasfasf" outlined></v-text-field>
        </v-col>
        <v-col>
          <v-text-field dense label="Ismi" outlined></v-text-field>
        </v-col>
        <v-col>
          <v-text-field dense label="Otasining ismi" outlined></v-text-field>
        </v-col>
        <v-col>
          <date-picker
            style="width: 100%"
            size="sm"
            lang="ru"
            placeholder="Tug'ilgan sana"
            value-type="format"
            format="DD.MM.YYYY"
          ></date-picker>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
            <v-select :items="items" label="Jinsi" dense outlined></v-select>
        </v-col>
        <v-col>
           <v-select :items="items" label="Millatlar" dense outlined></v-select>
        </v-col>
        <v-col>
           <v-select :items="items" label="Fuqaroligi" dense outlined></v-select>
        </v-col>
        <v-col>
          <v-text-field dense label="INN" outlined></v-text-field>
        </v-col>
      </v-row>
       <v-row>
        <v-col>
            <v-text-field dense label="JSHSHIR raqami" outlined></v-text-field>
        </v-col>
        <v-col>
          <v-text-field dense label="Telefon" outlined></v-text-field>
        </v-col>
        <v-col>
           <v-select :items="items" label="Tug'ilgan mamlakat" dense outlined></v-select>
        </v-col>
        <v-col>
       <v-select :items="items" label="Tug'ilgan viloyat" dense outlined></v-select>
        </v-col>
      </v-row>
       <v-row>
        <v-col>
            <v-select :items="items" label="Jinsi" dense outlined></v-select>
        </v-col>
        <v-col>
           <v-select :items="items" label="Millatlar" dense outlined></v-select>
        </v-col>
        <v-col>
           <v-select :items="items" label="Fuqaroligi" dense outlined></v-select>
        </v-col>
        <v-col>
          <v-text-field dense label="INN" outlined></v-text-field>
        </v-col>
      </v-row>
       <v-row>
        <v-col sm="12" md="3">
            <v-text-field dense label="Tug'ilgan tuman" outlined></v-text-field>
        </v-col>
       
      </v-row>
         </v-col>
     </v-row>
      <v-row>
        <v-col class="text-right">
          <v-btn class="mr-2" color="#FD001E"><span style="color: #fff">Orqaga</span></v-btn>
          <v-btn color="success">Saqlash</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import {
  mdiMagnify,
  mdiPlus,
  mdiDelete,
  mdiPencil,
  mdiLockOpenOutline,
  mdiStarOutline,
  mdiAccountOutline,
  mdiTrendingUp,
  mdiHelpCircleOutline,
} from '@mdi/js'
export default {
  setup() {
    return {
      items: [
        "Tug'ilganlik to'grisida guvohnoma",
        'Passport',
        "Fuqaroligi bo'lmagan shaxsga beriladigan hujjat",
        'Chet el fuqarosi',
        'ID-karta',
      ],
      icons: {
        mdiMagnify,
        mdiPlus,
        mdiDelete,
        mdiPencil,
        mdiLockOpenOutline,
        mdiStarOutline,
        mdiAccountOutline,
        mdiTrendingUp,
        mdiHelpCircleOutline,
      },
    }
  },

  created() {},
  methods: {
    Delete() {
      console.log('Delete')
    },
  },
}
</script>
<style>
.ClassCard {
  border-radius: 5px !important;
  border-top: 3px solid #9e69fd !important;
}
</style>
