function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs div img")
  let mainImage = document.querySelector("#gallery-photo img")

  // Image info to be updated.
  let galleryInfo = document.querySelector("#gallery-info")
  let title = galleryInfo.querySelector(".title")
  let description = galleryInfo.querySelector(".description")

  thumbnails.forEach((thumbnail) => {
    // Preload large images.
    let newImageSrc = thumbnail.dataset.largeVersion
    let largeVersion = new Image()
    largeVersion.src = newImageSrc

    thumbnail.addEventListener("click", function () {
      // Set clicked image as display image.
      mainImage.setAttribute("src", newImageSrc)
      mainImage.setAttribute("alt", thumbnail.alt)

      // Change which image is current.
      let currentClass = "current"
      document.querySelector(".current").classList.remove(currentClass)
      thumbnail.parentNode.classList.add(currentClass)

      // Update image info.
      title.innerHTML = thumbnail.dataset.title
      description.innerHTML = thumbnail.dataset.description
    })
  })
}
