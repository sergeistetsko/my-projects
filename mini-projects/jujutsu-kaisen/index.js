const slider = {
  imagesUrls: [],
  currentImageIndex: 0,
  showPreviousButton: document.getElementById('show-previous-btn'),
  showNextButton: document.getElementById('show-next-btn'),
  slideImage: document.getElementById('slide-img'),
  start: function () {
    const that = this
    this.showPreviousButton.addEventListener('click', function (e) {
      that.onShowPreviousButtonClick(e)
    })
    this.showNextButton.addEventListener('click', function (e) {
      that.onShowNextButtonClick(e)
    })
    this.imagesUrls.push('img/part1/Том 1 Магическая битва_page-0001.jpg')
    this.imagesUrls.push('img/part1/Том 1 Магическая битва_page-0002.jpg')
    this.imagesUrls.push('img/part1/Том 1 Магическая битва_page-0003.jpg')
    this.imagesUrls.push('img/part1/Том 1 Магическая битва_page-0004.jpg')

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
