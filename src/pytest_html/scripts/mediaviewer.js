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
    const sourceEl = resultBody.querySelector('source')
    const videoEl = resultBody.querySelector('video')

    const setImg = (image, index) => {
        if (image?.format_type === 'image') {
            imageEl.src = image.path

            imageEl.classList.remove('hidden')
            videoEl.classList.add('hidden')
        } else if (image?.format_type === 'video') {
            sourceEl.src = image.path

            videoEl.classList.remove('hidden')
            imageEl.classList.add('hidden')
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
