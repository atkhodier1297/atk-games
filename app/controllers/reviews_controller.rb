class ReviewsController < ApplicationController

    def index
        render json: Review.all, status: :ok
    end

    def create
        review = Review.create(
            :description review_params[:description]
            :rating review_params[:rating]
            :user_id review_params[:user_id]
            :product_id review_params[:product_id]
        )
        review.save
        render json: review, status: :created
    end

    def destroy
        review = review.find(params[:id])
        review.destroy
        render json: review
        head :no_content
    end

    private

    def review_params
        params.permit(:description, :rating, :user_id, :product_id)
    end
end
