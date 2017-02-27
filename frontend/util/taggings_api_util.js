export const createTagging = tagging => {
  return $.ajax({
    url: '/api/taggings',
    method: 'POST',
    data: tagging
  })
}
