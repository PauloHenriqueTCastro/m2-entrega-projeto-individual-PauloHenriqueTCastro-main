import { apiRequests } from "../../apiRequest.js";

class IndexPage {
    static renderLogin() {
        // const token = localStorage.getItem('@User:token');

        // if (token) { window.location.assign('src/pages/homepage.html') }

        const inputEmail = document.getElementById('inputEmail');
        const inputSenha = document.getElementById('inputSenha');
        const bnt = document.getElementById('btnLogin');

        bnt.addEventListener('click', async event => {
            console.log('oi')
            const data = {
                email: inputEmail.value,
                password: inputSenha.value,
            }
            await apiRequests.login(data)
        })
    }

    static cardEmpresas(body) {
        const li = document.createElement('li')
        const h4 = document.createElement('h4')
        const span = document.createElement('span')
        let span2 = document.createElement('span')

        li.classList.add('cardEmpresas')
        h4.classList.add('empresaH4')

        h4.innerText = body.name
        span.innerText = `Horaio de Funcionamento: ${body.opening_hours}`
        span2 = body.description

        li.append(h4, span, span2)

        return li
    }

    static empresaSetor() {
        const select = document.getElementById('selectSetores')
        const selectEmpresas = document.getElementById('selectEmpresas')
        const btn = document.getElementById('BtnProcurar')
        btn.addEventListener('click', async event => {
            selectEmpresas.innerHTML = ""
            let empresas = await apiRequests.empresaPorSetor(select.value)

            empresas.forEach(element => {
                const option = document.createElement('option')
                option.innerText = element.name
                selectEmpresas.append(option)
            });
        })
    }

}
IndexPage.renderLogin()

IndexPage.empresaSetor()