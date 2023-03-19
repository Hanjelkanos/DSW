class CreateNoteUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :note_users do |t|
      t.string :noteid
      t.string :useremail

      t.timestamps
    end
  end
end
