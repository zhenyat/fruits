Rails.application.routes.draw do
  get 'fruits/dashboard'
  root 'home#index'
  resources :fruits, only: [:index, :create, :destroy, :update]
end
