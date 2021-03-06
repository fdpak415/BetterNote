Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :tags, only: [:index, :create, :show, :update, :destroy]
    resources :notebooks, only: [:index, :create, :edit, :show, :update, :destroy]
    resources :notes, only: [:index, :create, :edit, :show, :update, :destroy] do
      get "search", on: :collection
    end

  end

  root "static_pages#root"
end
