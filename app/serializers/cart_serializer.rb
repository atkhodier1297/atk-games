class CartSerializer < ActiveModel::Serializer
  attributes :id, :total, :user_id

  has_many :cart_products
end
