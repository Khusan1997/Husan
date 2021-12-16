<template>
  <div>
    <v-card class="ClassCard" style="padding: 2%;">
      <v-row>
        <v-col class="text-center">
          <h3>{{ $t('LeavingStudentReStudyClass') }}</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="1">
          <v-select
            v-model="filter.PageLimit"
            :items="filter.perPageOptions"
            :clearable="false"
            class="per-page-selector d-inline-block ml-50 mr-1"
            dense
            solo
          ></v-select>
        </v-col>
        <v-col>
          <v-btn color="primary"
            ><v-icon>{{ icons.mdiPlus }}</v-icon> {{ $t('create') }}
          </v-btn>
        </v-col>
        <v-col sm="12" lg="4" class="text-right">
          <v-btn-toggle>
            <v-text-field
              v-model="filter.Search"
              type="text"
              outlined
              dense
              placeholder="Search"
              hide-details
            ></v-text-field>
            <v-btn color="primary"
              ><v-icon dark>{{ icons.mdiMagnify }}</v-icon></v-btn
            >
          </v-btn-toggle>
        </v-col>
      </v-row>
      <v-row class="p-2">
        <v-col>
          <v-simple-table height="450" fixed-header>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-uppercase">{{$t('id')}}</th>
                  <th class="text-center text-uppercase">{{$t('docnumber')}}</th>
                  <th class="text-center text-uppercase">{{$t('docdate')}}</th>
                  <th class="text-center text-uppercase">{{$t('schoolyear')}}</th>
                  <th class="text-center text-uppercase">{{$t('schoolclass')}}</th>
                  <th class="text-center text-uppercase">{{$t('quantity')}}</th>
                  <th class="text-center text-uppercase">{{$t('pupil')}}</th>
                  <th class="text-center text-uppercase">{{$t('actions')}}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.dessert">
                  <td>{{ item.dessert }}</td>
                  <td class="text-center">
                    {{ item.calories }}
                  </td>
                  <td class="text-center">
                    {{ item.fat }}
                  </td>
                  <td class="text-center">
                    {{ item.carbs }}
                  </td>
                  <td class="text-center">
                    {{ item.protein }}
                  </td>
                    <td class="text-center">
                    {{ item.fat }}
                  </td>
                  <td class="text-center">
                    {{ item.carbs }}
                  </td>
                  <td class="text-center"> <v-icon @click="Edit">{{ icons.mdiPencil }}</v-icon><v-icon @click="Delete">{{icons.mdiDelete }}</v-icon></td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div>
            <v-row class="m-2">
              <v-col cols="12" sm="9" class="d-flex align-items-center justify-content-center justify-content-sm-start">
                <span class="text-muted">
                  {{ $t('Showing') }} {{ firstNumber }} {{ $t('to') }} {{ lastNumber }} {{ $t('of') }}
                  {{ filter.totalRows }}
                  {{ $t('entries') }}
                </span>
              </v-col>

              <v-col cols="12" sm="3" class="d-flex align-items-center justify-content-end justify-content-sm-end">
                <!-- <v-pagination
                  class="mb-0 mt-1 mt-sm-0 ml-3"
                  prev-class="prev-item"
                  next-class="next-item"
                  circle
                  :per-page="filter.PageLimit"
                  :total-rows="filter.totalRows"
                  v-model="filter.PageNumber"
                >
                  <template #prev-text>
                    <i class="fas fa-angle-left"></i>
                  </template>
                  <template #next-text>
                    <i class="fas fa-angle-right"></i>
                  </template>
                </v-pagination> -->
                <div >
                  <v-pagination v-model="filter.PageNumber" :length="4" circle></v-pagination>
                </div>
              </v-col>
            </v-row>
          </div>
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
    const desserts = [
      {
        dessert: 'Frozen Yogurt',
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Ice cream sandwich',
        calories: 237,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Eclair',
        calories: 262,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Cupcake',
        calories: 305,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
      {
        dessert: 'Gingerbread',
        calories: 356,
        fat: 6,
        carbs: 24,
        protein: 4,
      },
    ]

    return {
      desserts,
      filter: {
        Search: '',
        SortColumn: '',
        OrderType: 'asc',
        PageNumber: 1,
        PageLimit: 20,
        perPageOptions: [10, 20, 50, 100],
        totalRows: 0,
      },
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
  computed: {
    firstNumber() {
      return (this.filter.PageNumber - 1) * this.filter.PageLimit + 1;
    },
    lastNumber() {
      if (this.filter.totalRows < this.filter.PageLimit) {
        return this.filter.totalRows;
      } else {
        if (
          this.filter.PageNumber * this.filter.PageLimit >
          this.filter.totalRows
        ) {
          return this.filter.totalRows;
        } else {
          return this.filter.PageNumber * this.filter.PageLimit;
        }
      }
    },
  },
  created(){

  },
  methods:{
      Edit(){
         console.log('Edit')
      },
      Delete(){
          console.log('Delete')
      }
  }
}
</script>
<style >
.ClassCard{
  border-radius: 5px !important;
  border-top: 3px solid #9E69FD !important;
}
</style>

