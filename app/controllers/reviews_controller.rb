class ReviewsController < ApplicationController

    def index
        render json: Review.all, status: :ok
    end

    def show
        review = Review.find(params[:id])
        render json: review, status: :ok
    end

    def add_reviews
        review = Review.create!(
            description: review_params[:description],
            rating: review_params[:rating],
            user_id: review_params[:user_id],
            product_id: review_params[:product_id]
        )
        render json: review, status: :created
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:description, :rating, :user_id, :product_id)
    end
end
