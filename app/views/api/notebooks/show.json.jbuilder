json.partial! 'api/notebooks/notebook', notebook: @notebook
json.notes @notes, :id, :title, :body, :notebook_id
