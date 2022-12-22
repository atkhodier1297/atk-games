Rails.application.routes.draw do

  post '/login', to: "sessions#create"
  post '/signup', to: "users#create"
  delete '/logout', to: "sessions#destroy"

  get "/current-cart", to: "carts#current_cart"
  post "/add-to-cart", to: "cart_products#create"
  delete "/remove-from-cart", to: "cart_products#destroy"

  get "/product-reviews/:id", to: "products#product_reviews"

  resources :users
  resources :reviews
  resources :products
  resources :charges
  resources :carts
  resources :cart_products

end
