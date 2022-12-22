class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :admin
  has_one :cart
  has_many :reviews
end
