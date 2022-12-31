class ProductsController < ApplicationController

    def index
        render json: Product.all, status: :ok
    end

    def show
        product = Product.find(params[:id])
        render json: product, status: :ok
    end
    
    def product_reviews
        product = Product.find(params[:id]).reviews
        render json: product, status: :ok
    end

    def create
        product = Product.create(
            name: product_params[:name],
            description: product_params[:description],
            price: product_params[:price],
            img_url: product_params[:img_url],
            rating: product_params[:rating],
            category: product_params[:category]
        )
        product.save
        render json: product, status: :created
    end

    def destroy
        product = Product.find(params[:id])
        product.destroy
        render json: product
        head :no_content
    end

    def update
        product = Product.find(params[:id])
        product.update(product_params)
        render json: product, status: :accepted
    end

    private

    def product_params
        params.permit(:name, :description, :price, :img_url, :rating, :category)
    end

end
