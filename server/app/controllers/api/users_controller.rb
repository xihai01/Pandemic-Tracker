class Api::UsersController < ApplicationController
  def index
    if session
      users = User.all
      render json: users
    else 
      render json: { message: "Unauthorized user: Permission denied" }
    end
  end



end
