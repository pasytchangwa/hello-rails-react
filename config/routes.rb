Rails.application.routes.draw do
  get 'statics/index'
  namespace :v1, defaults: {format: JSON} do
    get 'greetings', to: 'greetings#index'
  end

  root 'static#index'
end
