var templates = {
  account: accountTemplate,
  signUp: function(showLabel){
    var label
    if(showLabel) {
      label = `<label>sometimes show me</label>`
    } else {
      label = ''
    }
    return `
      <div>
        ${label}
        <input type="text" />
      </div>
    `
  }
}
