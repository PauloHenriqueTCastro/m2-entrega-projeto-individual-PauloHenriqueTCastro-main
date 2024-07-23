export class apiRequests {
    static baseUrl = 'http://localhost:6278/';
    static token = localStorage.getItem("@User:token");
    static isAdm = localStorage.getItem("@User:isAdm");
    static headers = {
        "Content-Type": "application/json",
    }
    static headersAdm = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async login(body) {
        const userLogin = await fetch(`${this.baseUrl}auth/login/`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => {
                localStorage.setItem("@User:token", res.token)
                localStorage.setItem("@User:User_id", res.uuid)
                localStorage.setItem("@User:isAdm", res.is_admin)

                if (this.isAdm) {
                    window.location.replace('./../pages/dashBoardAdm.html')

                } else { window.location.replace('./../pages/dashBoardUser.html') }

            })
            .catch(err => console.log(err))

        return userLogin
    }

    static async cadastro(body) {
        const userCadastro = await fetch(`${this.baseUrl}auth/register/user`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        return userCadastro
    }

    static async empresaPorSetor(id) {
        const empresAlime = await fetch(`${this.baseUrl}companies/${id}`, {
            method: 'GET',
            headers: this.headersAdm,
        })
        const data = await empresAlime.json()
        return data
    }

    static async todasEmpresas() {
        const empresas = await fetch(`${this.baseUrl}companies`, {
            method: 'GET',
            headers: this.headers,
        })
        const data = await empresas.json()
        return data
    }

    static async mudarUserInfo(body) {
        const mudarInfo = await fetch(`${this.baseUrl}users`, {
            method: 'PATCH',
            headers: this.headersAdm,
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        return mudarInfo
    }

    static async listarAllUser() {
        const Allusers = await fetch(`${this.baseUrl}users`, {
            method: 'GET',
            headers: this.headersAdm,
        })
        const data = await Allusers.json()
        return data
    }

    static async criarEmpresa(body) {
        const criar = await fetch(`${this.baseUrl}companies`, {
            method: 'POST',
            headers: this.headersAdm,
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        return criar
    }

    static async renderSetores() {
        const setores = await fetch(`${this.baseUrl}sectors`, {
            method: 'GET',
            headers: this.headersAdm

        })
        const data = await setores.json()
        return data
    }

    static async criarDepartamento(body) {
        const criar = await fetch(`${this.baseUrl}departments`, {
            method: 'POST',
            headers: this.headersAdm,
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        return criar
    }

    static async renderDepartaEmpresa(id) {
        const departments = await fetch(`${this.baseUrl}departments/${id}`, {
            method: 'GET',
            headers: this.headersAdm
        })
        const data = await departments.json()
        return data
    }
    static async renderAllFuncionarios() {
        const Funcionarios = await fetch(`${this.baseUrl}users`, {
            method: 'GET',
            headers: this.headersAdm
        })
        const data = await Funcionarios.json()
        return data
    }
    static async editarInfoUser(id, body) {
        const editar = await fetch(`${this.baseUrl}admin/update_user/${id}`, {
            method: 'PATCH',
            headers: this.headersAdm,
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        return editar
    }
    static async deletarInfo(id) {
        const deletarInfo = await fetch(`${this.baseUrl}admin/delete_user/${id}`, {
            method: 'DELETE',
            headers: this.headersAdm
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        return deletarInfo
    }
    static async funcionariosSemEmpresa() {
        const Funcionarios = await fetch(`${this.baseUrl}admin/out_of_work`, {
            method: 'GET',
            headers: this.headersAdm
        })
        const data = await Funcionarios.json()
        return data
    }

    static async contratarUsuario(body) {
        const Contratar = await fetch(`${this.baseUrl}departments/hire/`, {
            method: "PATCH",
            headers: this.headersAdm,
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        return Contratar
    }
    static async editarDepartamento(body, id) {
        const editar = await fetch(`${this.baseUrl}departments/${id}`, {
            method: 'PATCH',
            headers: this.headersAdm,
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        return editar
    }
    static async deletarDepartamento(id) {
        const deletar = fetch(`${this.baseUrl}departments/${id}`, {
            method: 'DELETE',
            headers: this.headersAdm
        })
        const data = await deletar.json()
        return data
    }
    static async editarUserInfo(body) {
        const editar = await fetch(`${this.baseUrl}users`, {
            method: 'PATCH',
            headers: this.headersAdm,
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        return editar
    }
    static async infoDepartamenUser() {
        const pegarInfo = await fetch(`${this.baseUrl}users/departments`, {
            method: 'GET',
            headers: this.headersAdm,
        })
        const data = await pegarInfo.json()
        return data
    }
    static async userDepartament() {
        const departmento = await fetch(`${this.baseUrl}users/departments/coworkers`, {
            method: 'GET',
            headers: this.headersAdm,
        })
        const data = await departmento.json()
        return data
    }
    static async allDepartamen() {
        const all = await fetch(`${this.baseUrl}departments`, {
            method: 'GET',
            headers: this.headersAdm,
        })
        const data = await all.json()
        return data
    }
    static async demitirFuncionario(id) {
        const demitir = await fetch(`${this.baseUrl}departments/dismiss/${id}`, {
            method: 'PATCH',
            headers: this.headersAdm,
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
        return demitir
    }
}   