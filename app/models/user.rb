class User < ApplicationRecord
  validates :email, :password_digest, :session_token, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  has_many :notes, foreign_key: 'author_id'
  has_many :notebooks, foreign_key: 'author_id'

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password= password
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end


  private

  def ensure_session_token
    self.session_token ||= SecureRandom.base64
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = SecureRandom.base64
    end
  end

end
