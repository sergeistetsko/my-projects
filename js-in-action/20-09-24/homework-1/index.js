// DATA
const playlists = [
  {
    id: 1,
    title: 'Hip-Hop Hits',
    coverImageSource: './img/cardImage/image1.jpeg',
    tracksCount: 4,
    tracks: [
      {
        id: 1,
        artist: 'Eminem',
        title: 'Rap God',
        isHot: true,
        trackFileSource: './audio/Eminem - Rap God.mp3',
        imageSource: './img/cardImage/trackList/track1.jpeg',
      },
      {
        id: 2,
        artist: '50 cent',
        title: 'In da Club',
        isHot: false,
        trackFileSource: './audio/50cent - In da club.mp3',
        imageSource: './img/cardImage/trackList/track2.jpeg',
      },
      {
        id: 3,
        artist: 'DMX',
        title: "X Gon' Give It To Ya",
        isHot: false,
        trackFileSource: "./audio/DMX - X Gon' Give It To Ya.mp3",
        imageSource: './img/cardImage/trackList/track3.jpeg',
      },
      {
        id: 4,
        artist: 'Eminem',
        title: "You Don't Know (feat. 50 cent, Lloyd Banks and Cashis)",
        isHot: false,
        trackFileSource:
          "./audio/Eminem - You Don't Know (feat. 50 cent, Lloyd Banks and Cashis).mp3",
        imageSource: './img/cardImage/trackList/track4.jpeg',
      },
    ],
  },
  {
    id: 2,
    title: 'Rap Hits 1990s',
    coverImageSource: './img/cardImage/image2.jpeg',
    tracksCount: 4,
    tracks: [
      {
        id: 5,
        artist: 'Public Enemy',
        title: 'Fight The Power',
        isHot: true,
        trackFileSource: './audio/Public Enemy - Fight The Power.mp3',
        imageSource: './img/cardImage/trackList/track5.jpeg',
      },
      {
        id: 6,
        artist: 'Vanila Ice',
        title: 'Ice Ice Baby',
        isHot: false,
        trackFileSource: './audio/Vanila Ice - Ice Baby.mp3',
        imageSource: './img/cardImage/trackList/track6.jpeg',
      },
      {
        id: 7,
        artist: 'Mc Hammer',
        title: "You Can't Touch This",
        isHot: true,
        trackFileSource: "./audio/Mc Hammer - You Can't Touch This.mp3",
        imageSource: './img/cardImage/trackList/track7.jpeg',
      },
      {
        id: 8,
        artist: 'Brand Nubian',
        title: 'Brand Nubian',
        isHot: false,
        trackFileSource: './audio/Brand Nubian - Brand Nubian.mp3',
        imageSource: './img/cardImage/trackList/track8.jpeg',
      },
    ],
  },
]

// RENDER
const TrackTopLineComponent = (inputData) => {
  const { isHot, artist, title } = inputData

  const container = document.createElement('div')

  container.classList.add('track-top-line')

  if (isHot) {
    const trackHotImg = document.createElement('img')

    trackHotImg.classList.add('track-status')
    trackHotImg.src = './img/icons/hot.svg'

    container.append(trackHotImg)
  }

  const trackInfo = document.createElement('div')
  trackInfo.classList.add('track-info')

  const trackName = document.createElement('span')

  trackName.classList.add('track-name')
  trackName.innerText = artist + ' - '
  
  const trackTitle = document.createElement('span')

  trackTitle.classList.add('track-title')
  trackTitle.innerText = title

  trackInfo.append(trackName, trackTitle)

  container.append(trackInfo)

  return container
}

const TrackInfoComponent = (inputData) => {
  const container = document.createElement('div')
  container.classList.add('track-details')

  container.append(TrackTopLineComponent(inputData), TrackAudioComponent(inputData))

  return container
}

const TrackImageComponent = (inputData) => {
  const element = document.createElement('img')
  element.classList.add('track-cover-image')
  element.src = inputData.imageSource

  return element
}

const TrackAudioComponent = (inputData) => {
  const element = document.createElement('audio')

  element.src = inputData.trackFileSource
  element.controls = true

  return element
}

const TrackComponent = (inputData) => {
  const element = document.createElement('li')
  element.classList.add('track-element')

  const trackImageElement = TrackImageComponent(inputData)
  const trackInfoElement = TrackInfoComponent(inputData)

  element.append(trackImageElement, trackInfoElement)

  return element
}

// =====================================================

const TracksListComponent = (inputData) => {
  const { tracks } = inputData

  const container = document.createElement('ul')
  container.classList.add('list')

  for (let j = 0; j < tracks.length; j++) {
    const track = tracks[j]
    const trackElement = TrackComponent(track)
    container.append(trackElement)
  }

  return container
}

// =====================================================

const TracksWrapperComponent = (inputData) => {
  const container = document.createElement('div')
  container.classList.add('tracklist')

  const tracklist = TracksListComponent(inputData)
  container.append(tracklist)

  return container
}

// =====================================================

const TracksInfoImageComponent = (inputData) => {
  const { coverImageSource } = inputData

  const element = document.createElement('img')

  element.classList.add('playlist-cover-image')
  element.src = coverImageSource

  return element
}

// =====================================================

const TracksInfoSubTitleComponent = () => {
  const title = document.createElement('span')
  title.classList.add('sub-title')
  title.innerText = 'Playlist'

  return title
}

const TracksInfoTitleComponent = (inputData) => {
  const { title } = inputData

  const titleElement = document.createElement('h2')

  titleElement.classList.add('title')
  titleElement.innerText = title

  return titleElement
}

const TracksInfoCountComponent = (inputData) => {
  const { tracksCount } = inputData

  const tracksCountElement = document.createElement('span')
  tracksCountElement.classList.add('tracks-count')
  tracksCountElement.innerText = tracksCount + ' tracks, 12m 13s'

  return tracksCountElement
}

const TracksInfoTopArtistsComponent = (inputData) => {
  const { tracks } = inputData

  const tracksTopArtistsElement = document.createElement('span')
  tracksTopArtistsElement.classList.add('sub-title')
  tracksTopArtistsElement.innerText = `${tracks[0].artist}, ${tracks[1].artist}, ${tracks[2].artist}`

  return tracksTopArtistsElement
}

const TracksInfoOthersComponent = () => {
  const tracksOthersElement = document.createElement('span')
  tracksOthersElement.innerText = ` and others`
  tracksOthersElement.classList.add('other-artists')

  return tracksOthersElement
}

// =====================================================

const TracksInfoWrapperComponent = (inputData) => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('playlist-wrapper')
  
  const subTitleElement = TracksInfoSubTitleComponent(inputData)
  const titleElement = TracksInfoTitleComponent(inputData)
  const countElement = TracksInfoCountComponent(inputData)
  const topArtistsElement = TracksInfoTopArtistsComponent(inputData)
  const othersElement = TracksInfoOthersComponent()

  wrapper.append(
    subTitleElement,
    titleElement,
    countElement,
    topArtistsElement,
    othersElement
  )

  return wrapper
}

// ====================================================

const TracksInfoComponent = (inputData) => {
  const container = document.createElement('div')
  container.classList.add('playlist-info')

  const imgElement = TracksInfoImageComponent(inputData)
  const wrapper = TracksInfoWrapperComponent(inputData)

  container.append(imgElement, wrapper)

  return container
}

// ====================================================

const PlaylistComponent = (inputData) => {
  const container = document.createElement('article')
  container.classList.add('playlist')

  const tracksInfoElement = TracksInfoComponent(inputData)
  const tracksListElement = TracksListComponent(inputData)

  container.append(tracksInfoElement, tracksListElement)

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
  header.innerText = 'My playlists'
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
  headerLogo.innerText = 'InPlayer'
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
