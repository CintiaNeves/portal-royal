<template>
  <!-- Default form register -->
  <form @submit.prevent="cadastrar()">
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
            <p class="h4 text-center mb-3">Cadastre-se</p>
            <label for="cpf" class="grey-text">CPF</label>
            <input type="text" id="cpf" class="form-control" v-model="usuario.cpf"/>

            <label for="email" class="grey-text">Email</label>
            <input type="email" id="email" class="form-control" @input="usuario.email = $event.target.value" :value="usuario.email"/>

            <label for="senha" class="grey-text">Senha</label>
            <input type="password" id="senha" class="form-control" @input="usuario.senha = $event.target.value" :value="usuario.senha"/>

            <label for="confSenha" class="grey-text">Confirmação de senha</label>
            <input type="password" id="confSenha" class="form-control" @input="usuario.confSenha = $event.target.value" :value="usuario.confSenha"/>

            <div class="text-center mt-4">
                <button class="btn btn-unique" type="submit">Cadastrar</button>
            </div>
            <router-link to="/"><span>Login</span></router-link>
        </div>
    </div> 
    <div v-show="showLoader" class="text-center" id="loader">
        <v-progress-circular
        indeterminate
        color="primary"
        size="50"
        width="7"
        ></v-progress-circular>
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
            },
            showLoader : false,
        }
    },
    methods: {
        cadastrar() {

             if(this.usuario.cpf === ''){
                this.retorno.erro = true;
                this.retorno.msg = 'cpf is empty';
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

            if(this.usuario.confSenha === ''){
                this.retorno.erro = true;
                this.retorno.msg = 'conf senha is empty';
                return;
            }
            this.showLoader = true;
            this.$http.post(
                'auth/register/', 
                this.usuario
            )
            .then ((res)=>  {
                let token = `Bearer ${res.body.token}`;
                localStorage.setItem('token', token);
                this.$router.push({ name: 'comissao'})
                this.showLoader = false;
            })
            .catch ((error)=> {
                this.retorno.erro = true;
                this.retorno.msg = error.body.error;
                this.showLoader = false;
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

    #loader {
        top: 0px;
        width: 100%;
        height: 100%;
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0,0.3);
    }
 </style>