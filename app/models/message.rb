class Message < ActiveRecord::Base
  validates :name, :content, :email, presence: true
end
