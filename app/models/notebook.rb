class Notebook < ApplicationRecord
  validates :title, :author_id, presence: true
  validates :title, uniqueness: true

  belongs_to :user, foreign_key: 'author_id'
  has_many :notes, foreign_key: 'notebook_id'
end
