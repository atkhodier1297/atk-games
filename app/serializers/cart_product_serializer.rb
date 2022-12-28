class CartProductSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :total, :products
  def product
    self.object.product
  end
end
