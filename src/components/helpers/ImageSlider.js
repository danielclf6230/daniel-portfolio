import { useState } from 'react'
import '../Project/ProjectDisplay.scss' // Import your styles

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="imageSlider">
      <div>
        <div
          className="imageSliderControls imageSliderControlsLeft"
          onClick={goToPrevious}
        >
          ❰
        </div>
        <div
          className="imageSliderControls imageSliderControlsRight"
          onClick={goToNext}
        >
          ❱
        </div>
      </div>
      <div className="imageSliderSlide">
        <img src={slides[currentIndex].url} alt={`Slide ${currentIndex + 1}`} />
      </div>
    </div>
  )
}

export default ImageSlider
