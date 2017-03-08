export const createNote = note => {
  return $.ajax({
    url: '/api/notes',
    method: 'POST',
    data: note
  })
}

export const fetchNotes = () => {
  return $.ajax({
    url: '/api/notes',
    method: 'GET'
  })
}

export const fetchNote = (id) => {

  return $.ajax({
    url: `/api/notes/${id}`,
    method: 'GET',
    data: {"note": {id: id}}
  })
}

export const updateNote = (id, data) => {
  data["note"]["id"] = id
  return $.ajax({
    url: `/api/notes/${id}`,
    method: 'PATCH',
    data: data
  })
}

export const deleteNote = (id) => {
  return $.ajax({
    url: `/api/notes/${id}`,
    method: 'DELETE',
    data: {"note": {id: id}}
  })
}

export const noteSearch = query => {
  return $.ajax({
       url: "api/notes/search",
       method: "GET",
       data: query
     });
}
