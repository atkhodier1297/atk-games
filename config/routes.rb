Rails.application.routes.draw do
  
  # user routes
  post '/signup', to: "users#create" 
  get '/me', to: "users#show"

  # session routes
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  resources :reviews
  resources :products

end
