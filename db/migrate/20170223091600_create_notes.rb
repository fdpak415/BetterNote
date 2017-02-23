class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.text :body
      t.integer :notebook_id, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
    add_index :notes, :notebook_id
    add_index :notes, :author_id

  end
end
