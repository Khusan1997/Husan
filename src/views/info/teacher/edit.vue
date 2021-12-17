<template>
  <div>
    <v-card class="ClassCard" style="padding: 2%">
      <v-row>
        <v-col class="text-center">
          <h3>{{ $t('O`qituvchi qabul qilish') }}</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select
            :items="items"
            :item-value="'state'"
            return-object
            single-line
            item-text="state"
            v-model="search"
            label="Hujjat turi"
            dense
            outlined
          >
            <template v-slot:item="{ item }">
              {{ item.state }}
            </template>
            <template v-slot:selection="{ item }">
              {{ item.state }}
            </template>
            ></v-select
          >
        </v-col>
        <v-col>
          <v-text-field dense label="Seriya" outlined></v-text-field>
          <!-- <v-select
            v-model="search"
            :items="seriya"
            :reduce="item => item"
            item-text="name"
            label="Seriya"
            dense
            outlined
            return-object
            single-line
          ></v-select> -->
          <!-- <b-form-select @input="info" v-model="search" :options="seriya"></b-form-select> -->
        </v-col>
        <v-col>
          <!-- <b-form-input ></b-form-input> -->
          <v-text-field dense label="Raqam" outlined v-model="filter.docnumber"></v-text-field>
          <!-- <b-form-input v-model="filter.docnumber"></b-form-input> -->
        </v-col>
        <v-col>
          <b-form-datepicker
            style="min-height: 40px"
            class="mt-0 pt-0"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
            id="example-datepicker"
            placeholder="Tu`gilgan kuni"
            autocomplete="off"
          ></b-form-datepicker>
        </v-col>
        <v-col>
          <v-btn @click="show" color="primary"
            ><v-icon>{{ icons.mdiMagnify }}</v-icon
            >Qidirish</v-btn
          >
        </v-col>
      </v-row>
      <div></div>
      <div>
        <v-card class="ClassCard"></v-card>
      </div>
      <div>
        <v-row>
          <v-col>
            <v-row>
              <v-col>
                <v-text-field dense label="Familyasi" v-model="local.surname" outlined></v-text-field>
              </v-col>

              <v-col>
                <!-- <b-form-input v-model="info.name"></b-form-input> -->
                <v-text-field dense label="Ismi" v-model="local.name" outlined></v-text-field>
              </v-col>
              <v-col>
                <v-text-field dense label="Otasining ismi" v-model="local.familyname" outlined></v-text-field>
              </v-col>
              <v-col>
                <!-- <b-form-datepicker style="min-height:40px" v-model="datebirth"  class="mt-0 pt-0" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" id="example-datepicker2"  placeholder="Tu`gilgan kuni" autocomplete="off" ></b-form-datepicker> -->
                <v-text-field dense label="Tug`ilgan sanasi" v-model="local.datebirth" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field dense label="Jinsi" v-model="local.gender" outlined></v-text-field>
              </v-col>
              <v-col>
                <v-text-field dense label="Millati" v-model="local.millati" outlined></v-text-field>
              </v-col>
              <v-col>
                <v-text-field dense label="Fuqaroligi" v-model="local.fuqaroligi" outlined></v-text-field>
              </v-col>
              <v-col>
                <v-text-field dense label="INN" v-model="local.inn" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field dense label="JSHSHIR raqami" v-model="local.jshshir" outlined></v-text-field>
              </v-col>
              <v-col>
                <v-text-field dense label="Tug'ilgan viloyat" v-model="local.viloyat" outlined></v-text-field>
              </v-col>
              <v-col>
                <v-text-field dense label="Tug'ilgan tuman" v-model="local.tuman" outlined></v-text-field>
              </v-col>
              <v-col>
                <v-text-field dense label="Telefon raqam kiritng" v-model="local.telefon" outlined></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field dense label="Passport berilgan sana" v-model="local.berilanSana" outlined></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  dense
                  label="Passport amal qilish muddati"
                  :value="local.amalQilishMuddati"
                  outlined
                ></v-text-field>
              </v-col>
              <v-col></v-col>
              <v-col></v-col>
            </v-row>
            <v-card class="ClassCard">
            </v-card>
            <v-row>
                <v-col>
                  <v-text-field dense label="Hujjat raqami" v-model="local.docnumber" outlined></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field dense label="Sana" v-model="local.docdate" outlined></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field dense label="O'quv yili" v-model="local.finyear" outlined></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field dense label="Fan" v-model="local.schoolgrade" outlined></v-text-field>
                </v-col>
              </v-row>
          </v-col>
        </v-row>
      </div>
      <v-row>
        <v-col class="text-right">
          <v-btn class="mr-2" color="#FD001E"
            ><span style="color: #fff" @click="$router.push({ name: 'teacher' })"
              ><v-icon>{{ icons.mdiArrowLeft }}</v-icon
              >Orqaga</span
            ></v-btn
          >
          <v-btn @click="SaveInfo" color="success"
            ><v-icon>{{ icons.mdiCheck }}</v-icon
            >Saqlash</v-btn
          >
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
  mdiCheck,
  mdiArrowLeft,
} from '@mdi/js'
export default {
  data() {
    return {
      value: '',
      formatted: '',
      selected: '',
      items: [
        { id: 1, state: 'Tug`ilganlik tog`risida guvohnoma', abbr: '1' },
        { id: 2, state: 'Passport', abbr: '2' },
        { id: 3, state: 'Fuqaroligi bo`lmagan shaxsga beriladigan hujjat', abbr: '3' },
        { id: 4, state: 'Chet el fuqarosi', abbr: '4' },
        { id: 5, state: 'ID-karta', abbr: '5' },
      ],
      seriya: [
        { id: 1, name: 'I-QQ' },
        { id: 2, name: 'I-QD' },
        { id: 3, name: 'III-NV' },
        { id: 4, name: 'I-TV' },
        { id: 5, name: 'I-TN' },
        { id: 6, name: 'I-TS' },
      ],
      search: {},
      filter: {
        docnumber: '',
      },
      objectArray:{},
      array2: [],
      local: {
        surname: '',
        name: '',
        familyname: '',
        datebirth: '',
        gender: '',
        millati: '',
        fuqaroligi: '',
        inn: '',
        jshshir: '',
        viloyat: '',
        tuman: '',
        berilanSana: '',
        amalQilishMuddati: '',
        telefon: '',
        docnumber: '',
        docdate: '',
        finyear: '',
        schoolgrade: '',
      },

      icons: {
        mdiMagnify,
        mdiPlus,
        mdiDelete,
        mdiPencil,
        mdiLockOpenOutline,
        mdiStarOutline,
        mdiAccountOutline,
        mdiCheck,
        mdiArrowLeft,
      },
    }
  },

  created() {},
  methods: {
    show() {
      // if (this.filter.docnumber == '9220671') {

      //   this.local.surname = 'Javlonova'
      //   this.local.name = 'Gulmira'
      //     this.local.familyname = 'Baxtiyor qizi'
      //     this.local.datebirth = '26.01.2002'
      //     this.local.gender = 'Ayol'
      //     this.local.millati = 'O`zbek'
      //     this.local.fuqaroligi = 'O`zbekiston'
      //     this.local.inn = '597686618'
      //     this.local.jshshir = '30124523800015'
      //     this.local.viloyat = 'Sirdayo'
      //     this.local.tuman = 'Sayxunobod'
      //     this.local.berilanSana = '04.04.2018'
      //     this.local.amalQilishMuddati = '04.04.2028'
      // }
      var self = this
if(self.filter.docnumber =='7388012'){
        self.local.surname='OCHILOVA'
        self.local.name= 'GULNOZA',
        self.local.familyname = 'HOSHIMOVNA',
        self.local.datebirth ='21.10.1981'
        self.local.gender = 'Ayol',
        self.local.millati ='O`ZBEK',
        self.local.fuqaroligi='O`ZBEKISTON',
        self.local.inn = '545848583',
        self.local.jshshir = '38124522465419',
        self.local.viloyat = 'BUXORO VILOYATI',
        self.local.tuman = 'ROMITAN TUMANI',
        self.local.berilanSana="30.10.2014",
        self.local.amalQilishMuddati= '29.10.2024'
      }
if(self.filter.docnumber =='5704752'){
        self.local.surname='XUDOYBERDIYEV'
        self.local.name= 'SHUXRAT',
        self.local.familyname = 'XIDIROVICH',
        self.local.datebirth ='15.11.1981'
        self.local.gender = 'Erkak',
        self.local.millati ='O`ZBEK',
        self.local.fuqaroligi='O`ZBEKISTON',
        self.local.inn = '524560844',
        self.local.jshshir = '27125623886515',
        self.local.viloyat = 'JIZZAX VILOYATI',
        self.local.tuman = 'DO’STLIK TUMANI',
        self.local.berilanSana="11.06.2014",
        self.local.amalQilishMuddati= '10.06.2024'
      }


if(self.filter.docnumber =='3452073'){
        self.local.surname='KAPADZE'
        self.local.name= 'TIMUR',
        self.local.familyname = 'TOXIROVICH',
        self.local.datebirth ='05.09.1981'
        self.local.gender = 'Erkak',
        self.local.millati ='O`ZBEK',
        self.local.fuqaroligi='O`ZBEKISTON',
        self.local.inn = '494121430',
        self.local.jshshir = '98124523508015',
        self.local.viloyat = 'TOSHKENT SHAHAR',
        self.local.tuman = 'YAKKASAROY TUMANI',
        self.local.berilanSana="18.03.2016",
        self.local.amalQilishMuddati= '17.03.2026'
      }
if(self.filter.docnumber =='0205051'){
        self.local.surname='XUDOYQULOV'
        self.local.name= 'UTKIR',
        self.local.familyname = 'XOLBOYEVICH',
        self.local.datebirth ='19.08.1980'
        self.local.gender = 'Erkak',
        self.local.millati ='O`ZBEK',
        self.local.fuqaroligi='O`ZBEKISTON',
        self.local.inn = '573634694',
        self.local.jshshir = '26124693808915',
        self.local.viloyat = 'SIRDARYO VILOYATI',
        self.local.tuman = 'QUMQO`RG`ON',
        self.local.berilanSana="16.11.2018",
        self.local.amalQilishMuddati = '16.11.2028'
      }


if(self.filter.docnumber =='1392245'){
        self.local.surname='XAMRAYEV'
        self.local.name= 'OLIMJON',
        self.local.familyname = 'PULOTOVICH',
        self.local.datebirth ='02.01.1977'
        self.local.gender = 'Erkak',
        self.local.millati ='O`ZBEK',
        self.local.fuqaroligi='O`ZBEKISTON',
        self.local.inn = '510470616',
        self.local.jshshir = '48124523826312',
        self.local.viloyat = 'BUXORO VILOYATI',
        self.local.tuman = 'KOGON SHAHAR',
        self.local.berilanSana="07.10.2015",
        self.local.amalQilishMuddati= '07.10.2025'
      }
if(self.filter.docnumber ==' 4675109'){
        self.local.surname='ERGASHOV'
        self.local.name= 'ISMOIL',
        self.local.familyname = 'TO`RAQULOVICH',
        self.local.datebirth ='02.01.1979'
        self.local.gender = 'Erkak',
        self.local.millati ='O`ZBEK',
        self.local.fuqaroligi='O`ZBEKISTON',
        self.local.inn = '564919287',
        self.local.jshshir = '56124983805214',
        self.local.viloyat = 'BUXORO VILOYATI',
        self.local.tuman = 'QORAKO`L TUMAN',
        self.local.berilanSana="10.08.2016",
        self.local.amalQilishMuddati= '10.08.2026'
      }


if(self.filter.docnumber =='0191676'){
        self.local.surname='MAMBETBETMURATOV'
        self.local.name= 'ORINBAY',
        self.local.familyname = 'AYAPBERGENOVICH',
        self.local.datebirth ='12.08.1976'
        self.local.gender = 'Erkak',
        self.local.millati ='O`ZBEK',
        self.local.fuqaroligi='O`ZBEKISTON',
        self.local.inn = '578680477',
        self.local.jshshir = '30521523803218',
        self.local.viloyat = 'QORAQALPAG`ISTON RESPUBLIKASI',
        self.local.tuman = 'KEGEYLI TUMANI',
        self.local.berilanSana="13.04.2014",
        self.local.amalQilishMuddati= '13.04.2024'
      }

if(self.filter.docnumber =='8135162'){
        self.local.surname='MIRALIYEV'
        self.local.name= 'JASUR',
        self.local.familyname = 'MIRQODIROVICH',
        self.local.datebirth ='20.10.1979'
        self.local.gender = 'Erkak',
        self.local.millati ='O`ZBEK',
        self.local.fuqaroligi='O`ZBEKISTON',
        self.local.inn = '459182174',
        self.local.jshshir = '45124523823117',
        self.local.viloyat = 'TOSHKENT VILOYATI',
        self.local.tuman = 'PARKENT TUMAN',
        self.local.berilanSana="19.11.2017",
        self.local.amalQilishMuddati= '19.11.2027'
      }

if(self.filter.docnumber =='3976406'){
        self.local.surname='POZDEYEVA'
        self.local.name= 'TATYANA',
        self.local.familyname = 'VLADIMIROVNA',
        self.local.datebirth ='01.11.1976'
        self.local.gender = 'Ayol',
        self.local.millati ='РУС',
        self.local.fuqaroligi='O`ZBEKISTON',
        self.local.inn = '472236948',
        self.local.jshshir = '32124523823519',
        self.local.viloyat = 'TOSHKENT SHAHRI',
        self.local.tuman = 'CHILONZOR TUMAN',
        self.local.berilanSana="18.01.2014",
        self.local.amalQilishMuddati= '18.01.2024'
      }

if(self.filter.docnumber =='5399166'){
        self.local.surname='MAMADALIYEV'
        self.local.name= 'ISLOMBEK',
        self.local.familyname = 'IBRAGIMOVICH',
        self.local.datebirth ='12.12.1981'
        self.local.gender = 'Erkak',
        self.local.millati ='O`ZBEK',
        self.local.fuqaroligi='O`ZBEKISTON',
        self.local.inn = '542836688',
        self.local.jshshir = '40124523402416',
        self.local.viloyat = 'ANDIJON VILOYATI',
        self.local.tuman = 'MARHAMAT TUMANI',
        self.local.berilanSana="19.05.2014",
        self.local.amalQilishMuddati= '19.05.2024'
      }

if(self.filter.docnumber =='5086028'){
        self.local.surname='XAYRIDDINOV'
        self.local.name= 'RUZIBOY',
        self.local.familyname = 'BURONOVICH',
        self.local.datebirth ='18.07.1981'
        self.local.gender = 'Erkak',
        self.local.millati ='O`ZBEK',
        self.local.fuqaroligi='O`ZBEKISTON',
        self.local.inn = '454038442',
        self.local.jshshir = '40124523402416',
        self.local.viloyat = 'SIRDARYO VILOYATI',
        self.local.tuman = 'SIRDARYO TUMANI',
        self.local.berilanSana="11.04.2014",
        self.local.amalQilishMuddati= '11.04.2024'
      }
    },
    SaveInfo() {
      this.array2.push(this.local)
      localStorage.setItem('array2', JSON.stringify(this.array2))
      // localStorage.setItem('surname', this.surname)
      // localStorage.setItem('familyname', this.familyname)
      // localStorage.setItem('name', this.name)
      // localStorage.setItem('docdate', this.docdate)
      // localStorage.setItem('docnumber',this.docnumber)
      // localStorage.setItem('finyear',this.finyear)
      // localStorage.setItem('schoolgrade',this.schoolgrade)
      //  if(self.surname ==''){

      this.$router.push({ name: 'teacher' })
      //  }
    },
    onContext(ctx) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted = ctx.selectedFormatted
      // The following will be an empty string until a valid date is entered
      this.selected = ctx.selectedYMD
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
