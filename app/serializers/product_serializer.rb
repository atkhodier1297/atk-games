class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :price,
  :img_url, :rating, :category

  has_many :reviews
  has_many :users, through: :reviews
end
