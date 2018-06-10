$(document)
    .ready(function() {
      $('.ui.form')
        .form({
          fields: {
            firstname: {
              identifier : 'firstname',
              rules : [
                {
                  type   : 'empty',
                  prompt : 'First name must not be empty'
                }
              ]
            },
            email: {
              identifier  : 'email',
              rules: [
                {
                  type   : 'email',
                  prompt : 'Please enter a valid e-mail'
                }
              ]
            },
            username: {
              identifier  : 'username',
              rules : [
                {
                  type   : 'length[3]',
                  prompt : 'Username must be at least 3 characters'
                }
              ]
            },
            password: {
              identifier  : 'password_1',
              rules: [
                {
                  type   : 'length[8]',
                  prompt : 'Password must be at least 8 characters'
                }
              ]
            },
            passwordConfirm: {
              identifier : 'password_2',
              rules: [
                {
                  type   : 'match[password_1]',
                  prompt : 'Password does not match'
                }
              ]
            }
          }
        })
      ;
    })
  ;
