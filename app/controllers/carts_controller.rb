class CartsController < ApplicationController


   def index
      render json: Cart.all, status: :ok
   end

   def show
      cart = Cart.find(session[:cart_id])
      render json: cart, status: :ok
  end

   def current_cart
        cart = Cart.find(session[:cart])
        render json: cart, serializer: ProductsInCartSerializer, status: :ok
   end

   def destroy
      cart = Cart.find(params[:id])
      cart.destroy
      render json: cart
      head :no_content
   end

end
