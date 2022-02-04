Rails.application.routes.draw do

  namespace :admin do
  get 'users/index'
  end

  namespace :admin do
  get 'users/create'
  end

  namespace :admin do
  get 'users/update'
  end

  namespace :admin do
  get 'users/destroy'
  end

  # admin/.. => secure api
  namespace :admin do
    get '/login' => 'sessions#create'
    get '/logout' => 'sessions#destroy'
    resources :dashboard, only: [:index]
    resources :health_regions, only: [:index, :update, :create, :destroy]
    resources :stages, only: [:index, :update, :create, :destroy]
    resources :users, only: [:index, :update, :create, :destroy]



  end

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # api/.. => public api
  namespace :api do
    resources :maps, only: [:index] # fetches geoJSON
    resources :map_color, only: [:index] # fetches stage colors of regions
    resources :restrictions, only: [:show] # fetches restriction data of each region
  end

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
