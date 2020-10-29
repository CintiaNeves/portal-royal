
<template>
  <div>
    <v-card
      color="grey lighten-4"
      flat
      tile
    >
      <v-toolbar dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title id="ola">Olá, <span class="name">{{ usuario.nome }} </span></v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon @click="logout()">
          <v-icon >mdi-logout-variant</v-icon>
          <label>Sair</label>
        </v-btn>
      </v-toolbar>
    </v-card>
    <div class="container">
      <div id="alert">
          <v-alert
          v-if="retorno.erro"
          dense
          outlined
          type="error"
          color="red"
          >
            <span>{{ retorno.msg }}</span>
          </v-alert>
        </div>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="10"
        class="elevation-1">
      </v-data-table>
    </div>
 </div>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Data da Venda',
            align: 'start',
            sortable: false,
            value: 'data',
          },
          { text: 'Número da Nota', value: 'nota' },
          { text: 'Tipo da comissão', value: 'tipo' },
          { text: 'Porcentagem', value: 'porcentagem' },
          { text: 'Valor', value: 'valor' },
        ],
        desserts: [],
        usuario: {},
        retorno:{
          erro : true,
          msg : '',
        },
      }
    },
    methods: {
      logout() {
        localStorage.removeItem('token');
        this.$router.push({ name: 'login'});
      },
    },
    async created(){
      this.$http.get('commission', {headers: {'Authorization': localStorage.getItem('token')}})
      .then ((res)=>  {
        const lista = res.body;
        for (var i = 0; i < lista.length; i++) {
          this.desserts.push({
          data: lista[i].DATA,
          nota: lista[i].NUNOTA,
          tipo: lista[i].TIPO,
          porcentagem: lista[i].PERCCOM,
          valor: lista[i].VALOR,
        })
      } 
        this.retorno.erro = false;
        this.usuario.nome = lista[0].NOME;
      })
      .catch ((error)=> {
        document.getElementById("ola").style.display = "none";
        this.retorno.erro = true;
        this.retorno.msg = error.body.error;
      })
      this.$http.get('commission/totais', {headers: {'Authorization': localStorage.getItem('token')}})
      .then ((res)=>  {
        const totais = res.body;
        console.log(totais[0]);
      })
      .catch ((error)=> {
        console.log(error);
      })
    },
  }
</script>

<style scoped>
  .container {
    width: 100%;
  }

  .name{
    font-size: 1.1rem;
  }

  #alert{
    display: flex; 
    color: red;
  }

  span {
    margin-left: 10px;
  }

  #ola{
    display: '';
  }
  
  label{
    margin-bottom: 0px;
    margin-left: 5px;
  }
</style>