Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do
      root "notes#index"
      resources :notes, only:[:index, :show, :create, :update, :destroy]
    end
    namespace :v2 do
      root "users#index"
      resources :users, only:[:index, :show, :create, :update, :destroy]
    end
    namespace :v3 do
      root "notesusers#index"
      resources :notesusers, only:[:index, :show, :create, :update, :destroy]
    end
  end
end
