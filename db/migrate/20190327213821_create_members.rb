class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :members do |t|
      t.string :firstname
      t.string :lastname
      t.string :from
      t.string :avatar

      t.timestamps
    end
  end
end
