class CartProductsController < ApplicationController

    wrap_parameters format: []
    
    def index
        render json: CartProduct.all, status: :ok
    end

    def create
        cart_product = CartProduct.create!(**cart_product_params, cart_id: session[:cart])
        render json: cart_product, status: :created
    end

    def destroy
        cart_product = CartProduct.find_by(params[:id])
        cart_product.destroy
        head :no_content
    end

    private

    def cart_product_params
        params.permit(:product_id)
    end
end
