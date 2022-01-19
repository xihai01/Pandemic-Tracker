class Admin::HealthRegionsController < ApplicationController
  before_action :find_region, only: [:update, :destroy]
  
  #GET health regions
  def index
    @health_regions = HealthRegion.all
    render json: @health_regions
  end

  #PUT /health_region/:id 
  def update
    if @health_region
      HealthRegion.update(health_params)
      render json: {message:'Successfully updated'}, status: 200
    else 
      render json: {error: 'Unable to update health region'}, status: 400
    end
  end

  private
  def health_params
    params.require(:health_region).permit(:region_code, :region_name)
  end

  def find_region
    @health_region = HealthRegion.find(params[:id])
  end

end
