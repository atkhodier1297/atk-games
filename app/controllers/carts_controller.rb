class CartsController < ApplicationController

   def show
        caty = Cart.find(session[:cart_id])
        render json: current_cart, status: :ok
   end

   
end
