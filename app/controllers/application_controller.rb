class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session, if: proc { |c| c.request.format =~ %r{application/json} }

  def index
    render layout: 'application'
  end
end
