class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.numeric :age
      t.references :role, foreign_key: true

      t.timestamps
    end
  end
end
