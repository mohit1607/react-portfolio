import { useState, useEffect } from 'react'

export const useImageColor = (imageUrl) => {
    const [dominantColor, setDominantColor] = useState(null)

    useEffect(() => {
        if (!imageUrl) return

        const img = new Image()
        img.crossOrigin = 'Anonymous'
        img.src = imageUrl

        img.onload = () => {
            try {
                const canvas = document.createElement('canvas')
                const ctx = canvas.getContext('2d')

                canvas.width = img.width
                canvas.height = img.height

                ctx.drawImage(img, 0, 0)

                // Sample from center of image
                const centerX = Math.floor(img.width / 2)
                const centerY = Math.floor(img.height / 2)
                const sampleSize = 10

                const imageData = ctx.getImageData(
                    centerX - sampleSize,
                    centerY - sampleSize,
                    sampleSize * 2,
                    sampleSize * 2
                )

                let r = 0, g = 0, b = 0
                const pixels = imageData.data.length / 4

                for (let i = 0; i < imageData.data.length; i += 4) {
                    r += imageData.data[i]
                    g += imageData.data[i + 1]
                    b += imageData.data[i + 2]
                }

                r = Math.floor(r / pixels)
                g = Math.floor(g / pixels)
                b = Math.floor(b / pixels)

                // Add some transparency for shadow effect
                setDominantColor(`rgba(${r}, ${g}, ${b}, 0.4)`)
            } catch (error) {
                console.warn('Could not extract color from image:', error)
                setDominantColor(null)
            }
        }

        img.onerror = () => {
            setDominantColor(null)
        }
    }, [imageUrl])

    return dominantColor
}
