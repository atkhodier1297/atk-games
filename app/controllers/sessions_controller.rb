class SessionsController < ApplicationController

    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            session[:cart_id] = user.cart.id if user.cart
            if (!session[:cart_id])
            session[:user_id] = user.id 
            end
            render json: user, status: :created
        else
            render json: {error: "Invalid email or password"}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        session.delete :cart_id
        head :no_content
    end

end
