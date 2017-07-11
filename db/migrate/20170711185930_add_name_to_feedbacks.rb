class AddNameToFeedbacks < ActiveRecord::Migration[5.0]
  def change
    add_column :feedbacks, :name, :string
  end
end
