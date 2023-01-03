class UsersController < ApplicationController

    before_action :authorize, only: [:show, :update]

    def create
        user = User.create(user_params)
        if user.valid?
            user.create_cart(total: 0)
            session[:user_id] = user.id
            session[:cart] = user.cart.id
            render json: user, status: :created
        else
            render json: [error: user.errors.full_messages], status: :unprocessable_entity
        end
    end

    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    def update
        user = User.find(params[:id])
        user.update(user_params)
        render json: user, status: :accepted
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private

    def authorize
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def user_params
        params.permit(:email, :password, :name, :admin)
    end

end
