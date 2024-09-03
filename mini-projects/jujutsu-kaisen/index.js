const slider = {
  imagesUrls: [],
  currentImageIndex: 0,
  showPreviousButton: document.getElementById('show-previous-btn'),
  showNextButton: document.getElementById('show-next-btn'),
  slideImage: document.getElementById('slide-img'),
  startButton: document.getElementById('first-pic'),
  confirmPage: document.getElementById('confirm-page'),
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
    this.imagesUrls.push('img/part1/0001.jpg')
    this.imagesUrls.push('img/part1/0002.jpg')
    this.imagesUrls.push('img/part1/0003.jpg')
    this.imagesUrls.push('img/part1/0004.jpg')
    this.imagesUrls.push('img/part1/0005.jpg')
    this.imagesUrls.push('img/part1/0006.jpg')
    this.imagesUrls.push('img/part1/0007.jpg')
    this.imagesUrls.push('img/part1/0008.jpg')
    this.imagesUrls.push('img/part1/0009.jpg')
    this.imagesUrls.push('img/part1/0010.jpg')
    this.imagesUrls.push('img/part1/0011.jpg')
    this.imagesUrls.push('img/part1/0012.jpg')
    this.imagesUrls.push('img/part1/0013.jpg')
    this.imagesUrls.push('img/part1/0014.jpg')
    this.imagesUrls.push('img/part1/0015.jpg')
    this.imagesUrls.push('img/part1/0016.jpg')
    this.imagesUrls.push('img/part1/0017.jpg')
    this.imagesUrls.push('img/part1/0018.jpg')
    this.imagesUrls.push('img/part1/0019.jpg')
    this.imagesUrls.push('img/part1/0020.jpg')
    this.imagesUrls.push('img/part1/0021.jpg')
    this.imagesUrls.push('img/part1/0022.jpg')
    this.imagesUrls.push('img/part1/0023.jpg')
    this.imagesUrls.push('img/part1/0024.jpg')
    this.imagesUrls.push('img/part1/0025.jpg')
    this.imagesUrls.push('img/part1/0026.jpg')
    this.imagesUrls.push('img/part1/0027.jpg')
    this.imagesUrls.push('img/part1/0028.jpg')

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
