export const createNotebook = notebook => {
  return $.ajax({
    url: '/api/notebooks',
    method: 'POST',
    data: notebook
  })
}

export const fetchNotebooks = () => {
  return $.ajax({
    url: '/api/notebooks',
    method: 'GET'
  })
}

export const fetchNotebook = (id) => {
  return $.ajax({
    url: `/api/notebooks/${id}`,
    method: 'GET'
  })
}

export const updateNotebook = (id, data) => {
  data["notebook"]["id"] = id
  return $.ajax({
    url: `/api/notebooks/${id}`,
    method: 'PATCH',
    data: data
  })
}

export const deleteNotebook = (id) => {
  return $.ajax({
    url: `/api/notebooks/${id}`,
    method: 'DELETE',
    data: {"notebook": {id: id}}
  })
}
