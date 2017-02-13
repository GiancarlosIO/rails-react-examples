Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :notes
    end
  end

  get '*path' => 'application#index'
  get '/' => 'application#index'

end
