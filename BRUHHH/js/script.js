const container = document.querySelector('#container')
const panorama = new PANOLENS.ImagePanorama('../img/img.jpg')
const viewer = new PANOLENS.Viewer({container:container})
viewer.add(panorama)