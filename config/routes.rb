Rails.application.routes.draw do

  post '/login', to: "sessions#create"
  post '/signup', to: "users#create"
  delete '/logout', to: "sessions#destroy"

  get "/current-cart", to: "carts#current_cart"
  post "/add-to-cart", to: "cart_products#create"
  delete "/remove-from-cart", to: "cart_products#destroy"


  resources :users
  resources :reviews
  resources :products
  resources :charges
  resources :carts

end
