import { apiRequests } from "../../apiRequest.js";

class RegisPage {
    static renderRegistro() {
        const inputSenha = document.getElementById('senha')
        const inputEmail = document.getElementById('email')
        const inputNome = document.getElementById('nome')
        const inputTrabalho = document.getElementById('trabalho')
        const bnt = document.getElementById('bntRegis')

        bnt.addEventListener('click', async event => {
            const data = {
                password: inputSenha.value,
                email: inputEmail.value,
                professional_level: inputTrabalho.value,
                username: inputNome.value,
            }
            await apiRequests.cadastro(data)
        })
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

RegisPage.empresaSetor()

RegisPage.renderRegistro()
