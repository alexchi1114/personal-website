Rails.application.routes.draw do
  
  get '/project', to: 'static_pages#project'

  get '/contact', to: 'static_pages#contact'

  get '/about', to: 'static_pages#about'

  root 'static_pages#home'

  resources :feedbacks, only: [:new, :create]

end
