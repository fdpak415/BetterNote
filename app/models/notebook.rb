class Notebook < ApplicationRecord
  validates :title, :author_id, presence: true
  validates :title, uniqueness: true
end
