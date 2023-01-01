class ApplicationController < ActionController::API
    include ActionController::Cookies

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
      end

      # post "/destinations/:id/reviews" do
      #   destination = Destination.find(params[:id])
    
      #   review = Review.create(
      #     message: params[:message],
      #     stars: params[:stars],
      #     destination_id: destination.id
      #   )
      #   review.to_json
      # end
end
