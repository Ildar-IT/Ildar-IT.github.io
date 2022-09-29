class Form {
  constructor(rules) {
    this.rules = rules
  }

  validate(key, value) {
    const reg = this.rules[key].reg;
    return value.search(reg) !== -1 
  }
}


const form = new Form( {
  name: {
    reg: /\w+/,
    errorMessage: 'Введите правильное имя'
  },
  email:""
})

if (form.validate("name", "aaa")) {
  console.log("succes")
}

console.log(Math.ceil(20.02))