const slider = {
  imagesUrls: [],
  currentImageIndex: 0,
  showPreviousButton: document.getElementById('show-previous-btn'),
  showNextButton: document.getElementById('show-next-btn'),
  slideImage: document.getElementById('slide-img'),
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
    this.loadImages('part1')
    this.slideImage.src = this.imagesUrls[this.currentImageIndex]
    this.showPreviousButton.disabled = true
  },
  onShowPreviousButtonClick: function () {
    this.currentImageIndex--
    this.updateImage()
  },
  onShowNextButtonClick: function () {
    this.currentImageIndex++
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
    this.loadImages(`part${selectedValue}`)
    this.currentImageIndex = 0
    this.updateImage()
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
        console.error(`Image not found: ${imageUrl}`)
      }
    }
  },
  updateImage: function () {
    this.slideImage.style.opacity = 0
    setTimeout(() => {
      this.slideImage.src = this.imagesUrls[this.currentImageIndex]
      this.slideImage.style.opacity = 1
    }, 500)
    this.showPreviousButton.disabled = this.currentImageIndex === 0
    this.showNextButton.disabled =
      this.currentImageIndex === this.imagesUrls.length - 1
  },
}

slider.start()
