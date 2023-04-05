class CreateFriendships < ActiveRecord::Migration[7.0]
  def change
    create_table :friendships do |t|
      t.string :useremail1
      t.string :useremail2

      t.timestamps
    end
  end
end
