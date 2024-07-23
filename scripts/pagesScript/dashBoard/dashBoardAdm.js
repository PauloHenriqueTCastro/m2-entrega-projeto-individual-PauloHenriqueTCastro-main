import { apiRequests } from "../../apiRequest.js"

class dashBoard {
    static listarSetoresCriarEmpresa(data) {
        const selectSecoes = document.getElementById('selectSecoes')

        data.forEach(element => {
            const option = document.createElement('option')

            option.innerText = element.description
            option.value = element.uuid

            selectSecoes.append(option)
        });

    }

    static listarEmpresas(data) {
        const selectSecoes = document.getElementById('selectEmpresas')

        data.forEach(element => {
            const option = document.createElement('option')

            option.innerText = element.name
            option.value = element.uuid

            selectSecoes.append(option)
        });
    }

    static listarEmpresas2(data) {
        const selectSecoes = document.getElementById('listarEmpreDerp')

        data.forEach(element => {
            const option = document.createElement('option')

            option.innerText = element.name
            option.value = element.uuid

            selectSecoes.append(option)
        });
    }
    static listarEmpresas3(data) {
        const selectSecoes = document.getElementById('selectEmpresas2')

        data.forEach(element => {
            const option = document.createElement('option')

            option.innerText = element.name
            option.value = element.uuid

            selectSecoes.append(option)
        });

    }
    static async derpEspeciEmpresa() {
        const selectEmpresa = document.getElementById('listarEmpreDerp')
        const bntProcurarDerp = document.getElementById('btnProcuraDerp')
        const selectDerpEspecifico = document.getElementById('listarDepartamentos')
        bntProcurarDerp.addEventListener('click', async event => {

            let departmentsEmpresa = await apiRequests.renderDepartaEmpresa(selectEmpresa.value)

            selectDerpEspecifico.innerHTML = ""

            console.log(departmentsEmpresa)
            departmentsEmpresa.forEach(element => {
                console.log(element)
                let option = document.createElement('option')
                option.id = element.uuid

                option.innerText = element.name
                option.value = element.description

                selectDerpEspecifico.append(option)
            });
        })
    }

    static async MostrarDepartamento() {
        const empresa = document.getElementById('empresaFuncionarioContratar')
        const bntProcuraeDerp = document.getElementById('procurarDepartamentos')
        const departments = document.getElementById('departamentoFuncionarioContratar')
        bntProcuraeDerp.addEventListener('click', async event => {
            let departmentsEmpresa = await apiRequests.renderDepartaEmpresa(empresa.value)
            console.log(departmentsEmpresa)
            departmentsEmpresa.forEach(element => {
                console.log(element)

                let option = document.createElement('option')

                option.innerText = element.name
                option.value = element.uuid

                departments.append(option)
            })
        })
    }

    static contratarFuncionario() {
        const bntContratar = document.getElementById('contratarFuncionario')
        const Funcionario = document.getElementById('funcionariosContratar')
        const departments = document.getElementById('departamentoFuncionarioContratar')
        bntContratar.addEventListener('click', async event => {
            const data = {
                user_uuid: Funcionario.value,
                department_uuid: departments.value,
            }
            await apiRequests.contratarUsuario(data)
        })

    }

    static mostrarDepartDescri() {
        const select = document.getElementById('listarDepartamentos')
        const bntMostrarDescri = document.getElementById('btbListarDerp')
        const pDescri = document.getElementById('descriDerp')

        bntMostrarDescri.addEventListener('click', async event => {
            console.log(select.value)
            console.log('oi')
            pDescri.innerText = `Descrição: ${select.value}`

        })
    }

    static MostrarDepartamentoEditarDeletar(data) {
        const select = document.getElementById('selectDepartamento')

        data.forEach(element => {
            console.log(element.uuid)
            const option = document.createElement('option')
            option.innerText = element.name
            option.value = element.uuid
            select.append(option)
        });
    }

    static editarDepart() {
        const select = document.getElementById('selectDepartamento')
        const btnEditar = document.getElementById('editarDepartamento')
        const input = document.getElementById('newIndoDepartamento')
        btnEditar.addEventListener('click', async event => {
            const data = {
                description: input.value
            }
            console.log(data)
            await apiRequests.editarDepartamento(data, select.value)
        })
    }
    static deletarDepart() {
        const selectDepartament = document.getElementById('selectDepartamento')
        const bntDeletar = document.getElementById('deletarDepartamento')

        bntDeletar.addEventListener('click', async event => {
            console.log(selectDepartament.value)
            await apiRequests.deletarDepartamento(selectDepartament.value)
        })
    }

    static listarSetores(data) {
        const select = document.getElementById('selectSetores')

        data.forEach(element => {
            const option = document.createElement('option')
            option.classList.add('pSetores')

            option.innerText = `${element.description}`
            option.value = `${element.description}`
            select.append(option)
        });



    }

    static procurarEmpresaSetor() {
        const btn = document.getElementById('btnProcurarEmpresas')
        const select = document.getElementById('selectSetores')
        const ul = document.getElementById('empresaSetores')

        btn.addEventListener('click', async event => {
            ul.innerHTML = ""
            let empresa = await apiRequests.empresaPorSetor(select.value)

            empresa.forEach(element => {
                const li = document.createElement('li')
                const p = document.createElement('p')
                li.classList.add('empresas')
                p.innerText = element.name
                li.append(p)
                ul.append(li)
            });
        })
    }

    static cadatrasEmpresa() {
        const setor = document.getElementById('selectSecoes')
        const nomeCadasEmpre = document.getElementById('nomeCriarEmpre')
        const horarioCadasEmpre = document.getElementById('horarioCriarEmpre')
        const descriCadasEmpre = document.getElementById('descriCriarEmpre')
        const btn = document.getElementById('btnCadastroEmpresa')

        btn.addEventListener('click', event => {
            const data = {
                name: nomeCadasEmpre.value,
                opening_hours: horarioCadasEmpre.value,
                description: descriCadasEmpre.value,
                sector_uuid: setor.value
            }
            console.log(setor.value)
            apiRequests.criarEmpresa(data)
        })
    }

    static async procurarEmpresa() {
        const horario1 = document.getElementById('horarioFuncionar')
        const ramoAtv = document.getElementById('ramoAtv')
        const btn = document.getElementById('bntProcurar')
        const ulCarrocelsetor = document.getElementById('carrocelSetor')
        let empresas = await apiRequests.todasEmpresas()

        btn.addEventListener('click', async event => {
            ulCarrocelsetor.innerHTML = ''
            const select = document.getElementById('selectEmpresas')
            let procurar = empresas.find(element => element.uuid === select.value)
            let departments = await apiRequests.renderDepartaEmpresa(procurar.uuid)
            dashBoard.showDepartamentos(departments)
            horario1.innerText = `Horario de funcionamento: ${procurar.opening_hours}`
            ramoAtv.innerText = `Ramo de atividade: ${procurar.sectors.description}`

        })
    }

    static showDepartamentos(data) {
        const ulCarrocelsetor = document.getElementById('carrocelSetor')

        data.forEach(element => {
            const li = document.createElement('li')
            const p1 = document.createElement('p')
            const p2 = document.createElement('p')
            p1.innerText = element.name
            p2.innerText = element.description
            li.append(p1, p2)
            ulCarrocelsetor.append(li)
        });
    }

    static criarDepartamento() {
        const nomeDepart = document.getElementById('nomeDepartamento')
        const descriptionDepart = document.getElementById('descriDepartamento')
        const bntCriar = document.getElementById('bntCriardepart')
        const selectEmpresa = document.getElementById('selectEmpresas2')

        bntCriar.addEventListener('click', async event => {
            let data = {
                name: nomeDepart.value,
                description: descriptionDepart.value,
                company_uuid: selectEmpresa.value
            }
            console.log(selectEmpresa.value)
            apiRequests.criarDepartamento(data)
            console.log('oi')
        })

    }
    static async renderFuncionarios() {
        const selectFuncionario = document.getElementById('Funcionarios')
        const bntListarFuncionarios = document.getElementById('buscarFuncionario')
        const inputModalidade = document.getElementById('modalidadeDeTrabalho')
        const inputcargo = document.getElementById('inputCargo')

        let Funcionarios = await apiRequests.renderAllFuncionarios()
        console.log(Funcionarios)
        bntListarFuncionarios.addEventListener('click', event => {
            let procurar = Funcionarios.find(element => element.uuid === selectFuncionario.value)
            inputModalidade.value = procurar.kind_of_work
            inputcargo.value = procurar.professional_level
        })
    }
    static ListarFuncionarios(data) {
        const selectFuncionario = document.getElementById('Funcionarios')

        data.forEach(element => {
            const option = document.createElement('option')
            option.innerText = element.username
            option.value = element.uuid
            selectFuncionario.append(option)
        });
    }
    static mudarInformaçõesFuncionario() {
        const selectFuncionario = document.getElementById('Funcionarios')
        const inputModalidade = document.getElementById('modalidadeDeTrabalho')
        const inputcargo = document.getElementById('inputCargo')
        const btnEditarInfo = document.getElementById('editarFuncionario')
        btnEditarInfo.addEventListener('click', async event => {

            const data = {
                kind_of_work: inputModalidade.value,
                professional_level: inputcargo.value
            }
            console.log(data)
            console.log(selectFuncionario.value)
            await apiRequests.editarInfoUser(selectFuncionario.value, data)
            location.reload();
        })
    }
    static deletarFuncionario() {
        const selectFuncionario = document.getElementById('Funcionarios')
        const bntDeletar = document.getElementById('deletarFuncionario')
        bntDeletar.addEventListener('click', async event => {
            await apiRequests.deletarInfo(selectFuncionario.value)
            location.reload();
        })
    }
    static listarFuncioSemEmpresa(data) {
        const select = document.getElementById('funcionariosContratar')


        data.forEach(element => {
            const option = document.createElement('option')
            option.innerText = element.username
            option.value = element.uuid
            select.append(option)
        });
    }
    static renderDepartaDemitir(data) {
        const select = document.getElementById('demitirDepartamento')

        data.forEach(element => {
            const option = document.createElement('option')
            option.innerText = element.name
            option.value = element.uuid
            select.append(option)
        })
    }
    static renderFuncionariosDepartamento(data) {
        const selectEmpresa = document.getElementById('demitirDepartamento')
        const selectFuncionario = document.getElementById('demitirFuncionarios')
        const btn = document.getElementById('demitirBuscar')
        btn.addEventListener('click', event => {
            selectFuncionario.innerHTML = ""
            let dataFind = data.filter(element => element.department_uuid === selectEmpresa.value)
            console.log(dataFind)

            dataFind.forEach(element => {
                const option = document.createElement('option')
                option.innerText = element.username
                option.value = element.uuid
                selectFuncionario.append(option)
            })
        })
    }
    static demitirFuncionarioDepartamento() {
        const btn = document.getElementById('demitirBtn')
        const selectFuncionario = document.getElementById('demitirFuncionarios')
        btn.addEventListener('click', async event => {

            await apiRequests.demitirFuncionario(selectFuncionario.value)
        })
    }
}


let setores = await apiRequests.renderSetores()

console.log(setores)

dashBoard.listarSetores(setores)


dashBoard.listarSetoresCriarEmpresa(setores)

let empresas = await apiRequests.todasEmpresas()

console.log(empresas)

dashBoard.listarEmpresas(empresas)

dashBoard.listarEmpresas2(empresas)

dashBoard.listarEmpresas3(empresas)

// dashBoard.listarEmpresas4(empresas)

dashBoard.cadatrasEmpresa()

dashBoard.procurarEmpresa()

dashBoard.criarDepartamento()

dashBoard.derpEspeciEmpresa()

dashBoard.mostrarDepartDescri()

dashBoard.renderFuncionarios()

let Funcionarios = await apiRequests.renderAllFuncionarios()

dashBoard.ListarFuncionarios(Funcionarios)

dashBoard.mudarInformaçõesFuncionario()

dashBoard.deletarFuncionario()

let funcionariosSemEmpresa = await apiRequests.funcionariosSemEmpresa()

dashBoard.listarFuncioSemEmpresa(funcionariosSemEmpresa)

dashBoard.MostrarDepartamento()

dashBoard.contratarFuncionario()

dashBoard.editarDepart()

dashBoard.procurarEmpresaSetor()

let departmento = await apiRequests.allDepartamen()

dashBoard.MostrarDepartamentoEditarDeletar(departmento)

dashBoard.deletarDepart()

dashBoard.renderDepartaDemitir(departmento)

dashBoard.renderFuncionariosDepartamento(Funcionarios)

dashBoard.demitirFuncionarioDepartamento()