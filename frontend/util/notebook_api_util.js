export const createNotebook = notebook => {
  return $.ajax({
    url: '/api/notebook',
    method: 'POST',
    data: notebook
  })
}

export const fetchNotebooks = () => {
  return $.ajax({
    url: '/api/notebook',
    method: 'GET'
  })
}

export const fetchNotebook = (id) => {
  return $.ajax({
    url: `/api/notebook/${id}`,
    method: 'GET'
  })
}

export const updateNotebook = (id, data) => {
  return $.ajax({
    url: `/api/notebook/${id}`,
    method: 'PATCH',
    data
  })
}

export const deleteNotebook = (id) => {
  return $.ajax({
    url: `/api/notebook/${id}`,
    method: 'DELETE'
  })
}
