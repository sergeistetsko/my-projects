// DATA
const playlists = [
  {
    id: 1,
    cardsTitle: 'Education Videos',
    videoCards: [
      {
        id: 1,
        author: 'It-Kamasutra',
        title: 'JavaScript',
        description:
          'Way of the Samurai, Browser, first program, foreign language learning simulator',
        publishDate: 'now',
        isLiveStream: true,
        videoFileSource: './video/video1.mp4',
        videoImageSource: './img/cardImage/video1.png',
      },
      {
        id: 2,
        author: 'It-Kamasutra',
        title: 'JavaScript',
        description: 'The Way of the Samurai, installing VS code, code editor',
        publishDate: '1 week ago',
        isLiveStream: false,
        videoFileSource: './video/video2.mp4',
        videoImageSource: './img/cardImage/video2.png',
      },
      {
        id: 3,
        author: 'It-Kamasutra',
        title: 'Back-end - The Samurai Way',
        description: 'Reboot - express + typescript + nodemon',
        publishDate: '2 weeks ago',
        isLiveStream: false,
        videoFileSource: './video/video3.mp4',
        videoImageSource: './img/cardImage/video3.png',
      },
    ],
  },
  {
    id: 1,
    cardsTitle: 'Online training sports',
    videoCards: [
      {
        id: 4,
        author: 'Pamela Reif',
        title: '20 MIN FULL BODY WORKOUT',
        description: 'Beginner Version // No Equipment I Pamela Reif',
        isLiveStream: false,
        publishDate: '12 hours ago',
        videoFileSource: './video/video4.mp4',
        videoImageSource: './img/cardImage/video4.png',
      },
      {
        id: 5,
        author: 'Seva Prihodko',
        title: 'Stretching Yoga',
        description: 'Sports training online — filming and editing',
        isLiveStream: false,
        publishDate: '1 week ago',
        videoFileSource: './video/video6.mp4',
        videoImageSource: './img/cardImage/video6.png',
      },
      {
        id: 6,
        author: 'BullyJuice',
        title: 'PERFECT 20 MIN FULL BODY WORKOUT FOR BEGINNERS',
        description: '(No Equipment)',
        isLiveStream: false,
        publishDate: '2 weeks ago',
        videoFileSource: './video/video5.mp4',
        videoImageSource: './img/cardImage/video5.png',
      },
    ],
  },
]

// RENDER
const VideoComponent = (inputData) => {
  const { videoImageSource } = inputData

  const element = document.createElement('video')

  element.src = inputData.videoFileSource
  element.controls = true
  element.muted = true
  element.poster = videoImageSource

  return element
}

// =====================================================

const VideoTitleComponent = (inputData) => {
  const { title } = inputData

  const titleCard = document.createElement('span')
  titleCard.classList.add('video-title')
  titleCard.innerText = title

  return titleCard
}

// =====================================================

const VideoDescriptionComponent = (inputData) => {
  const { description } = inputData

  const descriptionCard = document.createElement('span')
  descriptionCard.classList.add('sub-title')
  descriptionCard.innerText = description

  return descriptionCard
}

// =====================================================

const VideoAuthorComponent = (inputData) => {
  const { author } = inputData

  const authorCard = document.createElement('span')
  authorCard.classList.add('author')
  authorCard.innerText = author

  return authorCard
}

// =====================================================

const VideoPublishDateComponent = (inputData) => {
  const { publishDate, isLiveStream } = inputData

  const publishDateCard = document.createElement('span')

  if (isLiveStream) {
    publishDateCard.classList.add('publish-date-live')
    publishDateCard.innerText = ' • Live Stream'
  } else {
    publishDateCard.classList.add('publish-date')
    publishDateCard.innerText = publishDate
  }

  return publishDateCard
}

// =====================================================

const VideoCardComponent = (inputData) => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('card-wrapper')

  const cardVideoElement = VideoComponent(inputData)
  const cardTitleElement = VideoTitleComponent(inputData)
  const cardDescriptionElement = VideoDescriptionComponent(inputData)
  const cardAuthorElement = VideoAuthorComponent(inputData)
  const publishDateElement = VideoPublishDateComponent(inputData)

  wrapper.append(
    cardVideoElement,
    cardTitleElement,
    cardDescriptionElement,
    cardAuthorElement,
    publishDateElement
  )

  return wrapper
}
// ====================================================

const VideoCardsWrapperComponent = (inputData) => {
  const { videoCards } = inputData

  const wrapper = document.createElement('ul')
  wrapper.classList.add('playlist-wrapper')

  for (let j = 0; j < videoCards.length; j++) {
    const videoCard = videoCards[j]
    const videoCardElement = VideoCardComponent(videoCard)
    wrapper.append(videoCardElement)
  }

  return wrapper
}

// ====================================================

const VideoCardsTitleComponent = (inputData) => {
  const element = document.createElement('h2')
  element.innerText = inputData.cardsTitle
  element.classList.add('playlist-title')

  return element
}

// ====================================================

const PlaylistComponent = (inputData) => {
  const container = document.createElement('article')
  container.classList.add('playlist')

  const videoCardsInfoElement = VideoCardsTitleComponent(inputData)
  const videoCardsWrapperElement = VideoCardsWrapperComponent(inputData)

  container.append(videoCardsInfoElement, videoCardsWrapperElement)

  return container
}

// ====================================================

const PlaylistsComponent = (inputData) => {
  const container = document.createElement('div')
  container.classList.add('playlists')

  for (let i = 0; i < inputData.length; i++) {
    const playlist = inputData[i]

    const playlistElement = PlaylistComponent(playlist)

    container.append(playlistElement)
  }

  return container
}

const TitleComponent = () => {
  const header = document.createElement('h1')
  header.innerText = 'My Playlists'
  header.classList.add('title')

  return header
}

// ====================================================

const HeaderComponent = () => {
  const header = document.createElement('header')

  const headerContainer = document.createElement('div')
  headerContainer.classList.add('header-container')

  const headerImage = document.createElement('img')
  headerImage.src = './img/logo/logo.svg'

  const headerLogo = document.createElement('div')
  headerLogo.innerText = 'InTube'
  headerLogo.classList.add('logo-name')

  headerContainer.append(headerImage, headerLogo)
  header.append(headerContainer)

  return header
}

const MainComponent = (inputData) => {
  const container = document.createElement('main')

  container.append(TitleComponent(), PlaylistsComponent(inputData))

  return container
}

// =====================================================

const App = (inputData) => {
  const container = document.createElement('div')
  container.classList.add('App')

  container.append(HeaderComponent(), MainComponent(inputData))

  return container
}

// =====================================================

const render = (inputData) => {
  const root = document.getElementById('root')
  root.append(App(inputData))
}

render(playlists)
