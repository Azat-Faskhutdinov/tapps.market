import demo from './assets/demo.png'

interface item {
  placeholder: string
  path: string
}

type props = {
  urlList: Array<item>
}

const PagesNavigation = ({ urlList }: props) => (
  <div class='pages-navigation'>
    <div class='pages-navigation__container'>
      <div class='pages-navigation__body'>
        <div class='pages-navigation__left'>
          <h2 class='pages-navigation__left-title'>Демо-Стенд проекта tapps.market</h2>
          <p>Перейдя по ссылкам, вы можете посмотреть сверстанные страницы</p>
          <p>
            Так будет выглядеть и работать итоговый релиз. Протестируйте анимацию слайдеров, кнопок
            и других элементов, а так же адаптивность страниц на разных устройствах.
          </p>
        </div>

        <div class='pages-navigation__right'>
          <img src={demo} alt='' />
        </div>

        <div class='pages-navigation__nav-shell'>
          {urlList.map((item) => (
            <a class='pages-navigation__item' href={'/' + item.path}>
              <p class='pages-navigation__placeholder'>{item.placeholder}</p>
              <p class='pages-navigation__nav'>{item.path}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export { PagesNavigation }
