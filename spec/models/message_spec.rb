require 'rails_helper'

RSpec.describe Message, :type => :model do

  subject(:message) { Message.create(name: "AJ",
                                     email: "ajn123@vt.edu",
                                     content: "hello there!") }

  it { respond_to :email }
  it { respond_to :name }
  it { respond_to :content }
  it { be_valid }

end
