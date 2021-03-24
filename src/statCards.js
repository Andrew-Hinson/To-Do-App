const pieChart = () => {
    const canvasContainer = document.createElement('div')

    canvasContainer.setAttribute('id', 'canvasContainer1')
    canvasContainer.classList.add('canvasContainer')

    const canvas = document.createElement('canvas')

    canvas.setAttribute('id', 'canvas1')
    canvas.classList.add('canvas')
    canvas.setAttribute('aria-label', 'main stats')
    canvas.setAttribute('role', 'img')

    canvasContainer.appendChild(canvas)

    return canvasContainer
}

const graphChart = () => {
    const canvasContainer2 = document.createElement('div')

    canvasContainer2.setAttribute('id', 'canvasContainer2')
    canvasContainer2.classList.add('canvasContainer')

    const canvas = document.createElement('canvas')

    canvas.setAttribute('id', 'canvas2')
    canvas.classList.add('canvas')
    canvas.setAttribute('aria-label', 'secondary-stats')
    canvas.setAttribute('role', 'img')

    canvasContainer2.appendChild(canvas)

    return canvasContainer2
}

export { pieChart, graphChart }
