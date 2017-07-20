class FeedbacksController < ApplicationController
	def new
		@feedback = Feedback.new
	end

	def create
		@feedback = Feedback.new(feedback_params)
    	if @feedback.save
        flash[:success] = "Thank you for your message. I will get back to you as soon as possible!"
        FeedbackMailer.feedback_email(@feedback).deliver
    	  redirect_to root_url
    	else
      	render 'new'
    	end
	end

	private 
  	def feedback_params
  		params.require(:feedback).permit(:name, :subject, :body, :email)                       
 	 end
end
