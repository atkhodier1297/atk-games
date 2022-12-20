Rails.application.routes.draw do

  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  get "/current-cart", to: "carts#current_cart"
  


  resources :users
  resources :reviews
  resources :products
  resources :charges
  resources :carts

end
