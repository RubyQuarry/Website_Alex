class MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)

    respond_to do |format|
      format.js
    end
  end

  def new

  end

  def show

  end

  def index

  end



  def message_params
    params.require(:message).permit(:name, :email, :content)
  end
end
