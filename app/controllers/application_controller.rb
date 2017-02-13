class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception, if: proc { |c| c.request.format =~ %r{application/json} }

  def index
    render layout: 'application'
  end
end
