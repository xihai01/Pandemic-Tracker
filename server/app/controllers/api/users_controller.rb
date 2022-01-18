class Api::UsersController < ApplicationController
  before_action :require_login

  def index
    users = User.all
    render json: users
    
  end

  private

  def require_login
    # do stuff to check if user is logged in
    render json: { message: "Unauthorized user: Permission denied" } unless session[:user_id]
  end

end
