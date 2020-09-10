<template>
  <!-- Default form register -->
  <form  @submit.prevent="getToken()">
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
            <p class="h4 text-center mb-3">Recuperação de senha</p>
            <p class="h6 text-center mb-3">Digite o endereço cadastrado e enviaremos um token para validação.</p>
            <label for="email" class="grey-text">Email</label>
            <input type="email" id="email" class="form-control" @input="usuario.email = $event.target.value" :value="usuario.email"/>
            <div class="text-center mt-4" id="btn-token">
                <button class="btn btn-unique" type="button" @click="getToken()" >Receber token</button>
            </div>
            <div style="display:none;" id="reset">
                <label for="senha" class="grey-text">Token</label>
                <input type="password" id="token" class="form-control" @input="usuario.token = $event.target.value" :value="usuario.token"/>
                <label for="senha" class="grey-text">Nova Senha</label>
                <input type="password" id="senha" class="form-control" @input="usuario.senha = $event.target.value" :value="usuario.senha"/>
                <label for="confSenha" class="grey-text">Confirmação de senha</label>
                <input type="password" id="confSenha" class="form-control" @input="usuario.confSenha = $event.target.value" :value="usuario.confSenha"/>
                <button class="btn btn-unique" type="button" @click="resetPassword()" id="btn-reset">Alterar Senha</button>
            </div> 
            <router-link to="/">
                 <v-alert
                id="success"
                dense
                text
                type="success"
                style="display: none;"
                >
                   Senha alterada com sucesso. Faça login novamente.
                </v-alert>
            </router-link>
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
        getToken() {
            if(this.usuario.email === ''){
                this.retorno.erro = true;
                this.retorno.msg = 'Email is empty';
                return;
            }
            console.log(this.usuario)
            this.showLoader = true;

            this.$http.post(
                'auth/forgot_password', 
                this.usuario
            )
            .then ((res)=>  {
                console.log(res);
                document.getElementById("btn-token").style.display = "none";
                document.getElementById("reset").style.display = "";
                document.getElementById("email").readOnly = true;
                this.showLoader = false;
            })
            .catch ((error)=> {
                this.retorno.erro = true;
                this.retorno.msg = error.body.error;
                this.showLoader = false;
            })
        },
        resetPassword(){
            this.$http.post(
                'auth/reset_password', 
                this.usuario
            )
            .then ((res)=>  {
                console.log(res);
                document.getElementById("reset").style.display = "none";
                document.getElementById("success").style.display = "";
                document.getElementById("btn-reset").style.display = "none";
            })
            .catch ((error)=> {
                this.retorno.erro = true;
                this.retorno.msg = error.body.error;
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

    #success {
        color:green;
        margin-top: 30px;
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