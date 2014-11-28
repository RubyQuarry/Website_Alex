class StaticPagesController < ApplicationController
  def home
    @message = Message.new 
  end
end
