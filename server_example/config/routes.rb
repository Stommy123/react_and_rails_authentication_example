Rails.application.routes.draw do
  scope '/api' do
    post 'authenticate', to: 'authentication#authenticate'
    resources :users
  end
end
