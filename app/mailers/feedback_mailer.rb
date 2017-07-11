class FeedbackMailer < ApplicationMailer
	default :from => 'feedback@alexanderchichester.com'
	def feedback_email(feedback)
		@feedback = feedback
		mail( :to => 'alexchi1114@gmail.com', :subject => @feedback.subject)
	end
end
