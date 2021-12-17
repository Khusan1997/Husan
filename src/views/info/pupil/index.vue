<template>
  <div>
    <v-card class="ClassCard" style="padding: 2%">
      <v-row>
        <v-col class="text-center">
          <h3>{{ $t("O'quvchini qabul qilish") }}</h3>
        </v-col>
      </v-row>
      <v-row>
        <!-- <v-col cols="12" md="1">
          <v-select
            v-model="filter.PageLimit"
            :items="filter.perPageOptions"
            :clearable="false"
            class="per-page-selector d-inline-block ml-50 mr-1"
            dense
            solo
          ></v-select>
        </v-col> -->
        <v-col>
          <v-btn @click="$router.push({name: 'editpupil'})" color="primary"
            ><v-icon>{{ icons.mdiPlus }}</v-icon> {{ $t('Yaratish') }}
          </v-btn>
        </v-col>
        <v-col sm="12" lg="4" class="text-right">
          <v-btn-toggle>
            <v-text-field
              v-model="filter.Search"
              type="text"
              outlined
              dense
              placeholder="Qdirish"
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
          <v-simple-table height="450" fixed-header style="margin-bottom: 50px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-uppercase">{{ $t('ID') }}</th>
                  <th class="text-center text-uppercase">{{ $t('Hujjat raqam') }}</th>
                  <th class="text-center text-uppercase">{{ $t('Sana') }}</th>
                  <th class="text-center text-uppercase">{{ $t("O'quv yili") }}</th>
                  <th class="text-center text-uppercase">{{ $t('Maktab sinflari') }}</th>
                  <!-- <th class="text-center text-uppercase">{{ $t("O'quvchilar soni") }}</th> -->
                  <th class="text-center text-uppercase">{{$t("O'quvchi")}}</th>
                  <!-- <th class="text-center text-uppercase">{{$t('Mazmuni')}}</th> -->
                  <!-- <th class="text-center text-uppercase">{{$t('Holati')}}</th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in array" :key="index">
                  <td class="text-center">
                    {{ index +1}}
                  </td>
                  <td class="text-center">
                    {{ item.docnumber }}
                  </td>
                   <td class="text-center">
                    {{ item.docdate }}
                  </td>
                  <td class="text-center">
                    {{ item.finyear }}
                  </td>
                  <td class="text-center">
                    {{ item.schoolgrade }}
                  </td>
                  <!-- <td class="text-center">
                    {{ telefon }}
                  </td> -->
                    <td v-if="item.surname !=null" class="text-center">
                    {{ item.surname+' '+item.name+' '+item.familyname }}
                  </td>
                  <!-- <td class="text-center">
                    <v-chip small :color="statusColor[status[status]]" class="font-weight-medium">
                      {{ status[status] }}
                    </v-chip>
                  </td> -->
                  <!-- <td class="text-center"> <v-icon @click="Edit">{{ icons.mdiPencil }}</v-icon><v-icon @click="Delete">{{icons.mdiDelete }}</v-icon></td> -->
                </tr>
              </tbody>
            </template>
          </v-simple-table>
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
  data() {
    const statusColor = {
      /* eslint-disable key-spacing */
      Tasdiqlangan: 'success',
      Актив: 'success',
      Rejected: 'error',
      Resigned: 'warning',
      Applied: 'info',
      /* eslint-enable key-spacing */
    }
    const desserts = [
      // {
      //   id: 1,
      //   docnumber: '001',
      //   docdate: '06.09.2021',
      //   finyear: '2021/2022',
      //   schoolgrade: '1-sinf',
      //   pupilquantity: 1,
      //   pupil: "Javlonova Gulmira Baxtiyor qizi",
      //   status: 1,
      // },
      //  {
      //   id: 1,
      //   docnumber: '002',
      //   docdate: '05.09.2021',
      //   finyear: '2021/2022',
      //   schoolgrade: '5-sinf',
      //   pupilquantity: 2,
      //   pupil: "Dadamirzayev Xurshidbek Davron o'g'li, Ismoilov Shohjahon Zuxriddin o'g'li",
      //   status: 1,
      // },
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
      array:[],
      pupils:"",
      pupilsn:'',
      pupilsm:'',
      docnumber:'',
      docdate:'',
      finyear:'',
      schoolgrade:'',
       status: {
        1: 'Tasdiqlangan',
        2: 'Актив',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      statusColor,
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
      return (this.filter.PageNumber - 1) * this.filter.PageLimit + 1
    },
    lastNumber() {
      if (this.filter.totalRows < this.filter.PageLimit) {
        return this.filter.totalRows
      } else {
        if (this.filter.PageNumber * this.filter.PageLimit > this.filter.totalRows) {
          return this.filter.totalRows
        } else {
          return this.filter.PageNumber * this.filter.PageLimit
        }
      }
    },
  },
  created() {
    this.array = JSON.parse(localStorage.getItem('array'))
    // this.pupils = localStorage.getItem('surname'),
    // this.pupilsm = localStorage.getItem('familyname')
    // this.pupilsn = localStorage.getItem('name')
    // this.docnumber = localStorage.getItem('docnumber')
    // this.docdate = localStorage.getItem('docdate')
    // this.finyear = localStorage.getItem('finyear')
    //  this.schoolgrade = localStorage.getItem('schoolgrade')
  },
  methods: {
    Edit() {
      console.log('Edit')
    },
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
