class Index {
    static modeBtn = document.getElementById('btnDarkmode')
    static html = document.querySelector('html')

    static handleDarkMode() {

        this.modeBtn.addEventListener('click', () => {
            this.html.classList.toggle('dark-mode')
            Index.modeListenner()
        })
    }

    static modeListenner() {

        if (this.html.classList.contains("dark-mode")) {
            this.modeBtn.innerText = 'Light Mode'
        } else {
            this.modeBtn.innerText = 'Dark Mode'
        }
    }
}

Index.handleDarkMode()
Index.modeListenner()