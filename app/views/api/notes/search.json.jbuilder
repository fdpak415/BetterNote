json.array!(@notes) do |note|
  json.(note, *Note.titles)
  # Hidden N+1 query!
end
