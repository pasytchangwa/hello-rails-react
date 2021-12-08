Rails.application.routes.draw do
  get 'statics/index'
  namespace :v1, defaults: {format: JSON} do
    get 'greetings', to: 'greetings#index'
  end

  get '*page', to:'statics#index', constraints:->(req) do
    !req.xhr? && req.format.html?
  end

  root 'statics#index'

end
