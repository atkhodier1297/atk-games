class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :description, :rating, :user_id, :product_id
end
