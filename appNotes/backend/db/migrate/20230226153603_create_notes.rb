class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :notes do |t|
      t.string :title
      t.text :body
      t.string :author
      t.string :date
      t.string :image
      t.string :collection

      t.timestamps
    end
  end
end