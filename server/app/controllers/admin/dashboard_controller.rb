class Admin::DashboardController < ApplicationController
  before_action :require_login

  def index
    @data = {
      admins: Admin.all,
      health_regions: HealthRegion.all,
      stages: Stage.all 
    }
    render json: @data
  end

  private
  def require_login
    render json: { message: "Unauthorized user: Permission denied" } unless session[:user_id]
  end

end
