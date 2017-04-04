@notes.each do |note|
  json.set! note.id do
    json.extract! note, :id, :title, :body, :notebook_id, :author_id
    json.date(note.created_at.strftime('%m/%d/%Y'))
  end
end
