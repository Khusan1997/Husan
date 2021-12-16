<template>
  <div>
    <v-card class="ClassCard" style="padding: 2%">
      <v-row>
        <v-col class="text-center">
          <h3>{{ $t('Sinf') }}</h3>
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
          <!-- <v-btn color="primary"
            ><v-icon>{{ icons.mdiPlus }}</v-icon> {{ $t('create') }}
          </v-btn> -->
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
                  <th class="text-center text-uppercase">{{ $t('Tartib raqam') }}</th>
                  <th class="text-center text-uppercase">{{ $t('Qisqa nomlanish') }}</th>
                  <th class="text-center text-uppercase">{{ $t("To'liq nomlanish") }}</th>
                  <th class="text-center text-uppercase">{{ $t('Sinf turi') }}</th>
                  <th class="text-center text-uppercase">{{ $t('Holati') }}</th>
                  <!-- <th class="text-center text-uppercase">{{$t('pupil')}}</th>
                  <th class="text-center text-uppercase">{{$t('actions')}}</th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.dessert">
                  <td class="text-center">
                    {{ item.id }}
                  </td>
                  <td class="text-center">
                    {{ item.docnumber }}
                  </td>
                  <td class="text-center">
                    {{ item.shortname }}
                  </td>
                  <td class="text-center">
                    {{ item.fullname }}
                  </td>
                  <td class="text-center">
                    {{ item.classtype }}
                  </td>
                  <td class="text-center">
                    <v-chip small :color="statusColor[status[item.status]]" class="font-weight-medium">
                      {{ status[item.status] }}
                    </v-chip>
                  </td>
                  <!-- <td class="text-center"> <v-icon @click="Edit">{{ icons.mdiPencil }}</v-icon><v-icon @click="Delete">{{icons.mdiDelete }}</v-icon></td> -->
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <!-- <v-row>
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
           
                <div >
                  <v-pagination v-model="filter.PageNumber" :length="4" circle></v-pagination>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row> -->
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
    const statusColor = {
      /* eslint-disable key-spacing */
      Current: 'primary',
      Актив: 'success',
      Rejected: 'error',
      Resigned: 'warning',
      Applied: 'info',
      /* eslint-enable key-spacing */
    }
    const desserts = [
      {
        id: 1,
        docnumber: '001',
        shortname: '1-sinf',
        fullname: '1-sinf',
        classtype: "Boshlang'ich ta'lim",
        status: 2,
      },
       {
        id: 2,
        docnumber: '002',
        shortname: '2-sinf',
        fullname: '2-sinf',
        classtype: "Boshlang'ich ta'lim",
        status: 2,
      },
       {
        id: 3,
        docnumber: '003',
        shortname: '3-sinf',
        fullname: '3-sinf',
        classtype: "Boshlang'ich ta'lim",
        status: 2,
      },
       {
        id: 4,
        docnumber: '004',
        shortname: '4-sinf',
        fullname: '4-sinf',
        classtype: "Boshlang'ich ta'lim",
        status: 2,
      },
       {
        id: 5,
        docnumber: '005',
        shortname: '5-sinf',
        fullname: '5-sinf',
        classtype: "Umumiy o'rata ta'lim",
        status: 2,
      },
       {
        id: 6,
        docnumber: '006',
        shortname: '6-sinf',
        fullname: '6-sinf',
         classtype: "Umumiy o'rata ta'lim",
        status: 2,
      },
       {
        id: 7,
        docnumber: '007',
        shortname: '7-sinf',
        fullname: '7-sinf',
        classtype: "Umumiy o'rata ta'lim",
        status: 2,
      },
       {
        id: 8,
        docnumber: '008',
        shortname: '8-sinf',
        fullname: '8-sinf',
        classtype: "Umumiy o'rata ta'lim",
        status: 2,
      },
       {
        id: 9,
        docnumber: '009',
        shortname: '9-sinf',
        fullname: '9-sinf',
        classtype: "Umumiy o'rata ta'lim",
        status: 2,
      },
       {
        id: 10,
        docnumber: '010',
        shortname: '10-sinf',
        fullname: '10-sinf',
       classtype: "Umumiy o'rata ta'lim",
        status: 2,
      },
       {
        id: 11,
        docnumber: '011',
        shortname: '11-sinf',
        fullname: '11-sinf',
        classtype: "Umumiy o'rata ta'lim",
        status: 2,
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
       status: {
        1: 'Current',
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
  created() {},
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
