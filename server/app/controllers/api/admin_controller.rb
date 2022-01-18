class Api::AdminController < ApplicationController
  before_action :require_login

  def index
    data = {
      admins: Admin.all,
      users: User.all,
      health_regions: HealthRegion.all
      # stages: Stage.all 
    }
    render json: data
  end

  private
  def require_login
    # do stuff to check if user is logged in
    render json: { message: "Unauthorized user: Permission denied" } unless session[:user_id]
  end

end
