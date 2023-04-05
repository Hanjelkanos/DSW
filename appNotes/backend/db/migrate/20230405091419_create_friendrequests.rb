class CreateFriendrequests < ActiveRecord::Migration[7.0]
  def change
    create_table :friendrequests do |t|
      t.string :sourceuseremail
      t.string :targetuseremail
      t.string :date

      t.timestamps
    end
  end
end
