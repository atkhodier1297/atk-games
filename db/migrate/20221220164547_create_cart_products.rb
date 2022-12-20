class CreateCartProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_products do |t|
      t.belongs_to :cart, null: false, foreign_key: true
      t.belongs_to :products, null: false, foreign_key: true

      t.timestamps
    end
  end
end
