class Product < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews 
    
    has_many :cart_products
    has_many :carts, through: :cart_products
end
