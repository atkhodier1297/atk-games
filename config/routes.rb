Rails.application.routes.draw do
  
  get '/hello', to: 'application#hello_world'

  # session routes
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  resources :users
  resources :reviews
  resources :products

end
