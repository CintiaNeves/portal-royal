<template>
  <!-- Default form register -->
  <form  @submit.prevent="authenticar()">
    <div class="container"> 
        <div class="box">
            <v-alert
                v-if="retorno.erro"
                dense
                outlined
                type="error"
                color="red"
            >
                <span>{{ retorno.msg }}</span>
            </v-alert>
            <p class="h4 text-center mb-3">Login</p>
           <label for="email" class="grey-text">Email</label>
            <input type="email" id="email" class="form-control" @input="usuario.email = $event.target.value" :value="usuario.email"/>

            <label for="senha" class="grey-text">Senha</label>
            <input type="password" id="senha" class="form-control" @input="usuario.senha = $event.target.value" :value="usuario.senha"/>
            <router-link to="forgot"><span>Esqueceu a senha?</span></router-link>
            <div class="text-center mt-4">
                <button class="btn btn-unique" type="button" @click="authenticar()" >Entrar</button>
            </div>
            <router-link to="register"><span>Criar conta</span></router-link>
        </div>
    </div>   
  </form>
  <!-- Default form register -->
</template>

<script>
import Usuario from '../domain/Usuario.js';
export default {
    data() {
        return {
            usuario: new Usuario(),
             retorno: {
                erro : false,
                msg : '',
            }
        }
    },
    methods: {
        authenticar() {

            if(this.usuario.email === '' && this.usuario.senha === ''){
                this.retorno.erro = true;
                this.retorno.msg = 'credentials is empty';
                return;
            }

             if(this.usuario.email === ''){
                this.retorno.erro = true;
                this.retorno.msg = 'email is empty';
                return;
            }

            if(this.usuario.senha === ''){
                this.retorno.erro = true;
                this.retorno.msg = 'senha is empty';
                return;
            }
            this.$http.post(
                'auth/authenticate/', 
                this.usuario
            )
            .then ((res)=>  {
                let token = `Bearer ${res.body.token}`;
                localStorage.setItem('token', token);
                this.$router.push({ name: 'comissao'})
            })
            .catch ((error)=> {
                this.retorno.erro = true;
                this.retorno.msg = error.body.error;
                this.usuario.senha = '';
            })
        }
    }
}

</script>
<style scoped>
    p{
        margin-bottom: 0px!important;
    }
    label {
        margin: 0px;
        margin-top: .5rem;
    }
    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 90px;
    }
    .box{
        padding: 30px;
        background-color: aliceblue;
    }
    .btn-unique {
        color: #fff;
        background-color: #131F43!important;
    }

    .theme--light.v-sheet {
        color: red;
    }
    span {
        margin-left: 10px;
    }
 </style>