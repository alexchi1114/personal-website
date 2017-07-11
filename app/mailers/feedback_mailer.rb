class FeedbackMailer < ApplicationMailer
	default :from => 'feedback@alexanderchichester.com'
	def feedback_message(feedback)
		@feedback = feedback
		mail( :to => 'alexchi1114@gmail.com', :subject => @feedback.subject)
	end
end
