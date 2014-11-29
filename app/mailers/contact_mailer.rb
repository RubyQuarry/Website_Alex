class ContactMailer < ActionMailer::Base
  default from: "ajn123@vt.edu"


  def contact_user(message)
    @message = message
    mail(to: @message.email, subject: "Contact from AJNORTON.com").deliver
  end

end
