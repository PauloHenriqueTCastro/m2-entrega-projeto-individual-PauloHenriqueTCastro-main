import { apiRequests } from "../../apiRequest.js";

class dashBoardUser {
    static editarInfo() {
        const bntEditar = document.getElementById('bntUser')
        const passwordEditar = document.getElementById('userPassWord')
        const emailEditar = document.getElementById('userEmail')
        const usernameEditar = document.getElementById('userUsername')
        bntEditar.addEventListener('click', event => {
            const data = {
                username: usernameEditar.value,
                email: emailEditar.value,
                password: passwordEditar.value
            }
            apiRequests.editarUserInfo(data)

        })
    }
    static async showEmpresaUser() {
        const userEmpresa = document.getElementById('userEmpresa')
        let empresa = await apiRequests.infoDepartamenUser()
        userEmpresa.innerText = `Empresa: ${empresa.name}`
    }

    static async showDepartament() {
        const userDepartament = document.getElementById('userDepart')
        let departamento = await apiRequests.userDepartament()
        // console.log(departamento[0])
        userDepartament.innerText = `Departamento: ${departamento[0].name}`
    }

    static async showUsers() {
        const userColegas = document.getElementById('userTodosFuncio')
        let departamento = await apiRequests.userDepartament()

        let users = departamento[0].users
        console.log(users)

        for (let i = 0; i < users.length; i++) {
            const li = document.createElement('li')
            const p = document.createElement('p')

            p.innerText = `${users[i].username}`
            li.append(p)
            userColegas.append(li)
        }
    }
}

dashBoardUser.editarInfo()
dashBoardUser.showEmpresaUser()
dashBoardUser.showDepartament()
dashBoardUser.showUsers()