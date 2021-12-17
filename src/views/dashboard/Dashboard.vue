<template>
  <!-- <v-row>
    <v-col
      cols="12"
      md="4"
    >
      <dashboard-congratulation-john></dashboard-congratulation-john>
    </v-col>
    <v-col
      cols="12"
      md="8"
    >
      <dashboard-statistics-card></dashboard-statistics-card>
    </v-col>

    <v-col
      cols="12"
      sm="6"
      md="4"
    >
      <dashboard-weekly-overview></dashboard-weekly-overview>
    </v-col>

    <v-col
      cols="12"
      md="4"
      sm="6"
    >
      <dashboard-card-total-earning></dashboard-card-total-earning>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <v-row class="match-height">
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-vertical
            :change="totalProfit.change"
            :color="totalProfit.color"
            :icon="totalProfit.icon"
            :statistics="totalProfit.statistics"
            :stat-title="totalProfit.statTitle"
            :subtitle="totalProfit.subtitle"
          ></statistics-card-vertical>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-vertical
            :change="totalSales.change"
            :color="totalSales.color"
            :icon="totalSales.icon"
            :statistics="totalSales.statistics"
            :stat-title="totalSales.statTitle"
            :subtitle="totalSales.subtitle"
          ></statistics-card-vertical>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-vertical
            :change="newProject.change"
            :color="newProject.color"
            :icon="newProject.icon"
            :statistics="newProject.statistics"
            :stat-title="newProject.statTitle"
            :subtitle="newProject.subtitle"
          ></statistics-card-vertical>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-vertical
            :change="salesQueries.change"
            :color="salesQueries.color"
            :icon="salesQueries.icon"
            :statistics="salesQueries.statistics"
            :stat-title="salesQueries.statTitle"
            :subtitle="salesQueries.subtitle"
          ></statistics-card-vertical>
        </v-col>
      </v-row>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <dashboard-card-sales-by-countries></dashboard-card-sales-by-countries>
    </v-col>
    <v-col
      cols="12"
      md="8"
    >
      <dashboard-card-deposit-and-withdraw></dashboard-card-deposit-and-withdraw>
    </v-col>
    <v-col cols="12">
      <dashboard-datatable></dashboard-datatable>
    </v-col>
  </v-row> -->
  <div>
    <v-row>
      <v-col cols="12" md="12">
        <div>
        <apexchart width="700" type="bar" :options="options1" :series="series1"></apexchart>
        </div>
      </v-col>
      
    </v-row>
    <v-row>
      <v-col>
        <div>
      <apexchart width="450" type="donut" :options="options" :series="series"></apexchart>
    </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiPoll, mdiLabelVariantOutline, mdiCurrencyUsd, mdiHelpCircleOutline } from '@mdi/js'
import StatisticsCardVertical from '@/components/statistics-card/StatisticsCardVertical.vue'

// demos
import DashboardCongratulationJohn from './DashboardCongratulationJohn.vue'
import DashboardStatisticsCard from './DashboardStatisticsCard.vue'
import DashboardCardTotalEarning from './DashboardCardTotalEarning.vue'
import DashboardCardDepositAndWithdraw from './DashboardCardDepositAndWithdraw.vue'
import DashboardCardSalesByCountries from './DashboardCardSalesByCountries.vue'
import DashboardWeeklyOverview from './DashboardWeeklyOverview.vue'
import DashboardDatatable from './DashboardDatatable.vue'
import VueApexCharts from 'vue-apexcharts'
export default {
  components: {
    StatisticsCardVertical,
    DashboardCongratulationJohn,
    DashboardStatisticsCard,
    DashboardCardTotalEarning,
    DashboardCardDepositAndWithdraw,
    DashboardCardSalesByCountries,
    DashboardWeeklyOverview,
    DashboardDatatable,
  },
  setup() {
    const totalProfit = {
      statTitle: 'Total Profit',
      icon: mdiPoll,
      color: 'success',
      subtitle: 'Weekly Project',
      statistics: '$25.6k',
      change: '+42%',
    }

    const totalSales = {
      statTitle: 'Refunds',
      icon: mdiCurrencyUsd,
      color: 'secondary',
      subtitle: 'Past Month',
      statistics: '$78',
      change: '-15%',
    }

    // vertical card options
    const newProject = {
      statTitle: 'New Project',
      icon: mdiLabelVariantOutline,
      color: 'primary',
      subtitle: 'Yearly Project',
      statistics: '862',
      change: '-18%',
    }

    const salesQueries = {
      statTitle: 'Sales Quries',
      icon: mdiHelpCircleOutline,
      color: 'warning',
      subtitle: 'Last week',
      statistics: '15',
      change: '-18%',
    }

    return {
      totalProfit,
      totalSales,
      newProject,
      salesQueries,
      options: {
         series: [44, 55, 13, 33],
  labels: ['Oltin', 'Kumush', 'Bronza', 'G`olib','Mag`lubiyat']
      },
      series: [44,55,41,17,15],
       options1: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998,1999,2000,2001,2002,2003,2004,2005]
        }
      },
      series1: [{
        name: 'Ma`lumot',
        data: [30, 40, 45, 50, 49, 60, 70, 75,78,83,85,88,91]
      }]
    }
  },
}
</script>
