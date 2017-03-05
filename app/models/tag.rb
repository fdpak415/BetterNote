class Tag < ApplicationRecord
  validates :name, uniqueness: true
  has_many :taggings
  has_many :notes, through: :taggings
end
