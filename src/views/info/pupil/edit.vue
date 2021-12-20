<template>
  <div>
    <v-card class="ClassCard" style="padding: 2%">
      <v-row>
        <v-col class="text-center">
          <h3>{{ $t('O`quvchi qabul qilish') }}</h3>
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
          <v-text-field dense label="Seriya" v-model="filter.Seria" outlined></v-text-field>
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
          <v-text-field dense label="Raqam"  v-model="filter.Number" outlined ></v-text-field>
          <!-- <b-form-input v-model="filter.docnumber"></b-form-input> -->
        </v-col>
        <v-col>
          <!-- <b-form-datepicker
            style="min-height: 40px"
            class="mt-0 pt-0"
            v-model="filter.DateOfBirth"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
            id="example-datepicker"
            placeholder="Tu`gilgan kuni"
            autocomplete="off"
          ></b-form-datepicker> -->
          <v-text-field dense label="date"  v-model="filter.DateOfBirth" outlined ></v-text-field>
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
                  <v-text-field dense label="Maktab sinflari" v-model="local.schoolgrade" outlined></v-text-field>
                </v-col>
              </v-row>
          </v-col>
        </v-row>
      </div>
      <v-row>
        <v-col class="text-right">
          <v-btn class="mr-2" color="#FD001E"
            ><span style="color: #fff" @click="$router.push({ name: 'pupil' })"
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
import OtherService from "@/services/other.service";
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
      filter : {
        Seria : "",
        Number : 0,
        DateOfBirth : "",
      },
      array: [],
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

  created() {
    OtherService.Get()
      .then((res) => {
        this.show = false;
        this.local = res.data;
      })
      .catch((error) => {
        this.$makeToast(error.response.data.error, "danger");
      });
  },
  methods: {
    show() {
       OtherService.Post(this.filter)
      .then((res) => {
        this.show = false;
        this.local = res.data;
      })
      .catch((error) => {
        this.$makeToast(error.response.data.error, "danger");
      });
      var self = this
      if (self.filter.docnumber == '9220671') {
        self.local.surname = 'Javlonova'
        ;(self.local.name = 'Gulmira'), (self.local.familyname = 'Baxtiyor qizi'), (self.local.datebirth = '26.01.2002')
        ;(self.local.gender = 'Ayol'),
          (self.local.millati = 'O`zbek'),
          (self.local.fuqaroligi = 'O`zbekiston'),
          (self.local.inn = '597686618'),
          (self.local.jshshir = '30124523800015'),
          (self.local.viloyat = 'Sirdayo'),
          (self.local.tuman = 'Sayxunobod'),
          (self.local.berilanSana = '04.04.2018'),
          (self.local.amalQilishMuddati = '04.04.2028')
      }
      if (self.filter.docnumber == '9219586') {
        self.local.surname = ' Jahongirov'
        ;(self.local.name = ' Asilbek '),
          (self.local.familyname = ' Alisher o`g`li '),
          (self.local.datebirth = '06.03.2002')
        ;(self.local.gender = 'Erkak'),
          (self.local.millati = 'O`zbek'),
          (self.local.fuqaroligi = 'O`zbekiston'),
          (self.local.inn = '621289657'),
          (self.local.jshshir = '27125623886515'),
          (self.local.viloyat = 'Toshkent viloyati'),
          (self.local.tuman = 'Zangiota tumani'),
          (self.local.berilanSana = '01.04.2018'),
          (self.local.amalQilishMuddati = '01.04.2028')
      }

      if (self.filter.docnumber == '1380624') {
        self.local.surname = 'Sharopov'
        ;(self.local.name = 'Suhrobjon'),
          (self.local.familyname = 'Umidjonovich'),
          (self.local.datebirth = '08.06.2002')
        ;(self.local.gender = 'Erkak'),
          (self.local.millati = 'O`zbek'),
          (self.local.fuqaroligi = 'O`zbekiston'),
          (self.local.inn = '610999000'),
          (self.local.jshshir = '98124523508015'),
          (self.local.viloyat = 'Qashqadaryo'),
          (self.local.tuman = 'Qarshi shahar'),
          (self.local.berilanSana = '26.10.2018'),
          (self.local.amalQilishMuddati = '26.10.2028')
      }
      if (self.filter.docnumber == '9927004') {
        self.local.surname = 'To`ychiyeva'
        ;(self.local.name = 'Aziza'), (self.local.familyname = 'Zuxriddin qizi'), (self.local.datebirth = '13.06.2002')
        ;(self.local.gender = 'Ayol'),
          (self.local.millati = 'O`zbek'),
          (self.local.fuqaroligi = 'O`zbekiston'),
          (self.local.inn = '620736464'),
          (self.local.jshshir = '26124693808915'),
          (self.local.viloyat = 'Toshkent Shahri'),
          (self.local.tuman = 'Yunsobod'),
          (self.local.berilanSana = '17.06.2018'),
          (self.local.amalQilishMuddati = '17.06.2028')
      }

      if (self.filter.docnumber == '9292833') {
        self.local.surname = 'Abdujabborova'
        ;(self.local.name = 'Madina'), (self.local.familyname = ' Jo`raboy qizi'), (self.local.datebirth = '22.03.2002')
        ;(self.local.gender = 'Ayol'),
          (self.local.millati = 'O`zbek'),
          (self.local.fuqaroligi = 'O`zbekiston'),
          (self.local.inn = '620758929'),
          (self.local.jshshir = '48124523826312'),
          (self.local.viloyat = 'Sirdayo'),
          (self.local.tuman = 'Boyavut tumani'),
          (self.local.berilanSana = '11.04.2018'),
          (self.local.amalQilishMuddati = '11.04.2028')
      }
      if (self.filter.docnumber == ' 8974970') {
        self.local.surname = 'Akobirov'
        ;(self.local.name = 'Asror'), (self.local.familyname = 'Akbar o`g`li'), (self.local.datebirth = '05.03.2002')
        ;(self.local.gender = 'Erkak'),
          (self.local.millati = 'O`zbek'),
          (self.local.fuqaroligi = 'O`zbekiston'),
          (self.local.inn = '565577183'),
          (self.local.jshshir = '56124983805214'),
          (self.local.viloyat = 'Jizzax'),
          (self.local.tuman = 'Mirza cho`l tumani'),
          (self.local.berilanSana = '03.03.2018'),
          (self.local.amalQilishMuddati = '03.03.2028')
      }

      if (self.filter.docnumber == '9022513') {
        self.local.surname = 'Anarboyeva'
        ;(self.local.name = 'Iroda'), (self.local.familyname = 'Baxodir qizi'), (self.local.datebirth = '03.03.2002')
        ;(self.gender = 'Ayol'),
          (self.local.millati = 'O`zbek'),
          (self.local.fuqaroligi = 'O`zbekiston'),
          (self.local.inn = '508613990'),
          (self.local.jshshir = '30521523803218'),
          (self.local.viloyat = 'Toshkent viloyati'),
          (self.local.tuman = 'Zangiota tumani'),
          (self.local.berilanSana = '10.03.2018'),
          (self.local.amalQilishMuddati = '10.03.2028')
      }

      if (self.filter.docnumber == '1218979') {
        self.local.surname = 'Abduraximov'
        ;(self.local.name = 'Xurshid'), (self.local.familyname = 'Anvar o`g`li'), (self.local.datebirth = '11.08.2002')
        ;(self.local.gender = 'Erkak'),
          (self.local.millati = 'O`zbek'),
          (self.local.fuqaroligi = 'O`zbekiston'),
          (self.local.inn = '605911998'),
          (self.local.jshshir = '45124523823117'),
          (self.local.viloyat = 'Buxoro viloyati'),
          (self.local.tuman = 'Jondor tumani'),
          (self.local.berilanSana = '09.10.2018'),
          (self.local.amalQilishMuddati = '09.10.2028')
      }

      if (self.filter.docnumber == '1448073') {
        self.local.surname = 'Sayfutdinova'
        ;(self.local.name = 'Madinabonu'),
          (self.local.familyname = 'Ravshanovna'),
          (self.local.datebirth = '21.07.2002')
        ;(self.local.gender = 'Ayol'),
          (self.local.millati = 'O`zbek'),
          (self.local.fuqaroligi = 'O`zbekiston'),
          (self.local.inn = '618215914'),
          (self.local.jshshir = '32124523823519'),
          (self.local.viloyat = 'Farg’ona viloyati'),
          (self.local.tuman = 'Qo’qon shaxar'),
          (self.local.berilanSana = '02.11.2018'),
          (self.local.amalQilishMuddati = '02.11.2028')
      }

      if (self.filter.docnumber == '0872640') {
        self.local.surname = 'Xabibullayeva'
        ;(self.local.name = 'Sarvinoz'), (self.local.familyname = 'Bunyod qizi'), (self.local.datebirth = '02.05.2002')
        ;(self.local.gender = 'Ayol'),
          (self.local.millati = 'O`zbek'),
          (self.local.fuqaroligi = 'O`zbekiston'),
          (self.local.inn = '616803936'),
          (self.local.jshshir = '40124523402416'),
          (self.local.viloyat = 'Toshkent viloyati'),
          (self.local.tuman = 'Bo’ka tumani'),
          (self.local.berilanSana = '28.08.2018'),
          (self.local.amalQilishMuddati = '28.08.2028')
      }
    },
    SaveInfo() {
      this.array.push(this.local)
      localStorage.setItem('array',JSON.stringify(this.array))
      // localStorage.setItem('surname', this.surname)
      // localStorage.setItem('familyname', this.familyname)
      // localStorage.setItem('name', this.name)
      // localStorage.setItem('docdate', this.docdate)
      // localStorage.setItem('docnumber',this.docnumber)
      // localStorage.setItem('finyear',this.finyear)
      // localStorage.setItem('schoolgrade',this.schoolgrade)
      //  if(self.surname ==''){

      this.$router.push({ name: 'pupil' })
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
