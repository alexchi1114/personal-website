class FeedbacksController < ApplicationController
	def new
		@feedback = Feedback.new
	end

	def create
		@feedback = Feedback.new(feedback_params)
    	if @feedback.save
    	  flash[:info] = "Wow, that worked"
    	  redirect_to root_url
    	else
      	render 'new'
    	end
	end

	private 
  	def feedback_params
  		params.require(:feedback).permit(:name, :subject, :body)                       
 	 end
end
