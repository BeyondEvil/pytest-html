class MediaViewer {
    constructor(assets) {
        this.assets = assets
        this.active = 0
    }
    nextActive() {
        this.active = this.active === this.assets.length - 1 ? 0 : this.active + 1
        return [this.active, this.activeFile]
    }
    prevActive() {
        this.active = this.active === 0 ? this.assets.length - 1 : this.active -1
        return [this.active, this.activeFile]
    }

    get imageIndex() {
        return this.active
    }
    get activeFile() {
        return this.assets[this.active]
    }
}


const setUp = (resultBody, assets) => {
    const mediaViewer = new MediaViewer(assets)
    const leftArrow = resultBody.querySelector('.media-container__nav--left')
    const rightArrow = resultBody.querySelector('.media-container__nav--right')
    const mediaName = resultBody.querySelector('.media__name')
    const counter = resultBody.querySelector('.media__counter')
    const imageEl = resultBody.querySelector('img')
    const imageElWrap = resultBody.querySelector('.media__screenshot')
    const videoEl = resultBody.querySelector('source')
    const videoElWrap = resultBody.querySelector('.media__video')

    const setImg = (image, index) => {
        if (image?.format_type === 'image') {
            imageEl.src = image.path

            imageElWrap.classList.remove('hidden')
            videoElWrap.classList.add('hidden')
        } else if (image?.format_type === 'video') {
            videoEl.src = image.path

            videoElWrap.classList.remove('hidden')
            imageElWrap.classList.add('hidden')
        }

        mediaName.innerText = image?.name
        counter.innerText = `${index + 1} / ${assets.length}`
    }
    setImg(mediaViewer.activeFile, 0)

    const moveLeft = () => {
        const [index, image] = mediaViewer.prevActive()
        setImg(image, index)
    }
    const doRight = () => {
        const [index, image] = mediaViewer.nextActive()
        setImg(image, index)
    }
    const openImg = () => {
        window.open(mediaViewer.activeFile.path, '_blank')
    }

    leftArrow.addEventListener('click', moveLeft)
    rightArrow.addEventListener('click', doRight)
    imageEl.addEventListener('click', openImg)
}

exports.setUp = setUp
