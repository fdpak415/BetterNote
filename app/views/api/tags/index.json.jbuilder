@tags.each do |tag|
  json.set! tag.id do
    json.partial! 'api/tags/tag', tag: tag
    json.notes tag.notes, :id, :title, :body, :notebook_id
  end
end
