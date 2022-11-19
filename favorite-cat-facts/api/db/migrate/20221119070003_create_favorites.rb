class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.text :quote

      t.timestamps
    end
  end
end
