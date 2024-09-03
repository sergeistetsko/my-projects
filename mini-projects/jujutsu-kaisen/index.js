const slider = {
  imagesUrls: [],
  currentImageIndex: 0,
  showPreviousButton: document.getElementById('show-previous-btn'),
  showNextButton: document.getElementById('show-next-btn'),
  slideImage1: document.getElementById('slide-img-1'),
  slideImage2: document.getElementById('slide-img-2'),
  startButton: document.getElementById('first-pic'),
  confirmPage: document.getElementById('confirm-page'),
  selectChapter: document.getElementById('select'),
  start: function () {
    const that = this
    this.showPreviousButton.addEventListener('click', function (e) {
      that.onShowPreviousButtonClick(e)
    })
    this.showNextButton.addEventListener('click', function (e) {
      that.onShowNextButtonClick(e)
    })
    this.startButton.addEventListener('click', function (e) {
      that.onStartButton(e)
    })
    this.confirmPage.addEventListener('click', function (e) {
      that.onConfirmPage(e)
    })
    this.selectChapter.addEventListener('change', function (e) {
      that.onSelectChapterChange(e)
    })
    this.loadImages('part1').then(() => {
      this.updateImage()
      this.showPreviousButton.disabled = true
    })
  },
  onShowPreviousButtonClick: function () {
    this.currentImageIndex -= 2
    this.updateImage()
  },
  onShowNextButtonClick: function () {
    this.currentImageIndex += 2
    this.updateImage()
  },
  onStartButton: function () {
    this.currentImageIndex = 0
    this.updateImage()
  },
  onConfirmPage: function () {
    const input = document.querySelector('.input-number-page')
    const pageIndex = parseInt(input.value, 10) - 1 // Преобразуем значение input в индекс массива
    if (pageIndex >= 0 && pageIndex < this.imagesUrls.length) {
      this.currentImageIndex = pageIndex
      this.updateImage()
    } else {
      alert('Неверный номер страницы')
    }
  },
  onSelectChapterChange: function (e) {
    const selectedValue = e.target.value
    this.loadImages(`part${selectedValue}`).then(() => {
      this.currentImageIndex = 0
      this.updateImage()
    })
  },
  loadImages: async function (part) {
    this.imagesUrls = []
    const totalImages = 60 // Общее количество изображений
    for (let i = 1; i <= totalImages; i++) {
      const imageNumber = String(i).padStart(4, '0') // Форматируем номер изображения с ведущими нулями
      const imageUrl = `img/${part}/${imageNumber}.jpg`

      try {
        const response = await fetch(imageUrl, { method: 'HEAD' })
        if (response.ok) {
          this.imagesUrls.push(imageUrl)
        }
      } catch (error) {
        console.error(`Изображение не найдено: ${imageUrl}`)
      }
    }
  },
  updateImage: function () {
    if (this.imagesUrls.length === 0) {
      this.slideImage1.src = ''
      this.slideImage2.src = ''
      return
    }

    this.slideImage1.style.opacity = 0
    this.slideImage2.style.opacity = 0
    setTimeout(() => {
      this.slideImage1.src = this.imagesUrls[this.currentImageIndex] || ''
      this.slideImage2.src = this.imagesUrls[this.currentImageIndex + 1] || ''
      this.slideImage1.style.opacity = 1
      this.slideImage2.style.opacity = 1
    }, 500)
    this.showPreviousButton.disabled = this.currentImageIndex === 0
    this.showNextButton.disabled =
      this.currentImageIndex >= this.imagesUrls.length - 2
  },
}

slider.start()
