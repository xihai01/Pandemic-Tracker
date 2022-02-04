class Admin::UsersController < ApplicationController
  before_action :find_user, only: [:update, :destroy]
  before_action :require_login

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: {message:'Successfully updated'}, status: 200
    else
      render json: {error: 'Unable to add user'}, status: 400
    end
  end

  def update
    if @user
      User.update(params[:id],user_params)
      render json: {message:'Successfully updated'}, status: 200
    else 
      render json: {error: 'Unable to update user details'}, status: 400
    end
  end

  def destroy
    @user.destroy
    render json: {message:'Successfully deleted user account'}, status: 200
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :position, :email)
  end

  def find_user
    @user = User.find(params[:id])
  end

  def require_login
    render json: { message: "Unauthorized user: Permission denied" } unless session[:user_id]
  end
end
