$(document)
    .ready(function() {
      $('.ui.form')
        .form({
          fields: {
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
              identifier  : 'password',
              rules: [
                {
                  type   : 'length[8]',
                  prompt : 'Password must be at least 8 characters'
                }
              ]
            }
          }
        })
      ;
    })
  ;
