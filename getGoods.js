const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')

    const getData = () => {
        fetch('https://test-c8862-default-rtdb.europe-west1.firebasedatabase.app/.json')
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem('data', JSON.stringify(data))
            })
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            getData()
        })
    })

}

getGoods()