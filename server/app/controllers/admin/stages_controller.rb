class Admin::StagesController < ApplicationController
  before_action :find_stage, only: [:update, :destroy]
  before_action :require_login

   #GET stages
  def index
    @stages = Stage.all
    render json: @stages
  end

  #PUT /admin/stages/:id 
  def update
    if @stage
      Stage.update(stage_params)
      render json: {message:'Successfully updated'}, status: 200
    else 
      render json: {error: 'Unable to update health region'}, status: 400
    end
  end

  private
  def stage_params
    params.require(:stage).permit(:max_indoor_gathering, :max_outdoor_gathering, 
    :retail, :ceremony, :food_establishments, :sports_recreational, :entertainment, :personal_care
    :color_code)
  end

  def find_stage
    @stage = Stage.find(params[:id])
  end

  private
  def require_login
    render json: { message: "Unauthorized user: Permission denied" } unless session[:user_id]
  end
end
