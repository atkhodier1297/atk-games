class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.string :img_url
      t.integer :rating
      t.string :category

      t.timestamps
    end
  end
end
