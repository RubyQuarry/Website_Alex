class MessagesController < ApplicationController
  def create
    message = Message.new message_params
    if message.save
      
    end

    respond_to do |format|
      format.js
    end
  end



  def message_params
    params.require(:message).permit(:name, :email, :content)
  end
end
