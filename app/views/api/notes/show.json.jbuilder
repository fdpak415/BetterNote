json.partial! 'api/notes/note', note: @note
json.tags @note.tags, :id, :name
