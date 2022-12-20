class ProductsInCartSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :total
  has_many :cart_products
end
