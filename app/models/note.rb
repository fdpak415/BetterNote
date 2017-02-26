class Note < ApplicationRecord
  validates :title, :notebook_id, :author_id, presence: true
  validates :title, uniqueness: true
end
