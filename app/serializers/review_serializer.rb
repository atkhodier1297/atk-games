class ReviewSerializer < ActiveModel::Serializer
  attributes :description, :rating, :user_id, :product_id
  has_one :user
end
