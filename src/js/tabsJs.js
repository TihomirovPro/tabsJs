function tabsJs () {
  const tabsNav = document.querySelectorAll('.tabsNav-js')
  const tabs = document.querySelectorAll('.tabs-js')

  for (let i = 0; i < tabsNav.length; i++) {
    for (let c = 0; c < tabs[i].childNodes.length; c++) {
      if (c !== 0) {
        tabs[i].childNodes[c].style.display = 'none'
      }
    }

    tabsNav[i].childNodes[0].classList.add('active')
    tabs[i].childNodes[0].classList.add('open')

    tabsNav[i].addEventListener('click', (e) => {
      let target = e.target
      let index = [].indexOf.call(tabsNav[i].children, target)

      if (target !== e.currentTarget) {
        tabsNav[i].querySelector('.active').classList.remove('active')
        target.classList.add('active')

        tabs[i].querySelector('.open').style.display = 'none'
        tabs[i].querySelector('.open').classList.remove('open')
        tabs[i].childNodes[index].style.display = 'block'
        tabs[i].childNodes[index].classList.add('open')
      }
    })
  }
}

tabsJs()
