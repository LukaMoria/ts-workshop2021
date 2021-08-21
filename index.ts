Object.defineProperty(window, 'MyMegaApp', {value: 'v1.0.0', writable: false})

const deliveryMethod = () => {
    return 'overnight'
}

const shipWeight = () => {
    const el = document.getElementById('qwe')

    if (!el) return 0

    return parseInt(el.innerHTML)
}

const sendUpdates = (emailAddr: string | Array<string>) => {
    const sendEmail = (addr: string) => {
        if (shipWeight() > 100) console.warn("Warning!!!")

        if (Array.isArray(emailAddr)) {
          emailAddr.forEach((val, idx) => {
              sendEmail(val.trim())
          })
        } else {
            sendEmail(emailAddr.trim())
        }
    }
}

interface Account {
  firstName: string
  secondName: string
  age: number
  getName: unknown
}

const account: Account = {
  firstName: 'Nik',
  age: 24,
  secondName: 'Rostov',
  getName() {
    return this.firstName + this.secondName
  }
}

const userMessage = ([start, end]: TemplateStringsArray, {firstName: name }: typeof account) => {
    return `${start}${name}${end}`
}

console.log(userMessage`Hello ${account} !!!`)