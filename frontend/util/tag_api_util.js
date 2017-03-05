export const createTag = tag => {
  return $.ajax({
    url: '/api/tags',
    method: 'POST',
    data: tag
  })
}

export const fetchTags = () => {
  return $.ajax({
    url: '/api/tags',
    method: 'GET'
  })
}

export const fetchTag = (id) => {
  return $.ajax({
    url: `/api/tags/${id}`,
    method: 'GET',
    data: {"tag": {id: id}}
  })
}

export const updateTag = (id, data) => {
  // data["notes"]["id"] = id
  return $.ajax({
    url: `/api/tags/${id}`,
    method: 'PATCH',
    data: data
  })
}

export const deleteTag = (id) => {
  return $.ajax({
    url: `/api/tags/${id}`,
    method: 'DELETE',
    // data: {"notes": {id: id}}
  })
}
