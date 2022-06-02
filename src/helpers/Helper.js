import React from 'react'

export function ValidEmailHelper(props) {
    const { email, errors } = props
    let disabld = true
    let err = {...errors }
    let regexMail = new RegExp(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/)
    if (!email) {
      err = { ...err, email: "L'e-mail doit être renseigné" }
      disabld = true
    } else {
      if (!email.match(regexMail)) {
        err = { ...err, email: "L'e-mail est invalide" }
        disabld = true
      } else {
        err = { ...err, email: '' }
        disabld = false
      }
    }

    return { disabld, err }
}