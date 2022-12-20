class CartsController < ApplicationController

   def current_cart
        cart = Cart.find(session[:cart])
        render json: cart, serializer: ProductsInCartSerializer, status: :ok
   end

end
