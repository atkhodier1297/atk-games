Rails.application.routes.draw do
  
  # session routes
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  resources :users
  resources :reviews
  resources :products

end
