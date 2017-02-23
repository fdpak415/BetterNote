export const signup = data => {
  $.ajax({
    url: '/api/user',
    method: 'POST',
    data
  })
}

export const login = data => {
  $.ajax({
    url: '/api/session',
    method: 'POST',
    data
  })
}

export const logout = () => {
  $.ajax({
    url: '/api/session',
    method: 'DELETE'
  })
}
