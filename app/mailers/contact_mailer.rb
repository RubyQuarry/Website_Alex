class ContactMailer < ActionMailer::Base
  default to: "ajn123@vt.edu"


  def contact_user(message)
    @message = message
    mail(from: @message.email, subject: "Contact from AJNORTON.com").deliver
  end

end
