class Api::MembersController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: User.random_member(current_user.liked_members)
  end

  def update
    current_user.liked_members << params[:id].to_i
    current_user.save
  end

  def my_members
    render json: User.liked(current_user.liked_members)
  end
  
end
