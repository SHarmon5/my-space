class AddLikedMembersToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :liked_members, :text
  end
end
