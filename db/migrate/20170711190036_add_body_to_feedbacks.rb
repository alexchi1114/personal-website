class AddBodyToFeedbacks < ActiveRecord::Migration[5.0]
  def change
  	add_column :feedbacks, :body, :string
  end
end
