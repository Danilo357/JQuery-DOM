var carouselImages = [
  {
    image_url: "https://wallpapersite.com/images/pages/pic_w/872.jpg",
    title: "Watch Dogs",
    photographer_id: "Dog201"
  },
  {
    image_url:
      "https://cdn.allwallpaper.in/wallpapers/1280x720/13655/video-games-assassins-creed-game-1280x720-wallpaper.jpg",
    title: "Assassins Creed",
    photographer_id: "Assassin20"
  },
  {
    image_url: "http://paperlief.com/images/tomb-raider-cast-wallpaper-3.jpg",
    title: "Tomb Raider",
    photographer_id: "Raider7"
  }
]

const html = carouselImages.map(img => `<img src="${img.image_url}"/>`)
$("#image").html(html)
var current = 1
$("#image")
  .find("img:nth-child(1")
  .addClass("active")

$("#left").on("click", function(e) {
  if (current !== 1) {
    current = current - 1
    $("img").removeClass("active")
    $(`img:nth-child(${current})`).addClass("active")
  } else {
    $("img").removeClass("active")
    current = carouselImages.length
    $(`img:nth-child(${current})`).addClass("active")
  }
})

$("#right").on("click", function(e) {
  if (current !== carouselImages.length) {
    current = current + 1
    $("img").removeClass("active")
    $(`img:nth-child(${current})`).addClass("active")
  } else {
    $("img").removeClass("active")
    current = 1
    $(`img:nth-child(${current})`).addClass("active")
  }
})
