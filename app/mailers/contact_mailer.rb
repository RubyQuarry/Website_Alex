class ContactMailer < ActionMailer::Base
  default from: "info@applejuicescholars.com"


  def contact_user(message)
    @message = message
    mail(to: @message.email, subject: "Contact from AJNORTON.com").deliver
  end

end
