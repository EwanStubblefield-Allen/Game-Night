export class Player {
  constructor(name, url) {
    this.score = 0
    this.name = name
    this.img = url
  }

  get PlayerTemplate() {
    return /*HTML */`
    <div class="col-12 d-flex align-items-center justify-content-center text p-1">
          <img class="rounded-circle"
            src="${this.img}"
            alt="${this.name}">
          <p class="px-3">${this.name}</p>
          <i onclick="app.PlayerController.changeScore('${this.name}', false)"
            class="mdi mdi-minus-circle-outline ps-5"></i>
          <p class="px-2 fs-5 text-white">${this.score}</p>
          <i onclick="app.PlayerController.changeScore('${this.name}', true)" class="mdi mdi-plus-circle-outline"></i>
        </div>`
  }
}