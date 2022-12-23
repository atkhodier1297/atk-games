class CartProductSerializer < ActiveModel::Serializer
  attributes :id, :total, :products
  def product
    self.object.product
  end
end
