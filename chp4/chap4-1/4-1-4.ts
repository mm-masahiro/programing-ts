let x = {
  a() {
    return this
  }
}

console.log(x.a())

function fancyDate(this: Date) {
  return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}`
}

const date = new Date()

console.log(fancyDate.call(new Date));
