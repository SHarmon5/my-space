Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :members
    get 'my_members', to: 'members#my_members'
  end
end
