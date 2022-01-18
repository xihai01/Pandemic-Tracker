class SessionsController < ApplicationController
  # skip_before_action :verify_authenticity_token, :only => [:create]

  #/login endpoint creates a session and returns data 
  def create
    # If the user exists AND the password entered is correct.
    if admin = Admin.authenticate_with_credentials(params[:email], params[:password])
      # Save the user id inside the browser cookie. This is how we keep the user 
      # logged in when they navigate around our website.
      session[:user_id] = admin.id
      # users = User.all
      # render json: users
      redirect_to '/api/users'
    else
    # If user's login doesn't work, send them back to the login form.
      render json: { message: "Bad credentials" }, status: :unauthorized
    end
  end

  def destroy
    session[:user_id] = nil
    render json: { message: "Logged out successfully" }
  end

end
