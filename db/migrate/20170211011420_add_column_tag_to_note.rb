class AddColumnTagToNote < ActiveRecord::Migration[5.0]
  def change
    add_column :notes, :tag, :text
  end
end
