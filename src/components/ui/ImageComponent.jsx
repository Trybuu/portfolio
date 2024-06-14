import { useEffect, useState } from 'react'
import { Blurhash } from 'react-blurhash'

export default function ImageComponent({ src, alt }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()

    img.onload = () => {
      setImageLoaded(true)
    }
    img.src = src
  }, [src])

  return (
    <>
      <div style={{ display: imageLoaded ? 'none' : 'inline' }}>
        <Blurhash
          hash="LJNmyf00?^aengRj?bj[.SoLH?WV"
          width={300}
          height={300}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>
      <img
        src={src}
        alt={alt}
        style={{ display: !imageLoaded ? 'none' : 'inline' }}
      />
    </>
  )
}
