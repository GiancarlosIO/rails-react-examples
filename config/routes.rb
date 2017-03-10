Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :notes
      resources :contacts
      resources :pads
      resources :users
    end
  end

  get '*path' => 'application#index'
  get '/' => 'application#index'

end
