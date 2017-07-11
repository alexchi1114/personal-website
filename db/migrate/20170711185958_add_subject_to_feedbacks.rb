class AddSubjectToFeedbacks < ActiveRecord::Migration[5.0]
  def change
  	add_column :feedbacks, :subject, :string
  end
end
